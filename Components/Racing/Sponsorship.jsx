import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, TrendingUp, Users, Target, Mail, Phone, Globe } from 'lucide-react';

export default function Sponsorship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Globe,
      title: 'Brand Visibility',
      description: 'Prominent logo placement on our car, gear, and digital media reaching thousands'
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Connect with passionate STEM students, families, and local communities'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Exposure',
      description: 'Feature in our award-winning digital content and social media campaigns'
    },
    {
      icon: Target,
      title: 'Talent Pipeline',
      description: 'Access to motivated, skilled students for internships and future hiring'
    }
  ];

  const tiers = [
    {
      name: 'BRONZE',
      price: '$500',
      benefits: ['Logo on car', 'Website recognition', 'Social media mentions'],
      color: 'from-orange-600 to-yellow-700'
    },
    {
      name: 'SILVER',
      price: '$1,500',
      benefits: ['All Bronze benefits', 'Logo on team uniforms', 'Event invitations', 'Quarterly updates'],
      color: 'from-gray-400 to-gray-600',
      popular: true
    },
    {
      name: 'GOLD',
      price: '$3,000+',
      benefits: ['All Silver benefits', 'Prime logo placement', 'Naming opportunities', 'VIP event access', 'Custom partnership package'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="sponsorship" className="relative py-32 px-6" ref={ref}>
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
            <span className="text-crimson font-mono text-sm tracking-widest">005 / PARTNERSHIP</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson/50" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-8">
            <span className="bg-gradient-to-r from-white via-crimson to-white bg-clip-text text-transparent">
              FUEL OUR JOURNEY
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto leading-relaxed"
          >
            Partner with Longhorns Racing and invest in the future of STEM education. 
            Your sponsorship empowers talented students and drives innovation.
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group relative p-6 border border-crimson/20 bg-black/50 backdrop-blur-sm hover:border-crimson/50 transition-all duration-500"
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-crimson/20 blur-xl group-hover:blur-2xl transition-all" />
                <benefit.icon className="relative w-10 h-10 text-crimson" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Sponsorship tiers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Sponsorship Tiers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className={`group relative ${tier.popular ? 'md:-mt-4 md:scale-105' : ''}`}
              >
                <div className={`relative h-full p-8 border-2 ${tier.popular ? 'border-crimson' : 'border-crimson/30'} bg-black/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-crimson hover:shadow-[0_0_50px_rgba(220,20,60,0.3)]`}>
                  {/* Popular badge */}
                  {tier.popular && (
                    <div className="absolute top-0 right-0 bg-crimson text-white text-xs font-bold px-4 py-1">
                      MOST POPULAR
                    </div>
                  )}

                  {/* Tier gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-5 group-hover:opacity-10 transition-opacity`} />

                  {/* Content */}
                  <div className="relative">
                    <h4 className={`text-2xl font-black mb-4 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                      {tier.name}
                    </h4>
                    <div className="text-4xl font-black text-white mb-6">{tier.price}</div>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-crimson mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <a 
                      href={`#${tier.name.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = tier.name === 'BRONZE' ? '/BronzeTier' : tier.name === 'SILVER' ? '/SilverTier' : '/GoldTier';
                      }}
                      className={`block w-full py-3 font-bold tracking-wide transition-all hover:scale-105 text-center ${
                      tier.popular 
                        ? 'bg-crimson text-white hover:shadow-[0_0_30px_rgba(220,20,60,0.5)]' 
                        : 'border-2 border-crimson text-crimson hover:bg-crimson hover:text-white'
                    }`}>
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="relative p-12 border-2 border-crimson bg-gradient-to-br from-crimson/10 via-black to-black backdrop-blur-sm overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-crimson via-transparent to-transparent"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Rocket className="w-16 h-16 text-crimson mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Join Our Team?
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Let's discuss how we can create a customized partnership that aligns 
                with your goals and makes a lasting impact on STEM education.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:sponsorships@longhornsracing.com"
                  className="group flex items-center gap-3 px-8 py-4 bg-crimson text-white font-bold tracking-wide hover:bg-red-700 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(220,20,60,0.5)]"
                >
                  <Mail className="w-5 h-5" />
                  <span>EMAIL US</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 px-8 py-4 border-2 border-crimson text-crimson font-bold tracking-wide hover:bg-crimson hover:text-white transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>CALL US</span>
                </a>
              </div>

              <p className="mt-8 text-sm text-gray-500 font-mono">
                Custom packages available • Tax-deductible contributions • Non-profit organization
              </p>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-crimson" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-crimson" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-crimson" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-crimson" />
        </motion.div>
      </div>
    </section>
  );
}