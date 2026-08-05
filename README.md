# Lost Boy Hospitality Ventures — Réplica (Next.js)

Réplica fiel de `invest.wearealllost.com` construida en **Next.js (App Router)**.
Incluye la landing completa y una página de **checkout** con formulario maquetado,
plantilla de correo y envío por **SendGrid**.

## Requisitos
- Node.js 18.18+ (recomendado 20 o 22)

## Puesta en marcha
```bash
npm install
cp .env.example .env.local   # ya viene un .env.local; rellena tus credenciales
npm run dev
```
Abre http://localhost:3000 (landing) y http://localhost:3000/checkout.

Para producción:
```bash
npm run build && npm start
```

## Estructura
```
app/
  layout.jsx            # layout raíz + metadata + globals.css
  page.jsx              # landing (usa components/Landing.jsx)
  checkout/page.jsx     # página de checkout (usa components/Checkout.jsx)
  api/checkout/route.js # endpoint que envía el correo vía SendGrid
  globals.css           # sistema de diseño (colores, fuentes, estilos)
components/
  data.js               # TODO el contenido/textos (edítalo para re-marcar)
  Landing.jsx           # todas las secciones de la landing
  Checkout.jsx          # formulario + sidebar de tiers
  Media.jsx             # marco de imagen con placeholder
  Countdown.jsx         # cuenta regresiva de la promo
emails/
  investment-confirmation.html  # plantilla del correo de confirmación
```

## SendGrid (correo del checkout)
1. Crea una API Key en SendGrid (Settings → API Keys).
2. Verifica un remitente (Single Sender o dominio autenticado).
3. Rellena `.env.local`:
   ```
   SENDGRID_API_KEY=SG.xxxxx
   SENDGRID_FROM_EMAIL=invest@tudominio.com
   SENDGRID_FROM_NAME=Lost Boy Hospitality Ventures
   SENDGRID_NOTIFY_EMAIL=equipo@tudominio.com   # opcional
   ```
El endpoint usa la **API REST de SendGrid** vía `fetch` (sin SDK). Al enviar el
formulario: (1) el inversionista recibe el correo de `emails/investment-confirmation.html`,
y (2) si defines `SENDGRID_NOTIFY_EMAIL`, tu equipo recibe un aviso interno.

> Si `.env.local` está vacío, el formulario responde OK en modo maqueta (sin enviar correo),
> para que puedas probar la UI sin credenciales.

## Re-marcado (branding)
Cuando tengas tu marca:
- **Colores y fuentes:** variables al inicio de `app/globals.css` (`:root`) y el bloque `@font-face`.
- **Textos:** todo está centralizado en `components/data.js`.
- **Imágenes:** `components/Media.jsx` muestra placeholders donde aún no hay imagen.
  Reemplaza los `src` (o pon los archivos en `/public` y referencia `/mi-imagen.webp`).

## Notas de fidelidad
- Fuentes originales: **Penumbra Half Serif Std** (titulares), **Futura** (cuerpo),
  **Gill Sans Std Shadowed** (logo). Se cargan del CDN original de forma temporal;
  al re-marcar, sustitúyelas por las tuyas. (Son fuentes comerciales.)
- El carrusel usa imágenes reales del sitio original; el resto son placeholders
  descriptivos listos para tus imágenes finales.
- El formulario de inversión real del sitio original es un embed de terceros
  (DealMaker + Stripe). Aquí se reemplazó por un formulario propio, como acordamos.
