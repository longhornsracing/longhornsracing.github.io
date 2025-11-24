
Longhorns Racing — Multi-page Bootstrap site
-------------------------------------------
Structure:
- index.html (Home — cinematic scroll)
- about.html (Team)
- engineering.html (Engineering)
- awards.html
- sponsors.html
- contact.html
- css/styles.css
- js/main.js
- images/* (SVG placeholders and bitmap overlay)
- assets/Longhorns_Sponsorship_Packet.pdf (example)

How to deploy on GitHub Pages:
1. Create a repo and push these files to the repository root (main branch).
2. In GitHub > Settings > Pages: set branch to main and folder to / (root).
3. Optionally set a custom domain via CNAME file.

Replace placeholders:
- images/*.svg -> replace with your real photos (.jpg or .png)
- assets/Longhorns_Sponsorship_Packet.pdf -> replace with real PDF
- Formspree endpoints -> replace with your form ID or integrate email handling

Design choices:
- Bootstrap 5 for layout & responsiveness
- GSAP + ScrollTrigger for heavy cinematic scroll choreography
- Lenis for smooth scroll behavior
- Hybrid aesthetic: 60% Leclerc (clean cinematic), 40% Evangelion (neon, ASCII, bitmap overlays)
- Color accent set to #730101

Notes:
- This scaffold uses CDN links for libraries so it works on GitHub Pages without a build step.
- For very advanced ScrollSmoother features you may consider paid GSAP plugins, but the current setup achieves similar effects using Lenis + ScrollTrigger.
