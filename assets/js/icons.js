/* ==========================================================================
   KEMEKOL — ከመኮል
   Material Design 3 Vector Icon Library
   Clean, modern, accessible SVGs (24x24 viewBox, currentColor, 0 gradients).
   ========================================================================== */
(function (root) {
  'use strict';

  const ICONS = {
    // Navigation & General
    home: '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>',
    bible: '<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/><path d="M12 4h6v16h-6z" opacity="0.3"/>',
    prayer: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>',
    fathers: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>',
    gitsawe: '<path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>',
    life: '<path d="M12 2c-1.1 0-2 .9-2 2 0 1.35 1.5 3.5 2 4 .5-.5 2-2.65 2-4 0-1.1-.9-2-2-2zm-3 8h6v12H9z"/><path d="M7 14h10v8H7z" opacity="0.25"/>',
    store: '<path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/>',
    apps: '<path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>',
    services: '<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>',
    about: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>',
    contact: '<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>',

    // Chrome / Controls
    sun: '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>',
    moon: '<path d="M12.3 2a10 10 0 0 0-1.9 19.8 10 10 0 0 0 11.5-11.5A10.03 10.03 0 0 1 12.3 2z"/>',
    menu: '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>',
    close: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',
    globe: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>',
    search: '<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',
    play: '<path d="M3 22v-20l18 10-18 10z"/>',
    check: '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>',
    copy: '<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>',
    arrowRight: '<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>',
    star: '<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>',
    qr: '<path d="M3 3h8v8H3zm2 2v4h4V5zm8-2h8v8h-8zm2 2v4h4V5zM3 13h8v8H3zm2 2v4h4v-4zm13-2h3v2h-3zm-5 0h2v4h-2zm2 2h3v2h-3zm-2 2h2v4h-2zm4 2h3v2h-3z"/>',

    // Specific Ethiopian Liturgical & Application Icons
    cross: '<path d="M11 2h2v6h6v2h-6v4h4v2h-4v6h-2v-6H7v-2h4v-4H5V8h6V2z"/>',
    censer: '<path d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4 7h8l-1.5 6h-5L8 10zm-2 7h12l-1 4H7l-1-4z"/>',
    pillar: '<path d="M6 3h12v3H6zm2 4h8v10H8zm-2 11h12v3H6z"/>',
    sinksar: '<path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 16.1 7.2 18.6l.9-5.3L4.3 9.6l5.3-.8L12 2z"/>',
    fast: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5h-2v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>',
    qa: '<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>',
    ai: '<path d="M12 2L14.4 7.6 20 10 14.4 12.4 12 18 9.6 12.4 4 10 9.6 7.6 12 2zm6 14l1.2 2.8L22 20l-2.8 1.2L18 24l-1.2-2.8L14 20l2.8-1.2L18 16zM6 16l1.2 2.8L10 20l-2.8 1.2L6 24l-1.2-2.8L2 20l2.8-1.2L6 16z"/>',
    shield: '<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>'
  };

  // Modern Bespoke Application Logos / Vectors
  const APP_SVGS = {
    'tewahedo-one': `
      <svg class="app-vector" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="currentColor" fill-opacity="0.12"/>
        <path d="M24 8V40M12 20H36M16 12L32 28M32 12L16 28" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="24" cy="20" r="3.5" fill="currentColor"/>
        <rect x="22" y="6" width="4" height="4" rx="1" fill="currentColor"/>
        <rect x="22" y="38" width="4" height="4" rx="1" fill="currentColor"/>
        <rect x="10" y="18" width="4" height="4" rx="1" fill="currentColor"/>
        <rect x="34" y="18" width="4" height="4" rx="1" fill="currentColor"/>
      </svg>`,

    'amde-haymanot': `
      <svg class="app-vector" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="currentColor" fill-opacity="0.12"/>
        <path d="M14 38H34M16 18H32M18 18V38M30 18V38M24 18V38" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <path d="M24 8C21 11 20 13 24 16C28 13 27 11 24 8Z" fill="currentColor"/>
      </svg>`,

    'gitsawe': `
      <svg class="app-vector" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="currentColor" fill-opacity="0.12"/>
        <rect x="11" y="13" width="26" height="25" rx="5" stroke="currentColor" stroke-width="3"/>
        <path d="M17 9V15M31 9V15M11 21H37" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <circle cx="24" cy="29" r="3.5" fill="currentColor"/>
      </svg>`,

    'wudase-maryam': `
      <svg class="app-vector" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="currentColor" fill-opacity="0.12"/>
        <path d="M24 10C18 10 14 16 24 28C34 16 30 10 24 10Z" fill="currentColor" fill-opacity="0.3"/>
        <path d="M24 10C18 10 14 16 24 28C34 16 30 10 24 10Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
        <path d="M24 28V38M19 38H29" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      </svg>`,

    'apostolic-answers': `
      <svg class="app-vector" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="currentColor" fill-opacity="0.12"/>
        <path d="M24 8L12 13V24C12 31.5 17 38.2 24 40C31 38.2 36 31.5 36 24V13L24 8Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
        <path d="M24 16V26M24 31V32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      </svg>`,

    'utubaa': `
      <svg class="app-vector" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="currentColor" fill-opacity="0.12"/>
        <path d="M24 8L16 40H32L24 8Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
        <path d="M20 22H28M18 32H30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,

    'tewahedo-creed': `
      <svg class="app-vector" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="currentColor" fill-opacity="0.12"/>
        <path d="M14 12H34M14 20H34M14 28H28M14 36H24" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <circle cx="34" cy="32" r="4" fill="currentColor"/>
      </svg>`,

    'tewahedo-ai': `
      <svg class="app-vector" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="currentColor" fill-opacity="0.12"/>
        <path d="M24 8L27 18L37 21L27 24L24 34L21 24L11 21L21 18L24 8Z" fill="currentColor"/>
        <circle cx="34" cy="12" r="2.5" fill="currentColor"/>
        <circle cx="14" cy="34" r="2" fill="currentColor"/>
      </svg>`
  };

  function svg(name, className = 'icon', size = 20) {
    const path = ICONS[name] || '';
    if (!path) return '';
    return `<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">${path}</svg>`;
  }

  /* Real Play Store artwork, preferred over the bespoke vector where we have
     the shipped icon. Add an entry here as each app's art is confirmed. */
  const APP_ART = {
    'tewahedo-one': { src: 'assets/img/apps/tewahedo-one.webp', alt: 'Tewahedo One' },
    'amde-haymanot': { src: 'assets/img/apps/amde-haymanot.webp', alt: 'Amde Haymanot' },
    'gitsawe': { src: 'assets/img/apps/gitsawe-icon.png', alt: 'Gitsawe' }
  };

  function appIcon(id, fallbackLetter = '') {
    const art = APP_ART[id];
    if (art) {
      return `<img class="app-art" src="${art.src}" alt="${art.alt}" width="48" height="48" loading="lazy" decoding="async">`;
    }
    if (APP_SVGS[id]) {
      return APP_SVGS[id];
    }
    return `<span class="glyph-letter">${fallbackLetter}</span>`;
  }

  root.KEMEKOL_ICONS = {
    svg,
    appIcon,
    ICONS,
    APP_SVGS,
    APP_ART
  };
})(window);

