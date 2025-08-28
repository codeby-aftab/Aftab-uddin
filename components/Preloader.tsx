import React from 'react';
// FIX: Import Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

// An animated version of the logo specifically for the preloader
const AnimatedLogo = ({ className }: { className?: string }) => {
  // FIX: Explicitly type variants for type safety.
  const svgVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  // FIX: Explicitly type variants to resolve the type error with the 'ease' property.
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "w-24 h-24 text-gray-900"}
      aria-label="AJ Logo Animation"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Motion path for the "A" part */}
      <motion.path
        d="M22 75L40 25L58 75H48L40 50L32 75H22Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        variants={pathVariants}
      />
      {/* Motion path for the "J" part */}
      <motion.path
        d="M62 75V25H82V35H72V65C72 75 65 75 62 70V75Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        variants={pathVariants}
      />
    </motion.svg>
  );
};


export const Preloader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex justify-center items-center bg-off-white"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }} // Zoom in effect on exit
      transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }} // Smoother ease for exit
    >
        <AnimatedLogo className="w-24 h-24 text-gray-900" />
    </motion.div>
  );
};