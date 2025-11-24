
// main.js — Lenis smooth-scrolling + GSAP ScrollTrigger heavy choreography
document.addEventListener('DOMContentLoaded', function() {
  // Lenis smooth scroll
  let lenis;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }

  // Smooth anchor links (works with Lenis)
  document.querySelectorAll('a[href^="#"], a[href$=".html"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        if (lenis) lenis.scrollTo(top);
        else window.scrollTo({top, behavior:'smooth'});
      }
    });
  });

  // GSAP
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Reveal animations for sections
    gsap.utils.toArray('.section-panel').forEach((panel, i) => {
      gsap.from(panel.querySelectorAll('h2, p, .tech-card, .clip-reveal, .badge-custom, .lead-text'), {
        y: 40, opacity: 0, duration: 1.0, stagger: 0.06,
        scrollTrigger: { trigger: panel, start: 'top 80%', toggleActions: 'play none none reverse' }
      });
    });

    // Hero image parallax + clip mask zoom
    const heroImg = document.querySelector('.hero-media img');
    if (heroImg) {
      gsap.fromTo(heroImg, { scale: 1.12 }, {
        scale: 1.0, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 }
      });
    }

    // Pinned chapter section (awards) with image mask reveal
    const pinSection = document.querySelector('#awards');
    if (pinSection) {
      ScrollTrigger.create({
        trigger: pinSection,
        start: 'top top',
        end: '+=1200',
        pin: true,
        pinSpacing: true
      });

      // timeline inside awards
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSection,
          start: 'top top',
          end: '+=900',
          scrub: 0.6
        }
      });
      tl.from('#awards .award-item', { y: 80, opacity: 0, stagger: 0.15, duration: 0.8 })
        .to('#awards .clip-reveal img', { scale: 1.08, duration: 1 }, 0);
    }

    // Masked transitions between pages (if using PJAX / fetch) - placeholder
    // Neon flicker
    gsap.utils.toArray('.section-title').forEach(el => {
      gsap.fromTo(el, { textShadow: '0 0 0px rgba(0,0,0,0)' }, {
        textShadow: '0 0 18px rgba(115,1,1,0.45)',
        repeat: -1, yoyo: true, duration: 4, ease: 'sine.inOut'
      });
    });
  }
});
