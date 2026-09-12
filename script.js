/* ================================================================
   STREAMER LANDING — JavaScript
   ================================================================
   Para personalizar: editá SOLO el objeto `streamer` de abajo.
   No tenés que tocar HTML ni CSS para cambiar nombre, redes,
   descripciones, about, etc.
   ================================================================ */

const streamer = {
  name:     "NOMBRE",
  description: "Streamer argentino en crecimiento.",
  location: "Buenos Aires, Argentina",
  avatar:   "assets/avatar.webp",

  about: "Soy un streamer argentino nacido en 1991, de Buenos Aires, La Matanza. Estoy construyendo mi camino en el mundo del streaming y creando una comunidad alrededor del gaming, el entretenimiento y los directos.",

  socials: {
    twitch:   "",   // ej: "https://twitch.tv/tu_canal"
    youtube:  "",   // ej: "https://youtube.com/@tu_canal"
    instagram:"",   // ej: "https://instagram.com/tu_cuenta"
    tiktok:   "",   // ej: "https://tiktok.com/@tu_cuenta"
    discord:  "",   // ej: "https://discord.gg/tu_codigo"
    x:        "",   // ej: "https://x.com/tu_cuenta"
    facebook: ""    // ej: "https://facebook.com/tu_pagina"
  }
};

/* ---------- Iconos SVG inline por plataforma ---------- */
const ICONS = {
  twitch:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 2H3v16h18V2z"/><path d="M17 14H7l3-6 2 4 3-5 3 7z"/></svg>`,
  youtube:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22.54 6.42-2.2-2.19a5 5 0 0 0-6.98 0L5.6 9.46a5 5 0 0 0 7.08 7.08l1.66-1.69a.75.75 0 0 1 1.11 0l2.2.22a.75.75 0 0 1 .6 1.08l-1.58 2.95a.74.74 0 0 1-.96.57H15.5a.75.75 0 0 1-.75-.75V7.19a.75.75 0 0 1 1.47-.19L20 8.63l1.54-1.51a5 5 0 0 0-1.28-6.93z"/></svg>`,
  instagram:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  tiktok:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="M12 3v6"/><path d="M16.907 15.907a4 4 0 0 1-5.656 5.656l.012-.012Zw"/><path d="M5.083 6.027A4 4 0 0 1 8 3.648l.012-.012z"/></svg>`,
  discord:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.7-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  x:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4l11.733 16h4.267l-11.733-16z"/><path d="M4 20l6.768-6.768m2.496-2.496L20 4"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h2v-8h6v-4h-3v-3a5 5 0 0 0-5-5z"/></svg>`
};

/* ---------- Nombre y descripción por plataforma ---------- */
const SOCIAL_META = {
  twitch:   { name: "Twitch",         desc: "Streams y directos" },
  youtube:  { name: "YouTube",        desc: "Videos y clips" },
  instagram:{ name: "Instagram",      desc: "Contenido y novedades" },
  tiktok:   { name: "TikTok",         desc: "Clips y momentos" },
  discord:  { name: "Discord",        desc: "Comunidad" },
  x:        { name: "X",              desc: "Tuits y actualidad" },
  facebook: { name: "Facebook",       desc: "Comunidad" }
};

/* ================================================================
   RENDER — se ejecuta en DOMContentLoaded
   ================================================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* ---- elementos del DOM ---- */
  const grid          = document.getElementById("socials-grid");
  const footerSocials = document.getElementById("footer-socials");
  const heroName      = document.querySelector(".hero-name");
  const heroLoc       = document.querySelector(".hero-location");
  const heroDesc      = document.querySelector(".hero-desc");
  const heroEyebrow   = document.querySelector(".hero-eyebrow");
  const aboutText     = document.getElementById("about-text");
  const footerName    = document.getElementById("footer-name");
  const footerTagline = document.querySelector(".footer-brand .tagline");
  const footerLoc     = document.querySelector(".footer-brand .location");
  const copyName      = document.getElementById("footer-copy-name");
  const logoText      = document.querySelector(".site-logo span:last-child");
  const logoIcon      = document.querySelector(".logo-icon");
  const btnStream     = document.getElementById("btn-stream");
  const avatarImg     = document.querySelector(".hero-avatar img");
  const avatarFallback= document.querySelector(".hero-avatar .avatar-fallback");

  const displayName  = streamer.name.toUpperCase();

  /* ---- Hero ---- */
  if (heroName)      heroName.textContent      = displayName;
  if (heroLoc)       heroLoc.textContent       = `Transmitiendo desde ${streamer.location}`;
  if (heroDesc)      heroDesc.textContent      = streamer.description;
  if (heroEyebrow)   heroEyebrow.textContent   = "STREAMER • GAMING • CREATOR";
  if (aboutText)     aboutText.textContent     = streamer.about;
  if (footerName)    footerName.textContent    = displayName;
  if (footerTagline) footerTagline.textContent = "Streamer • Gaming • Creator";
  if (footerLoc)     footerLoc.textContent     = streamer.location;
  if (copyName)      copyName.textContent      = displayName;
  if (logoText)      logoText.textContent      = displayName;
  if (logoIcon)      logoIcon.textContent      = displayName.charAt(0);

  /* ---- Botón VER STREAM ---- */
  if (btnStream) {
    const twitchUrl = streamer.socials.twitch && streamer.socials.twitch.trim();
    if (twitchUrl) {
      btnStream.href        = twitchUrl;
      btnStream.target      = "_blank";
      btnStream.rel         = "noopener noreferrer";
      btnStream.innerHTML   = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg> VER STREAM`;
      btnStream.style.cursor= "pointer";
    } else {
      btnStream.removeAttribute("href");
      btnStream.style.cursor = "default";
    }
  }

  /* ---- Avatar: fallback a inicial si la imagen falla ---- */
  if (avatarImg && avatarFallback) {
    avatarImg.onerror = () => {
      avatarImg.style.display    = "none";
      avatarFallback.style.display= "grid";
      avatarFallback.textContent   = displayName.charAt(0);
    };
  }

  /* ---- Redes: tarjetas + iconos del footer ---- */
  if (grid && footerSocials) {
    const order = ["twitch","youtube","instagram","tiktok","discord","x","facebook"];
    let cardsHTML = "";
    let footerHTML = "";

    order.forEach((key, idx) => {
      const url = streamer.socials[key] && streamer.socials[key].trim();
      if (!url) return; // ocultar tarjeta si no hay URL

      const meta  = SOCIAL_META[key];
      const icon  = ICONS[key];
      if (!meta || !icon) return;

      const delay = `reveal-delay-${Math.min(idx + 1, 7)}`;
      const safeName   = meta.name;
      const safeDesc   = meta.desc;
      const safeUrl    = url;

      cardsHTML += `
        <a href="${safeUrl}"
           target="_blank"
           rel="noopener noreferrer"
           class="social-card reveal ${delay}"
           aria-label="${safeName} — ${safeDesc}"
           data-platform="${key}">
          <div class="social-icon">${icon}</div>
          <span class="social-name">${safeName}</span>
          <span class="social-desc">${safeDesc}</span>
        </a>`;

      footerHTML += `
        <a href="${safeUrl}"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="${safeName}"
           title="${safeName}"
           data-platform="${key}">
          ${icon}
        </a>`;
    });

    grid.innerHTML       = cardsHTML;
    footerSocials.innerHTML = footerHTML;
  }

  /* ---- Scroll reveal (IntersectionObserver) ---- */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal:not(.visible)").forEach(el => observer.observe(el));
});
