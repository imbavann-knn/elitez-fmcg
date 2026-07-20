/* Elitez FMCG — shared animation layer
 * Lenis smooth scroll + GSAP ScrollTrigger fade-ups + stat counters
 * Loaded after GSAP, ScrollTrigger, and Lenis CDN scripts.
 */

// ── Lenis smooth scroll ──────────────────────────────────────────────────────
const lenis = new Lenis({
  duration: 1.2,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});
function lenisRaf(time) { lenis.raf(time); requestAnimationFrame(lenisRaf); }
requestAnimationFrame(lenisRaf);
window.__lenis = lenis;

// Let GSAP ScrollTrigger sync with Lenis
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// ── GSAP ScrollTrigger fade-ups (replaces IntersectionObserver) ──────────────
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.fade-up').forEach((el, i) => {
  // Detect siblings with same parent to stagger them
  const siblings = Array.from(el.parentElement.querySelectorAll(':scope > .fade-up'));
  const idx = siblings.indexOf(el);
  gsap.fromTo(el,
    { opacity: 0, y: 36 },
    {
      opacity: 1, y: 0,
      duration: 0.75,
      ease: 'power3.out',
      delay: idx * 0.09,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    }
  );
});

// ── Stat counter animations ──────────────────────────────────────────────────
document.querySelectorAll('.stat-num, .hero-stat-item .stat-num').forEach(el => {
  const raw = el.textContent.trim();
  const match = raw.match(/^([\d,]+)(\D*)$/);
  if (!match) return;
  const num = parseInt(match[1].replace(/,/g, ''));
  const suffix = match[2] || '';
  if (!num) return;
  const obj = { val: 0 };
  gsap.to(obj, {
    val: num,
    duration: 2.2,
    ease: 'power2.out',
    onUpdate() {
      const v = Math.round(obj.val);
      el.textContent = (v >= 1000 ? v.toLocaleString() : v) + suffix;
    },
    scrollTrigger: {
      trigger: el.closest('section') || el,
      start: 'top 80%',
      once: true,
    },
  });
});
