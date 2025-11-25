import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Award, Star, Mic, Camera } from 'lucide-react';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Trophy,
      title: 'STATE CHAMPIONS',
      year: '2024',
      description: 'First place finish in Georgia state competition',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Medal,
      title: 'EASTERN REGION RUNNER-UP',
      year: '2024',
      description: 'Second place in the highly competitive Eastern Region',
      color: 'from-gray-300 to-gray-400'
    },
    {
      icon: Award,
      title: 'DEVELOPMENTAL CLASS RUNNER-UP',
      year: '2023',
      description: 'Excellence in developmental class competition',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Mic,
      title: 'BEST VERBAL PRESENTATION',
      year: '2024',
      description: 'Outstanding communication and presentation skills',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Camera,
      title: 'BEST DIGITAL MEDIA',
      year: '2024',
      description: 'Superior digital content and media production',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Star,
      title: 'MULTIPLE ACCOLADES',
      year: 'Ongoing',
      description: 'Consistent excellence across all competition categories',
      color: 'from-crimson to-red-600'
    }
  ];

  return (
    <section id="achievements" className="relative py-32 px-6 bg-gradient-to-b from-black via-crimson/5 to-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-crimson/50" />
            <span className="text-crimson font-mono text-sm tracking-widest">002 / ACHIEVEMENTS</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson/50" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-8">
            <span className="bg-gradient-to-r from-crimson via-white to-crimson bg-clip-text text-transparent">
              PROVEN EXCELLENCE
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto"
          >
            Our trophy case speaks for itself. Years of dedication, innovation, 
            and teamwork have earned us recognition at the state, regional, and national levels.
          </motion.p>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              <div className="relative h-full p-8 border border-crimson/30 bg-black/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-crimson hover:shadow-[0_0_30px_rgba(220,20,60,0.3)]">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Year tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-mono border border-crimson/30 text-crimson/70 bg-black/50">
                    {achievement.year}
                  </span>
                </div>

                {/* Icon with glow effect */}
                <div className="mb-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} blur-2xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                  <achievement.icon className="relative w-16 h-16 text-crimson group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-crimson transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {achievement.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner details */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-crimson/20 group-hover:border-crimson transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-crimson/20 group-hover:border-crimson transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-crimson to-transparent"
        />
      </div>
    </section>
  );
}