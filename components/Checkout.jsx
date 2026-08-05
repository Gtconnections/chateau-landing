'use client';
import React, { useState } from 'react';
import { Brand, Nav, PromoBar } from './Landing';
import { TIERS, EMPLOYEE_PERK, PERKS_NOTE } from './data';

const DETAILS = [
  { k: 'Share Price:', v: '$2.50 USD' },
  { k: 'Min Investment:', v: '$1,000* USD' },
  { k: 'Offering Type:', v: 'Equity' },
  { k: 'Asset Type:', v: 'Common Stock' },
];

export default function Checkout() {
  const [tier, setTier] = useState(0); // índice en TIERS
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'err'
  const [errMsg, setErrMsg] = useState('');
  const selected = TIERS[tier];

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrMsg('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    data.tier = selected.name;
    data.tierNumber = selected.n;
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || 'No se pudo enviar. Revisa la configuración de SendGrid.');
      setStatus('ok');
      form.reset();
    } catch (err) {
      setStatus('err');
      setErrMsg(err.message);
    }
  }

  return (
    <>
      <PromoBar />
      <Nav />
      <div className="checkout-wrap">
        <div className="container">
          <h1>Chateau CP Hospitality Ventures Investment Opportunity</h1>
          <div className="checkout-grid">
            {/* ---------- Formulario ---------- */}
            <div className="panel">
              <h2>Your Investment</h2>
              <form onSubmit={handleSubmit}>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName" name="firstName" required autoComplete="given-name" />
                  </div>
                  <div className="field">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName" name="lastName" required autoComplete="family-name" />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="amount">Investment amount (USD)</label>
                    <input id="amount" name="amount" type="number" min="1000" step="1" placeholder="1000" required />
                  </div>
                  <div className="field">
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" defaultValue="United States">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Venezuela</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="address">Address</label>
                  <input id="address" name="address" autoComplete="street-address" />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="city">City</label>
                    <input id="city" name="city" autoComplete="address-level2" />
                  </div>
                  <div className="field">
                    <label htmlFor="zip">ZIP / Postal</label>
                    <input id="zip" name="zip" autoComplete="postal-code" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="selectedTier">Selected tier</label>
                  <input id="selectedTier" name="selectedTierLabel" readOnly value={`Tier ${selected.n} — ${selected.name} (${selected.min})`} />
                </div>

                <label className="consent">
                  <input type="checkbox" name="consent" required />
                  <span>
                    I consent to receiving reports, promotional emails and other commercial electronic
                    messages from Chateau CP Hospitality Ventures or from other service providers on behalf
                    of Chateau CP Hospitality Ventures.
                  </span>
                </label>

                <button className="btn btn-primary btn-block" type="submit" style={{ marginTop: 20 }} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Submit Investment'}
                </button>

                {status === 'ok' && (
                  <div className="form-msg ok">
                    ¡Gracias! Recibimos tu solicitud de inversión. Te enviamos un correo de confirmación.
                  </div>
                )}
                {status === 'err' && <div className="form-msg err">{errMsg}</div>}
              </form>
              <p style={{ fontSize: '.78rem', color: '#7a6f5c', marginTop: 16 }}>
                Nota: este formulario es una maqueta. En producción se conecta con la pasarela/procesador
                de inversión. El envío dispara el correo de confirmación vía SendGrid.
              </p>
            </div>

            {/* ---------- Sidebar ---------- */}
            <aside>
              <div className="panel" style={{ marginBottom: 24 }}>
                <h3 className="sub">Investment Details</h3>
                <div className="details-box">
                  {DETAILS.map((d) => (
                    <div className="cell" key={d.k}>
                      <div className="k">{d.k}</div>
                      <div className="v">{d.v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 18, fontSize: '.85rem' }}>
                  <a href="#" style={{ textDecoration: 'underline' }}>SEC Filings</a>
                  <a href="https://www.sec.gov/Archives/edgar/data/2132417/000187285626000225/lostboyformc.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Offering Circular</a>
                </div>
              </div>

              <div className="panel">
                <h3 className="sub">Perks</h3>
                <div className="tier-select">
                  {TIERS.map((t, i) => (
                    <button type="button" key={t.n} className={i === tier ? 'active' : ''} onClick={() => setTier(i)}>
                      <span className="t">Tier {t.n}</span>
                      <span className="n">{t.name}</span>
                    </button>
                  ))}
                </div>

                <div className="tier-detail">
                  <div className="badge">Tier {selected.n} · {selected.min}</div>
                  <h3>{selected.name}</h3>
                  <div style={{ fontSize: '.85rem', opacity: .85, marginBottom: 8 }}>
                    {selected.bonus} Amount-Based Bonus Shares
                  </div>
                  {selected.perks.map((p) => (
                    <div key={p.title} style={{ marginTop: 12 }}>
                      <strong style={{ fontSize: '.95rem' }}>{p.title}</strong>
                      <ul>
                        {p.bullets.map((b, bi) => (
                          <li key={bi}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid rgba(237,230,219,.2)', fontSize: '.82rem' }}>
                    <strong>Employee Perk:</strong> {EMPLOYEE_PERK.bonus} {EMPLOYEE_PERK.note}
                  </div>
                </div>

                <p style={{ fontSize: '.72rem', color: '#7a6f5c', marginTop: 14 }}>{PERKS_NOTE}</p>
                <p style={{ fontSize: '.72rem', color: '#7a6f5c' }}>
                  Please note that while bonus shares won’t be visible at checkout, they will be added to
                  your account after your purchase.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
