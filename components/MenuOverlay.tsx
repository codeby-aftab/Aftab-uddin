import React from 'react';
// FIX: Import Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { ArrowLeftIcon, Logo } from './icons/Icons';
import { OVERLAY_NAV_LINKS, BRIEF_US_INFO, OVERLAY_SOCIAL_LINKS } from '../constants';

interface MenuOverlayProps {
  onClose: () => void;
  onNavClick: (sectionId: string) => void;
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08 + 0.3,
      type: 'spring',
      stiffness: 260,
      damping: 25,
    }
  }),
  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  }
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ onClose, onNavClick }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      aria-modal="true"
      role="dialog"
    >
      {/* Universal Close Button for mobile */}
      <button
        onClick={onClose}
        className="group lg:hidden absolute top-6 right-6 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors z-10 p-2"
        aria-label="Go back"
        data-cursor-hover
      >
        <span className="text-sm font-medium">Go Back</span>
        <ArrowLeftIcon />
      </button>

      {/* Left Column */}
      <div className="w-full lg:w-3/5 bg-off-white flex flex-col justify-center items-start p-8 pl-12 md:pl-24">
        <nav>
          <ul>
            {OVERLAY_NAV_LINKS.map((link, i) => (
              <motion.li 
                key={link.name} 
                className="my-5"
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button
                  onClick={() => onNavClick(link.href)}
                  className="text-5xl md:text-7xl font-medium tracking-tight text-gray-500 hover:text-gray-900 transition-all duration-300 transform hover:translate-x-4"
                  data-cursor-hover
                >
                  {link.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Right Column */}
      <div className="hidden lg:flex lg:w-2/5 bg-off-white/70 backdrop-blur-lg flex-col justify-center p-16 relative">
        {/* Desktop Close Button */}
        <button
          onClick={onClose}
          className="group absolute top-8 right-8 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors p-2"
          aria-label="Go back"
          data-cursor-hover
        >
          <span className="text-sm font-medium">Go Back</span>
          <ArrowLeftIcon />
        </button>

        <div>
          <div className="flex justify-center mb-12">
            <Logo className="w-48 h-48 text-gray-800" />
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Brief Us</h3>
              <a href={`mailto:${BRIEF_US_INFO.email}`} className="block text-gray-600 hover:text-gray-900 transition-colors" data-cursor-hover>{BRIEF_US_INFO.email}</a>
              <a href={`tel:${BRIEF_US_INFO.tel.replace(/\s/g, '')}`} className="block text-gray-600 hover:text-gray-900 transition-colors mt-2" data-cursor-hover>{BRIEF_US_INFO.tel}</a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Follow us</h3>
              <div className="flex space-x-6">
                {OVERLAY_SOCIAL_LINKS.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-transform hover:scale-110"
                    aria-label={link.name}
                    data-cursor-hover
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};