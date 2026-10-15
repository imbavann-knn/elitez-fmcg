// Elitez FMCG icon set — 48×48 line icons, one consistent style.
// Strokes use currentColor (set by the parent); `A` marks the orange accent.
// Rendered inline via src/components/Icon.astro, and exported to
// public/assets/icons/*.svg (standalone copies for decks/Canva).

const A = 'fill="#FF5500"';

export const icons = {
  // ── Brand activations ──
  sampling: `
    <path ${A} d="M17 13h14l-2 13H19z"/>
    <path d="M21 4c-1 2 1 3 0 5M27 4c-1 2 1 3 0 5"/>
    <path d="M5 33h8l6 3h9a2.5 2.5 0 0 0 0-5h-6"/>
    <path d="M28 33l9-5a2.3 2.3 0 0 1 3 3.2L34 39a5 5 0 0 1-4 2H13"/>
    <path d="M5 29v15"/>`,
  roadshow: `
    <path ${A} d="M7 13h34l-2 7a4 4 0 0 1-7.5 0 4 4 0 0 1-7.5 0 4 4 0 0 1-7.5 0 4 4 0 0 1-7.5 0z"/>
    <path d="M24 13V5l6 2.5-6 2.5"/>
    <path d="M10 21v21M38 21v21M5 42h38"/>
    <path d="M14 31h20v11H14z"/>`,
  redemption: `
    <path d="M10 22h28v20H10z"/>
    <path ${A} d="M7 15h34v7H7z"/>
    <path d="M24 15v27"/>
    <path d="M24 15c-2-6-10-7-10-3 0 2.5 4 3 10 3zM24 15c2-6 10-7 10-3 0 2.5-4 3-10 3z"/>`,
  festive: `
    <path d="M24 3v5M19 8h10"/>
    <path ${A} d="M24 8c-9 0-13 6-13 13s4 13 13 13 13-6 13-13-4-13-13-13z"/>
    <path d="M24 8v26M18.5 10c-3.5 6-3.5 16 0 22M29.5 10c3.5 6 3.5 16 0 22"/>
    <path d="M19 34h10M24 34v5M21 39h6v5h-6z"/>`,
  megaphone: `
    <path ${A} d="M30 9v30L15 30H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h7z"/>
    <path d="M15 18v12"/>
    <path d="M15 30l3 11h5l-2-10"/>
    <path d="M36 18l6-3M37 24h7M36 30l6 3"/>`,

  // ── Promoters / manpower ──
  team: `
    <circle ${A} cx="24" cy="14" r="5.5"/>
    <path d="M14 40c0-6.5 4.5-11 10-11s10 4.5 10 11"/>
    <circle cx="10.5" cy="19" r="4"/>
    <path d="M3 37c0-5 3-8.5 7.5-8.5 1.8 0 3.3.5 4.5 1.4"/>
    <circle cx="37.5" cy="19" r="4"/>
    <path d="M45 37c0-5-3-8.5-7.5-8.5-1.8 0-3.3.5-4.5 1.4"/>`,
  blinkPhone: `
    <rect x="13" y="3" width="22" height="42" rx="4.5"/>
    <path d="M21 8h6"/>
    <path ${A} d="M24 14a5 5 0 0 0-5 5c0 3.6 5 8.5 5 8.5s5-4.9 5-8.5a5 5 0 0 0-5-5z"/>
    <circle cx="24" cy="19" r="1.6" fill="#fff" stroke="none"/>
    <path d="M18.5 39v-3M24 39v-6M29.5 39v-9"/>`,
  payroll: `
    <path d="M11 3h18l8 8v31H11z"/>
    <path d="M29 3v8h8"/>
    <path d="M16 19h13M16 25h13M16 31h7"/>
    <circle ${A} cx="35" cy="37" r="8"/>
    <path d="M31.5 37l2.5 2.5 4.5-4.5" stroke="#fff"/>`,
  scale: `
    <path d="M7 43V35h8v8M20 43V29h8v14M33 43V23h8v20"/>
    <path d="M5 26l12-10 7 5L41 7" stroke="#FF5500"/>
    <path d="M34 7h7v7" stroke="#FF5500"/>`,

  // ── Retail execution ──
  planogram: `
    <path d="M5 5h38v38H5zM5 18h38M5 31h38"/>
    <path d="M10 9h6v9h-6zM19 11h6v7h-6z"/>
    <path ${A} d="M28 9h6v9h-6zM10 22h6v9h-6z"/>
    <path d="M19 23h6v8h-6zM28 22h6v9h-6zM10 35h6v8h-6zM19 35h6v8h-6zM28 36h6v7h-6z"/>`,
  posStandee: `
    <path ${A} d="M11 5h26v24H11z"/>
    <path d="M19 23l10-12" stroke="#fff"/>
    <circle cx="19" cy="12.5" r="2.2" stroke="#fff"/>
    <circle cx="29" cy="21.5" r="2.2" stroke="#fff"/>
    <path d="M24 29v12M15 43h18M18 29l-4 14M30 29l4 14"/>`,
  van: `
    <path d="M3 12h25v22H3z"/>
    <path ${A} d="M28 18h9l7 8v8H28z"/>
    <path d="M31 21h5l3.5 4H31z" stroke="#fff"/>
    <circle cx="11" cy="36" r="4" fill="#fff"/>
    <circle cx="36" cy="36" r="4" fill="#fff"/>`,
  shelfCheck: `
    <circle cx="20" cy="20" r="13"/>
    <path d="M29.5 29.5l12 12" stroke="#FF5500" stroke-width="4"/>
    <path d="M14 26v-5M20 26V14M26 26v-8"/>`,

  // ── Digital ──
  contest: `
    <rect x="12" y="3" width="24" height="42" rx="4.5"/>
    <path d="M20 8h8"/>
    <path ${A} d="M24 15l2.8 5.6 6.2.9-4.5 4.4 1 6.1-5.5-2.9-5.5 2.9 1-6.1-4.5-4.4 6.2-.9z"/>
    <path d="M19 39h10"/>`,
  qr: `
    <path d="M5 5h13v13H5zM30 5h13v13H30zM5 30h13v13H5z"/>
    <path ${A} d="M9.5 9.5h4v4h-4zM34.5 9.5h4v4h-4zM9.5 34.5h4v4h-4z"/>
    <path d="M24 5v6M24 16v8h-8M5 24h6M30 24h5M40 24h3M30 30h4v4h-4zM39 30h4v4h-4zM34.5 35h4v4h-4zM30 39h4v4h-4zM39 39h4v4h-4zM24 30v13"/>`,
  camera: `
    <path d="M5 14h8l3.5-6h15l3.5 6h8v28H5z"/>
    <circle ${A} cx="24" cy="27" r="8.5"/>
    <circle cx="24" cy="27" r="3.5" stroke="#fff"/>
    <path d="M37 19h2"/>`,
  mic: `
    <rect ${A} x="18" y="4" width="12" height="23" rx="6"/>
    <path d="M12 22c0 6.6 5.4 12 12 12s12-5.4 12-12"/>
    <path d="M24 34v8M17 43h14"/>
    <path d="M6 12c-2.5 4.5-2.5 9.5 0 14M42 12c2.5 4.5 2.5 9.5 0 14"/>`,

  // ── Blink features ──
  pinCheck: `
    <path d="M24 3C16 3 10 9 10 17c0 10.5 14 28 14 28s14-17.5 14-28C38 9 32 3 24 3z"/>
    <circle ${A} cx="24" cy="17" r="7"/>
    <path d="M20.8 17l2.2 2.2 4.2-4.2" stroke="#fff"/>`,
  liveChart: `
    <path d="M5 5v38h38"/>
    <path d="M11 34l9-11 7 6 12-15" stroke="#FF5500"/>
    <circle ${A} cx="39" cy="14" r="3.2"/>
    <path d="M11 41v-2M18 41v-2M25 41v-2M32 41v-2M39 41v-2"/>`,
  report: `
    <path d="M11 8h26v36H11z"/>
    <path ${A} d="M17 4h14v8H17z"/>
    <path d="M17 20h14M17 27h14"/>
    <path d="M17 35l4 4 9-9" stroke="#FF5500"/>`,
  target: `
    <circle cx="22" cy="26" r="18"/>
    <circle cx="22" cy="26" r="11"/>
    <circle ${A} cx="22" cy="26" r="4.5"/>
    <path d="M22 26L41 7M34 7h7v7"/>`,
  deck: `
    <path d="M5 7h38v26H5z"/>
    <path d="M24 33v6M17 44l7-5 7 5"/>
    <path ${A} d="M11 25v-4h5v4zM19 25v-9h5v9zM27 25V12h5v13z"/>
    <path d="M35 14h3M35 19h3"/>`,
  aiScan: `
    <path d="M5 13V7a2 2 0 0 1 2-2h6M35 5h6a2 2 0 0 1 2 2v6M43 35v6a2 2 0 0 1-2 2h-6M13 43H7a2 2 0 0 1-2-2v-6"/>
    <path d="M14 11h20v26l-3.3-2-3.4 2-3.3-2-3.3 2-3.4-2-3.3 2z"/>
    <path d="M18 18h12M18 24h8"/>
    <path ${A} d="M36 22l1.6 3.4L41 27l-3.4 1.6L36 32l-1.6-3.4L31 27l3.4-1.6z"/>`,
  photoRoute: `
    <circle cx="10" cy="38" r="4"/>
    <circle ${A} cx="38" cy="10" r="4"/>
    <path d="M14 38h14a6 6 0 0 0 0-12H20a6 6 0 0 1 0-12h14" stroke-dasharray="3 4"/>
    <path d="M30 32h12v10H30z"/>
    <circle cx="36" cy="37" r="2.2"/>`,
  star: `
    <path ${A} d="M24 4l6 12.4 13.6 2-9.8 9.6 2.3 13.5L24 35.1l-12.1 6.4 2.3-13.5-9.8-9.6 13.6-2z"/>`,
  survey: `
    <path d="M5 8h38v24H22l-9 8v-8H5z"/>
    <path ${A} d="M14.5 16.5l1.6 3.2 3.5.5-2.5 2.5.6 3.5-3.2-1.7-3.2 1.7.6-3.5-2.5-2.5 3.5-.5zM24 16.5l1.6 3.2 3.5.5-2.5 2.5.6 3.5L24 24.5l-3.2 1.7.6-3.5-2.5-2.5 3.5-.5zM33.5 16.5l1.6 3.2 3.5.5-2.5 2.5.6 3.5-3.2-1.7-3.2 1.7.6-3.5-2.5-2.5 3.5-.5z"/>`,
  levels: `
    <path d="M24 4l17 7v11c0 10.5-7.3 18.5-17 22C14.3 40.5 7 32.5 7 22V11z"/>
    <path ${A} d="M16 29l8-6 8 6v-6l-8-6-8 6z"/>`,
  boxes: `
    <path d="M5 44V4M43 44V4M5 24h38M5 44h38"/>
    <path d="M9 12h12v12H9zM9 31h11v13H9z"/>
    <path ${A} d="M24 14h15v10H24z"/>
    <path d="M23 33h16v11H23z"/>`,
  whatsapp: `
    <path d="M24 5a19 19 0 0 0-16.4 28.6L5 43l9.7-2.5A19 19 0 1 0 24 5z"/>
    <path ${A} d="M17 15.5c1-1 2.5-1 3 0l1.8 4c.3.8 0 1.6-.6 2.2l-1.2 1.1c1.6 3 3.6 5 6.6 6.6l1.1-1.2c.6-.6 1.4-.9 2.2-.6l4 1.8c1 .5 1 2 0 3-2 2.2-5 2.5-8.3.6a24 24 0 0 1-9.6-9.6c-1.9-3.3-1.6-6.3.6-8.3z"/>`,
  shield: `
    <path d="M24 4l17 7v11c0 10.5-7.3 18.5-17 22C14.3 40.5 7 32.5 7 22V11z"/>
    <path d="M17 24l5 5 10-10" stroke="#FF5500"/>`,

  // ── Beauty categories ──
  skincare: `
    <path d="M11 23h14v20H11z"/>
    <path d="M14.5 17h7v6h-7z"/>
    <rect ${A} x="15.5" y="4" width="5" height="13" rx="2.5"/>
    <path d="M28 32h15v11H28z"/>
    <path ${A} d="M27 27h17v5H27z"/>`,
  makeup: `
    <path d="M8 28h12v15H8z"/>
    <path d="M9.5 19h9v9h-9z"/>
    <path ${A} d="M9.5 19v-7l9-5v12z"/>
    <circle cx="33" cy="33" r="10"/>
    <circle ${A} cx="33" cy="33" r="5"/>`,
  haircare: `
    <path d="M6 19h15v24H6z"/>
    <path ${A} d="M9 12h9v7H9z"/>
    <path d="M10 27h7"/>
    <path ${A} d="M27 6h5v37h-5z"/>
    <path d="M32 10h9M32 15h9M32 20h9M32 25h9M32 30h9M32 35h9M32 40h9"/>`,
  personalCare: `
    <path d="M7 21h16v22H7z"/>
    <path d="M11.5 15h7v6h-7z"/>
    <path ${A} d="M15 15V8h9v3"/>
    <path d="M29 24h12v19H29z"/>
    <circle ${A} cx="35" cy="18" r="5"/>`,
};

export const svgAttrs =
  'viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"';
