import React from 'react';
import { SKILLS } from '../constants';
import { DownloadIcon } from './icons/Icons';
// FIX: Import Variants type from framer-motion to resolve typing errors.
import { motion, Variants } from 'framer-motion';

// FIX: Add Variants type to ensure correct type inference for animation properties.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// FIX: Add Variants type to ensure correct type inference for animation properties.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// FIX: Add Variants type to ensure correct type inference for animation properties.
const marqueeVariants: Variants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-20 lg:py-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:snap-start"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <motion.div variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 leading-relaxed max-w-4xl">
            I'm a Computer Science student with a strong interest in Web Development and Software Engineering. Proficient in building full-stack web applications using the MERN stack and managing custom WordPress websites. I enjoy solving technical problems, learning new technologies, and contributing to dynamic teams. My experience ranges from developing scalable, responsive, and secure applications to cybersecurity and vulnerability assessments. My goal is to grow as a Full-Stack Web Developer while leveraging my security expertise.
          </motion.p>
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">My Skills</h3>
             <div className="relative w-full overflow-hidden py-4 bg-gray-100 rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-transparent to-gray-100 z-10"></div>
                <motion.div className="flex" variants={marqueeVariants} animate="animate">
                  {[...SKILLS, ...SKILLS].map((skill, index) => (
                      <span key={index} className="text-md font-semibold text-gray-600 mx-4 flex-shrink-0">
                        {skill}
                      </span>
                  ))}
                </motion.div>
             </div>
          </motion.div>
          <motion.a
            variants={itemVariants}
            href="/Aftab_Uddin_Resume.pdf"
            download
            data-cursor-hover
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold py-3 px-6 rounded-lg hover:bg-accent-light transition-all shadow-lg transform hover:scale-105"
          >
            <DownloadIcon />
            Download My Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};