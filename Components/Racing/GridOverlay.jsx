import React from 'react';
import { motion } from 'framer-motion';

export default function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      {/* Vertical lines */}
      <div className="absolute inset-0 grid grid-cols-12">
        {[...Array(13)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="border-r border-crimson/10"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: i * 0.05 }}
          />
        ))}
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full border-t border-crimson/10"
            style={{ top: `${(i + 1) * 5}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: i * 0.03 }}
          />
        ))}
      </div>

      {/* Animated scanlines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-crimson/5 to-transparent"
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Corner indicators */}
      <div className="absolute top-8 left-8 text-crimson/30 font-mono text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
          <span>SYS.ONLINE</span>
        </div>
      </div>

      <div className="absolute top-8 right-8 text-crimson/30 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span>v2.5.0</span>
          <div className="w-2 h-2 border border-crimson rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 text-crimson/30 font-mono text-xs">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-crimson" />
          <div className="w-1 h-1 bg-crimson" />
          <div className="w-1 h-1 bg-crimson" />
          <span className="ml-2">LONGHORNS.RACING</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 text-crimson/30 font-mono text-xs">
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          READY
        </motion.div>
      </div>
    </div>
  );
}