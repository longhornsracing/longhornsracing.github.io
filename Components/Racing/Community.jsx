import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Users, GraduationCap, Lightbulb, HandHeart, Sparkles } from 'lucide-react';

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initiatives = [
    {
      icon: GraduationCap,
      title: 'STEM Education',
      description: 'Inspiring the next generation through hands-on workshops and mentorship programs'
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Engaging with local organizations to promote science and technology education'
    },
    {
      icon: HandHeart,
      title: 'Volunteer Programs',
      description: 'Giving back through organized community service and charitable initiatives'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Labs',
      description: 'Hosting interactive demonstrations to spark curiosity in STEM fields'
    }
  ];

  return (
    <section id="community" className="relative py-32 px-6 bg-gradient-to-b from-black to-crimson/5" ref={ref}>
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
            <span className="text-crimson font-mono text-sm tracking-widest">004 / COMMUNITY</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson/50" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-8">
            <span className="bg-gradient-to-r from-crimson via-white to-crimson bg-clip-text text-transparent">
              EXPANDING OUR REACH
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto leading-relaxed"
          >
            Racing is just the beginning. We're committed to making a positive impact 
            in our community by sharing our passion for STEM and inspiring future innovators.
          </motion.p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 border border-crimson/20 bg-black/50 backdrop-blur-sm hover:border-crimson/50 transition-all duration-500 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-crimson/20 blur-xl group-hover:blur-2xl transition-all" />
                  <initiative.icon className="relative w-12 h-12 text-crimson" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {initiative.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {initiative.description}
                </p>

                {/* Animated corner */}
                <motion.div
                  className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-crimson/30 group-hover:border-crimson"
                  animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative p-12 border-2 border-crimson bg-gradient-to-br from-crimson/10 to-black backdrop-blur-sm overflow-hidden group"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-crimson"
                style={{ top: `${(i + 1) * 25}%` }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <Heart className="w-16 h-16 text-crimson mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Join Our Mission
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Want to partner with us on community initiatives or bring STEM education 
              to your organization? Let's make an impact together.
            </p>
            <button className="px-8 py-4 bg-crimson text-white font-bold tracking-wide hover:bg-red-700 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(220,20,60,0.5)]">
              GET IN TOUCH
            </button>
          </div>

          {/* Corner sparks */}
          <Sparkles className="absolute top-4 left-4 w-6 h-6 text-crimson/50" />
          <Sparkles className="absolute top-4 right-4 w-6 h-6 text-crimson/50" />
          <Sparkles className="absolute bottom-4 left-4 w-6 h-6 text-crimson/50" />
          <Sparkles className="absolute bottom-4 right-4 w-6 h-6 text-crimson/50" />
        </motion.div>

        {/* Image placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative aspect-square border border-crimson/30 bg-black/30 backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-12 h-12 text-crimson/30 mx-auto mb-2" />
                  <p className="text-gray-600 text-xs font-mono">COMMUNITY EVENT PHOTO</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-crimson/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}