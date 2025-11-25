import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/racing/Hero.jsx';
import About from '../components/racing/About.jsx';
import Achievements from '../components/racing/Achievements.jsx';
import TechArsenal from '../components/racing/TechArsenal.jsx';
import Community from '../components/racing/Community.jsx';
import Sponsorship from '../components/racing/Sponsorship.jsx';
import GridOverlay from '../components/racing/GridOverlay.jsx';
import ASCIIArt from '../components/racing/ASCIIArt.jsx';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Animated cursor glow */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-50"
        style={{
          background: 'radial-gradient(circle, rgba(220,20,60,0.15) 0%, transparent 70%)',
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
      />

      {/* Grid overlay */}
      <GridOverlay />

      {/* ASCII decorative element */}
      <ASCIIArt />

      {/* Main content */}
      <Hero />
      <About />
      <Achievements />
      <TechArsenal />
      <Community />
      <Sponsorship />

      {/* Footer */}
      <footer className="relative border-t border-crimson/20 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-crimson">Longhorns Racing</h3>
              <p className="text-gray-400 text-sm">Professional Class STEM Racing Team</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-crimson">Location</h3>
              <p className="text-gray-400 text-sm">Lambert High School</p>
              <p className="text-gray-400 text-sm">Georgia, USA</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-crimson">Contact</h3>
              <p className="text-gray-400 text-sm">info@longhornsracing.com</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-crimson hover:text-red-400 transition-colors">Instagram</a>
                <a href="#" className="text-crimson hover:text-red-400 transition-colors">Twitter</a>
                <a href="#" className="text-crimson hover:text-red-400 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-crimson/10 text-center text-gray-500 text-sm">
            <p>© 2025 Longhorns Racing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}