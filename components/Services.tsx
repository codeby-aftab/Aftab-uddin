import React from 'react';
import { SERVICES } from '../constants';
// FIX: Import Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

// FIX: Explicitly type variants for type safety.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// FIX: Explicitly type variants to resolve type error with 'ease' property.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const Services: React.FC = () => {
  return (
    <motion.section
      id="services"
      className="py-20 lg:py-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:snap-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div className="mb-16" variants={containerVariants}>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900">What I Do</motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-gray-600 mt-2">I offer a range of services to bring your digital ideas to life.</motion.p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {SERVICES.map((service, index) => (
          <motion.div 
            key={index} 
            className="bg-off-white/50 backdrop-blur-md rounded-lg p-6 flex flex-col items-start shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="bg-accent/10 p-3 rounded-full mb-4">
                <service.icon />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
