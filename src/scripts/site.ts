/**
 * Site-wide progressive enhancements. Everything here is optional:
 * content is fully usable without JavaScript.
 */

declare global {
  interface Window {
    __skReady?: boolean;
  }
}

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/** Fade/slide elements in as they enter the viewport. */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal], [data-split]');
  if (!('IntersectionObserver' in window) || reduceMotion()) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}

/** Pointer-following glow on `.spotlight` surfaces. */
function initSpotlight() {
  if (!finePointer()) return;
  document.addEventListener(
    'pointermove',
    (e) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>('.spotlight');
      if (!target) return;
      const r = target.getBoundingClientRect();
      target.style.setProperty('--mx', `${e.clientX - r.left}px`);
      target.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
    { passive: true }
  );
}

/** Subtle 3D tilt for elements marked `data-tilt` (value = max degrees). */
function initTilt() {
  if (!finePointer() || reduceMotion()) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const max = Number(el.dataset.tilt || 6);
    const scope = el.closest<HTMLElement>('[data-tilt-scope]') ?? el;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    const apply = () => {
      el.style.setProperty('--rx', `${(-ty * max).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(tx * max).toFixed(2)}deg`);
      el.style.setProperty('--px', tx.toFixed(3));
      el.style.setProperty('--py', ty.toFixed(3));
      raf = 0;
    };
    scope.addEventListener(
      'pointermove',
      (e) => {
        const r = scope.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        if (!raf) raf = requestAnimationFrame(apply);
      },
      { passive: true }
    );
    scope.addEventListener('pointerleave', () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    });
  });
}

/** Gentle scroll parallax for `data-parallax` (value = speed, e.g. 0.08). */
function initParallax() {
  if (reduceMotion()) return;
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (!els.length) return;
  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const speed = Number(el.dataset.parallax || 0.08);
      const offset = (r.top + r.height / 2 - vh / 2) * speed;
      el.style.setProperty('--parallax', `${(-offset).toFixed(1)}px`);
    });
    ticking = false;
  };
  update();
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
}

export function initSite() {
  window.__skReady = true;
  initReveal();
  initSpotlight();
  initTilt();
  initParallax();
}
