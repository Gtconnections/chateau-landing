'use client';
import React, { useState } from 'react';

// Formulario de captura de email ("Get the Deck"). Client Component porque usa
// un event handler (onSubmit) e interactividad.
export default function EmailSignup() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    // Aquí puedes conectar el envío real (p. ej. a /api/checkout o a tu CRM).
  }

  return (
    <form className="signup" onSubmit={onSubmit}>
      <input type="email" placeholder="Enter your email" aria-label="Email" required />
      <button className="btn btn-primary" type="submit">Get the Deck</button>
      <div className="note" style={{ width: '100%' }}>
        {sent
          ? 'Thank you for your interest. Your deck should arrive in your inbox soon.'
          : 'Enter your email and we’ll send you the investor deck.'}
      </div>
    </form>
  );
}
