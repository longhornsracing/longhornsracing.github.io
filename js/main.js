// main.js — GSAP scroll interactions & UI behaviors
document.addEventListener("DOMContentLoaded", () => {
  // Simple nav toggle for small screens
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  navToggle?.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  // Smooth link scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth'});
      }
    });
  });

  // GSAP animations
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero ASCII & title entrance
    gsap.from(".ascii-wrap", { y: 20, opacity: 0, duration: 1.2, ease: "power3.out" });
    gsap.from(".hero-title", { y: 30, opacity: 0, duration: 1.1, delay: 0.2, ease: "power3.out" });

    // Hero image parallax
    gsap.to(".hero-media img", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-panel",
        start: "top top",
        end: "bottom top",
        scrub: 0.8
      }
    });

    // Panel fade/slide on enter
    document.querySelectorAll('.panel').forEach((panel) => {
      gsap.from(panel.querySelectorAll('h3, p, .tech-card, .award-list li, .sponsor-logos img, .contact-form'), {
        y: 30, opacity: 0, duration: 0.9, stagger: 0.06,
        scrollTrigger: {
          trigger: panel,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Pin & chapter-like transition for awards (inspired by charlesleclerc-style sections)
    ScrollTrigger.create({
      trigger: "#awards",
      start: "top top",
      end: "bottom+=200 top",
      pin: "#awards",
      pinSpacing: true
    });

    // Subtle neon flicker for headings
    const headings = document.querySelectorAll('.section-title');
    headings.forEach(h => {
      gsap.fromTo(h, { textShadow: '0 0 0px rgba(139,0,0,0.0)' }, {
        textShadow: '0 0 18px rgba(139,0,0,0.45)',
        repeat: -1, yoyo: true, duration: 3, ease: "sine.inOut"
      });
    });
  } // end gsap check

});
