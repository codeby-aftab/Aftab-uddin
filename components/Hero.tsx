
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_DETAILS, BRIEF_US_INFO } from '../constants';
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
    <section className="h-full flex flex-col items-center text-center py-12 lg:py-20 overflow-hidden">
      {/* Top: Logo */}
      <motion.div
        className="mb-8 lg:mb-12 shrink-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
      >
        <button onClick={onLogoClick} aria-label="Open navigation menu" data-cursor-hover className="cursor-pointer">
          <Logo className="w-12 h-12 text-gray-900" />
        </button>
      </motion.div>

      {/* Middle: Name, Title, Nav */}
      <motion.div
        className="flex-grow flex flex-col justify-center items-center min-h-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter mb-3 leading-[0.9]"
        >
          Aftab Uddin
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg text-gray-600 mb-8 font-medium"
        >
          Full-Stack Web Developer & SOC Analyst
        </motion.p>
        
        <motion.nav variants={itemVariants} className="mt-8 lg:mt-12">
          <ul className="flex flex-col items-center space-y-4">
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
                  className="group text-xs font-bold text-gray-400 hover:text-gray-900 transition-all flex flex-col items-center gap-2"
                  data-cursor-hover
                >
                  <span className={`tracking-widest uppercase transition-colors ${isActive ? 'text-gray-900' : ''}`}>{link.name}</span>
                  <span className={`h-px transition-all duration-300 ease-in-out ${isActive ? 'w-8 bg-gray-900' : 'w-0 bg-gray-300 group-hover:w-8 group-hover:bg-gray-900'}`}></span>
                </a>
              </li>
            )})}
          </ul>
        </motion.nav>
      </motion.div>

      {/* Bottom: Socials & Contact */}
      <motion.div 
        className="mt-8 lg:mt-12 shrink-0 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="flex space-x-6">
              {SOCIAL_LINKS.map(link => (
                  <motion.a 
                      key={link.name} 
                      href={link.href} 
                      className="text-gray-400 hover:text-gray-900 transition-colors" 
                      aria-label={`${link.name} Profile`}
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      data-cursor-hover
                  >
                      <link.icon />
                  </motion.a>
              ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
              <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  data-cursor-hover
                  className="inline-flex items-center justify-center gap-2 flex-1 bg-gray-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 transition-all shadow-md transform hover:-translate-y-0.5 text-xs"
              >
                  <MailIcon />
                  <span>Email</span>
              </a>
              <a
                  href={`tel:${BRIEF_US_INFO.tel.replace(/\s/g, '')}`}
                  data-cursor-hover
                  className="inline-flex items-center justify-center gap-2 flex-1 border-2 border-gray-900 text-gray-900 font-bold py-3 px-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all shadow-sm transform hover:-translate-y-0.5 text-xs"
              >
                  <PhoneIcon />
                  <span>Call</span>
              </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
