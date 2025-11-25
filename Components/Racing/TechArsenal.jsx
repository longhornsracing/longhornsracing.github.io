import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Cpu, Printer, Wrench, Code, Scissors } from 'lucide-react';

export default function TechArsenal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const technologies = [
    {
      icon: Code,
      name: 'CAD DESIGN',
      description: 'Advanced computer-aided design for precision engineering and rapid prototyping',
      details: ['SolidWorks', 'Fusion 360', 'AutoCAD'],
      color: 'cyan'
    },
    {
      icon: Scissors,
      name: 'CNC MACHINING',
      description: 'State-of-the-art CNC capabilities for manufacturing complex components with micron precision',
      details: ['Multi-axis machining', 'Custom toolpaths', 'Material optimization'],
      color: 'blue'
    },
    {
      icon: Printer,
      name: '3D PRINTING',
      description: 'Cutting-edge additive manufacturing for rapid iteration and custom part production',
      details: ['FDM & SLA printing', 'Advanced materials', 'Rapid prototyping'],
      color: 'purple'
    },
    {
      icon: Cpu,
      name: 'ELECTRONICS',
      description: 'Custom electronics design and integration for advanced vehicle systems',
      details: ['Sensor integration', 'Data acquisition', 'Control systems'],
      color: 'green'
    },
    {
      icon: Wrench,
      name: 'FABRICATION',
      description: 'Expert fabrication and assembly techniques for competition-ready vehicles',
      details: ['Composite materials', 'Precision assembly', 'Quality control'],
      color: 'orange'
    },
    {
      icon: Box,
      name: 'TESTING & ANALYSIS',
      description: 'Comprehensive testing protocols and data analysis for continuous improvement',
      details: ['Performance testing', 'Data analytics', 'Iterative refinement'],
      color: 'red'
    }
  ];

  const colorMap = {
    cyan: 'from-cyan-500 to-blue-500',
    blue: 'from-blue-500 to-indigo-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
    orange: 'from-orange-500 to-red-500',
    red: 'from-red-500 to-crimson'
  };

  return (
    <section id="tech" className="relative py-32 px-6" ref={ref}>
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
            <span className="text-crimson font-mono text-sm tracking-widest">003 / TECH ARSENAL</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson/50" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-8">
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              CUTTING-EDGE TOOLS
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto"
          >
            We leverage the latest technology and manufacturing techniques to bring 
            our innovative designs to life with uncompromising precision and quality.
          </motion.p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full p-8 border border-crimson/20 bg-gradient-to-br from-black to-crimson/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-crimson/50 hover:shadow-[0_0_30px_rgba(220,20,60,0.2)]">
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${colorMap[tech.color]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  animate={hoveredIndex === index ? { 
                    backgroundPosition: ['0% 0%', '100% 100%'] 
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                />

                {/* Icon with glow */}
                <div className="relative mb-6">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${colorMap[tech.color]} blur-xl opacity-20`}
                    animate={hoveredIndex === index ? { scale: [1, 1.5, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <tech.icon className="relative w-14 h-14 text-crimson group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">
                  {tech.name}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {tech.description}
                </p>

                {/* Details list */}
                <div className="space-y-2">
                  {tech.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-2 text-xs text-gray-500"
                    >
                      <div className="w-1 h-1 bg-crimson rounded-full" />
                      {detail}
                    </motion.div>
                  ))}
                </div>

                {/* Scanline effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={hoveredIndex === index ? {
                    backgroundImage: [
                      'linear-gradient(0deg, transparent 0%, rgba(220,20,60,0.1) 50%, transparent 100%)',
                      'linear-gradient(0deg, transparent 0%, rgba(220,20,60,0.1) 50%, transparent 100%)'
                    ],
                    backgroundPosition: ['0% 0%', '0% 100%']
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-crimson/30 group-hover:border-crimson transition-colors" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-crimson/30 group-hover:border-crimson transition-colors" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-crimson/30 group-hover:border-crimson transition-colors" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-crimson/30 group-hover:border-crimson transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image placeholder section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 relative aspect-video border-2 border-crimson/30 bg-black/50 backdrop-blur-sm overflow-hidden group"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Box className="w-16 h-16 text-crimson/30 mx-auto mb-4" />
              <p className="text-gray-500 font-mono text-sm">TEAM WORKSPACE IMAGE PLACEHOLDER</p>
              <p className="text-gray-600 text-xs mt-2">Add your workshop/lab photos here</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-crimson/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-crimson/20" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}