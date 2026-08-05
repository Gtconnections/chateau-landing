'use client';
import React, { useEffect, useState } from 'react';

// Cuenta regresiva de la oferta por tiempo limitado.
// Cambia TARGET por la fecha real de cierre de la promo.
const TARGET = new Date('2026-08-24T23:59:59-04:00').getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

export default function Countdown() {
  // Valor inicial fijo para render en servidor (evita hydration mismatch).
  const [t, setT] = useState({ d: 20, h: 12, m: 27, s: 22 });
  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="count">
      <span><b>{t.d}</b> <span className="unit">Days</span></span>
      <span><b>{t.h}</b> <span className="unit">Hrs</span></span>
      <span><b>{t.m}</b> <span className="unit">Mins</span></span>
      <span><b>{t.s}</b> <span className="unit">Secs</span></span>
    </span>
  );
}
