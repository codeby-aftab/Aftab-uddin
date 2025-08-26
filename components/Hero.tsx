import React from 'react';
import { motion, Variants } from 'framer-motion';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

interface HeroProps {
  activeSection: string;
}

export const Hero: React.FC<HeroProps> = ({ activeSection }) => {
  return (
    <section id="home" className="relative h-full flex flex-col justify-center py-20 lg:py-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4"
        >
          Aftab Uddin
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 mb-4"
        >
          Full-Stack Web Developer & SOC Analyst
        </motion.p>
        <motion.p 
          variants={itemVariants}
          className="max-w-md text-md text-gray-500"
        >
          Proficient in building full-stack web applications using the MERN stack and managing custom WordPress websites. Eager to contribute to dynamic teams and grow as a Full-Stack Web Developer.
        </motion.p>
        
        <motion.nav variants={itemVariants} className="mt-12">
          <ul className="space-y-4">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="group text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-4"
                  data-cursor-hover
                >
                  <span className={`h-px transition-all duration-300 ease-in-out ${isActive ? 'w-12 bg-gray-900' : 'w-8 bg-gray-400 group-hover:bg-gray-900 group-hover:w-12'}`}></span>
                  <span className={`tracking-widest uppercase transition-colors ${isActive ? 'text-gray-900' : ''}`}>{link.name}</span>
                </a>
              </li>
            )})}
          </ul>
        </motion.nav>
      </motion.div>
      <motion.div 
        className="mt-8 lg:absolute lg:bottom-12 lg:left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex space-x-4">
            {SOCIAL_LINKS.map(link => (
                <motion.a 
                    key={link.name} 
                    href={link.href} 
                    className="text-gray-500 hover:text-accent transition-colors" 
                    aria-label={`${link.name} Profile`}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    data-cursor-hover
                >
                    <link.icon />
                </motion.a>
            ))}
        </div>
      </motion.div>
    </section>
  );
};