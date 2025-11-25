import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const [glitchText, setGlitchText] = useState('LONGHORNS RACING');

  // Glitch effect
  useEffect(() => {
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    let interval;
    
    const glitch = () => {
      const originalText = 'LONGHORNS RACING';
      let iterations = 0;
      
      interval = setInterval(() => {
        setGlitchText(
          originalText.split('').map((char, index) => {
            if (index < iterations) return originalText[index];
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }).join('')
        );
        
        if (iterations >= originalText.length) {
          clearInterval(interval);
          setGlitchText(originalText);
        }
        iterations += 1/3;
      }, 30);
    };

    const timeout = setTimeout(glitch, 500);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated background lines */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent"
            style={{
              top: `${(i + 1) * 5}%`,
              left: 0,
              right: 0,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.05 }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 border border-crimson/50 text-crimson text-sm tracking-[0.3em] font-mono bg-black/50 backdrop-blur-sm">
            PROFESSIONAL CLASS
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6"
          style={{ scale }}
        >
          <span className="inline-block bg-gradient-to-r from-white via-crimson to-white bg-clip-text text-transparent animate-gradient">
            {glitchText}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-4"
        >
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
            Lambert High School • Georgia
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-4 py-2 border border-crimson/30 text-crimson/80 text-xs font-mono bg-crimson/5">
              STATE CHAMPIONS
            </span>
            <span className="px-4 py-2 border border-crimson/30 text-crimson/80 text-xs font-mono bg-crimson/5">
              EASTERN REGION RUNNER-UP
            </span>
            <span className="px-4 py-2 border border-crimson/30 text-crimson/80 text-xs font-mono bg-crimson/5">
              BEST DIGITAL MEDIA
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#sponsorship"
            className="group relative px-8 py-4 bg-crimson text-white font-bold tracking-wide overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">BECOME A SPONSOR</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-crimson opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#about"
            className="px-8 py-4 border-2 border-crimson text-crimson font-bold tracking-wide hover:bg-crimson hover:text-white transition-all hover:scale-105"
          >
            LEARN MORE
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-crimson" />
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-crimson/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-crimson/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-crimson/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-crimson/30" />
    </motion.section>
  );
}