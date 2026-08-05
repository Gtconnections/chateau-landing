import React from 'react';

/**
 * Marco de imagen con placeholder.
 * - Si hay `src`, muestra la imagen (cubre el marco).
 * - Si no, muestra un placeholder con la descripción, listo para que cargues
 *   la imagen final de tu marca.
 */
export default function Media({ src, alt = '', className = '', style = {}, height }) {
  const wrapStyle = { position: 'relative', ...(height ? { minHeight: height } : {}), ...style };
  return (
    <div className={`imgph ${className}`} style={wrapStyle}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 'inherit',
          }}
        />
      ) : (
        <span>{alt || 'Imagen'}</span>
      )}
    </div>
  );
}
