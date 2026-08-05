import { NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

// Fuerza runtime Node (no Edge) para poder leer archivos y usar variables de entorno.
export const runtime = 'nodejs';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

function fill(template, data) {
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) => (data[k] != null ? String(data[k]) : ''));
}

async function sendEmail({ apiKey, from, fromName, to, subject, html, replyTo }) {
  const body = {
    personalizations: [{ to: [{ email: to }], subject }],
    from: { email: from, name: fromName },
    content: [{ type: 'text/html', value: html }],
  };
  if (replyTo) body.reply_to = { email: replyTo };

  const res = await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`SendGrid ${res.status}: ${detail.slice(0, 300)}`);
  }
}

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Validación mínima
  if (!data.email || !data.firstName) {
    return NextResponse.json({ error: 'Faltan campos requeridos (nombre y email).' }, { status: 400 });
  }

  const {
    SENDGRID_API_KEY,
    SENDGRID_FROM_EMAIL,
    SENDGRID_FROM_NAME = 'Château',
    SENDGRID_SEND_TO_EMAIL, // correo interno que recibe el aviso de cada lead
    SENDGRID_NOTIFY_EMAIL,  // alias antiguo (compatibilidad)
  } = process.env;

  const notifyTo = SENDGRID_SEND_TO_EMAIL || SENDGRID_NOTIFY_EMAIL;

  // Datos que se inyectan en la plantilla de correo
  const amount = Number(data.amount || 0);
  const model = {
    firstName: data.firstName || '—',
    lastName: data.lastName || '—',
    email: data.email || '—',
    phone: data.phone || '—',
    amount: amount ? amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }) : '—',
    tier: data.tier || '—',
    tierNumber: data.tierNumber || '',
    street: data.address || '—',
    city: data.city || '—',
    zip: data.zip || '—',
    country: data.country || '—',
    address: [data.address, data.city, data.zip, data.country].filter(Boolean).join(', ') || '—', // combinado (compat)
    companyName: SENDGRID_FROM_NAME,
    year: new Date().getFullYear(),
  };

  // Si SendGrid no está configurado aún, respondemos OK pero avisamos (modo maqueta).
  if (!SENDGRID_API_KEY || !SENDGRID_FROM_EMAIL) {
    console.warn('[checkout] SendGrid no configurado — .env.local incompleto. Se omite el envío.');
    return NextResponse.json({
      ok: true,
      emailed: false,
      note: 'Formulario recibido. SendGrid no está configurado (.env.local). No se envió correo.',
    });
  }

  try {
    const tplPath = path.join(process.cwd(), 'emails', 'investment-confirmation.html');
    const template = await readFile(tplPath, 'utf8');
    const html = fill(template, model);

    // 1) Confirmación al inversionista
    await sendEmail({
      apiKey: SENDGRID_API_KEY,
      from: SENDGRID_FROM_EMAIL,
      fromName: SENDGRID_FROM_NAME,
      to: model.email,
      subject: `Thank you for your investment — ${model.companyName}`,
      html,
      replyTo: SENDGRID_FROM_EMAIL,
    });

    // 2) Aviso interno al equipo (si se definió el correo de notificación)
    if (notifyTo) {
      await sendEmail({
        apiKey: SENDGRID_API_KEY,
        from: SENDGRID_FROM_EMAIL,
        fromName: SENDGRID_FROM_NAME,
        to: notifyTo,
        subject: `New investment lead: ${model.firstName} ${model.lastName} (${model.tier})`,
        html: `<h2>New investment submission</h2>
          <p><b>First name:</b> ${model.firstName}</p>
          <p><b>Last name:</b> ${model.lastName}</p>
          <p><b>Email:</b> ${model.email}</p>
          <p><b>Phone:</b> ${model.phone}</p>
          <p><b>Investment amount:</b> ${model.amount}</p>
          <p><b>Selected tier:</b> ${model.tier}</p>
          <p><b>Address:</b> ${model.street}</p>
          <p><b>City:</b> ${model.city}</p>
          <p><b>ZIP / Postal:</b> ${model.zip}</p>
          <p><b>Country:</b> ${model.country}</p>`,
        replyTo: model.email,
      });
    }

    return NextResponse.json({ ok: true, emailed: true });
  } catch (err) {
    console.error('[checkout] error:', err);
    return NextResponse.json({ error: err.message || 'Error enviando el correo.' }, { status: 502 });
  }
}
