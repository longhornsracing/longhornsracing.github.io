import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Target, Users, Rocket } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Zap,
      title: 'CREATIVE',
      description: 'Pushing boundaries with innovative designs and cutting-edge solutions'
    },
    {
      icon: Target,
      title: 'DEDICATED',
      description: 'Unwavering commitment to excellence in every aspect of our craft'
    },
    {
      icon: Users,
      title: 'COLLABORATIVE',
      description: 'Working together as one unit to achieve extraordinary results'
    },
    {
      icon: Rocket,
      title: 'AMBITIOUS',
      description: 'Setting the highest standards and exceeding expectations'
    }
  ];

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
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
            <span className="text-crimson font-mono text-sm tracking-widest">001 / ABOUT</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson/50" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-8">
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              WHO WE ARE
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 text-center max-w-4xl mx-auto leading-relaxed"
          >
            Longhorns Racing is a <span className="text-crimson font-semibold">professional-class STEM racing team</span> from 
            Lambert High School in Georgia. We combine technical excellence with creative innovation 
            to compete at the highest level while making a difference in our community.
          </motion.p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 border border-crimson/20 bg-gradient-to-br from-crimson/5 to-transparent backdrop-blur-sm hover:border-crimson/50 transition-all duration-500">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-crimson/20 blur-xl group-hover:blur-2xl transition-all" />
                  <value.icon className="relative w-12 h-12 text-crimson" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-crimson/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative p-12 border-2 border-crimson/30 bg-black/50 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-crimson mb-2">5+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Years Active</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-crimson mb-2">30+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-crimson mb-2">10+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-crimson mb-2">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Dedication</div>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-crimson" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-crimson" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-crimson" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-crimson" />
        </motion.div>
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />
    </section>
  );
}