import React from 'react';
// FIX: Import Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_DETAILS } from '../constants';
import { Logo, MailIcon, PhoneIcon } from './icons/Icons';

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

// FIX: Explicitly type variants to resolve type error with 'ease' property.
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
  onNavClick: (sectionId: string) => void;
  onLogoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ activeSection, onNavClick, onLogoClick }) => {
  return (
    <section className="relative h-full flex flex-col justify-center py-20 lg:py-0">
      <motion.div
        className="absolute top-8 left-0 lg:top-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
      >
        <button onClick={onLogoClick} aria-label="Open navigation menu" data-cursor-hover className="cursor-pointer">
          <Logo />
        </button>
      </motion.div>

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
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(link.href);
                  }}
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
        className="mt-12 lg:absolute lg:bottom-12 lg:left-0 lg:w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center space-x-4">
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
          <div className="flex flex-row gap-4 w-full">
              <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  data-cursor-hover
                  className="inline-flex items-center justify-center gap-2 flex-1 bg-gray-900 text-white font-semibold py-3 px-5 rounded-md hover:bg-gray-700 transition-colors shadow-sm transform hover:scale-105"
              >
                  <MailIcon />
                  <span>Email Me</span>
              </a>
              <a
                  href="tel:+923000000000"
                  data-cursor-hover
                  className="inline-flex items-center justify-center gap-2 flex-1 bg-gray-900 text-white font-semibold py-3 px-5 rounded-md hover:bg-gray-700 transition-colors shadow-sm transform hover:scale-105"
              >
                  <PhoneIcon />
                  <span>Call Me</span>
              </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};