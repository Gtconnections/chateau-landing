'use client';
import { useEffect } from 'react';

/**
 * Asegura el anclado a #seccion al llegar desde otra página (p. ej. desde
 * /checkout hacia /#roadmap) y al cambiar el hash. Next.js (App Router) no
 * siempre hace el salto automático de forma fiable tras una navegación.
 * Respeta el offset del nav fijo vía `scroll-margin-top` (definido en CSS).
 */
export default function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return;
      const id = decodeURIComponent(hash.slice(1));
      const go = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
      };
      // Varios intentos por si el layout aún está asentándose (imágenes, etc.)
      go();
      requestAnimationFrame(go);
      setTimeout(go, 250);
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return null;
}
