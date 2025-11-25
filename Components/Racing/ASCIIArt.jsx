import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ASCIIArt() {
  const [currentFrame, setCurrentFrame] = useState(0);

  const frames = [
    `
    ╔═══════════════════════════════╗
    ║   LONGHORNS RACING SYSTEM    ║
    ║   STATUS: OPERATIONAL        ║
    ╚═══════════════════════════════╝
    `,
    `
    ┌───────────────────────────────┐
    │   LONGHORNS RACING SYSTEM    │
    │   STATUS: OPERATIONAL        │
    └───────────────────────────────┘
    `
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top right ASCII art */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="fixed top-20 right-8 text-crimson font-mono text-[8px] leading-tight pointer-events-none z-0 hidden lg:block"
      >
        <pre>{frames[currentFrame]}</pre>
      </motion.div>

      {/* Bottom left decorative ASCII */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="fixed bottom-24 left-8 text-crimson font-mono text-[10px] leading-tight pointer-events-none z-0 hidden lg:block"
      >
        <pre>
{`
    ▄▄▄▄▄▄▄▄▄▄▄
    █ LR █ 2025
    ▀▀▀▀▀▀▀▀▀▀▀
`}
        </pre>
      </motion.div>

      {/* Floating data elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-crimson/20 font-mono text-xs"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            {`[0x${Math.random().toString(16).substr(2, 6)}]`}
          </motion.div>
        ))}
      </div>

      {/* Bitmap-style decorations */}
      <div className="fixed top-1/2 left-8 pointer-events-none z-0 hidden xl:block">
        <motion.div
          className="grid grid-cols-8 gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
        >
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-crimson"
              animate={{
                opacity: [0.2, 1, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (i % 8) * 0.1
              }}
              style={{
                opacity: Math.random() > 0.5 ? 1 : 0.3
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Right side bitmap decoration */}
      <div className="fixed top-1/3 right-8 pointer-events-none z-0 hidden xl:block">
        <motion.div
          className="grid grid-cols-6 gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {[...Array(36)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-crimson"
              animate={{
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: (i % 6) * 0.15
              }}
              style={{
                opacity: Math.random() > 0.6 ? 1 : 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}