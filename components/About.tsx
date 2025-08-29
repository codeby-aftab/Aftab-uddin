import React from 'react';
import { SKILLS } from '../constants';
import { DownloadIcon } from './icons/Icons';
// FIX: Import Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

// FIX: Explicitly type variants for type safety.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

// FIX: Explicitly type variants to resolve type error with 'ease' property.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
      <motion.div variants={containerVariants}>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 leading-relaxed max-w-4xl">
          I'm a Computer Science student with a strong interest in Web Development and Software Engineering. Proficient in building full-stack web applications using the MERN stack and managing custom WordPress websites. I enjoy solving technical problems, learning new technologies, and contributing to dynamic teams. My experience ranges from developing scalable, responsive, and secure applications to cybersecurity and vulnerability assessments. My goal is to grow as a Full-Stack Web Developer while leveraging my security expertise.
        </motion.p>
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">My Skills</h3>
          <motion.div 
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 text-center"
            variants={gridContainerVariants}
          >
            {SKILLS.map((skill) => {
              const hoverTextClass = (skill as any).hoverTextColor || 'group-hover:text-white';
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className={`group flex flex-col items-center justify-center p-4 bg-gray-100/80 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${skill.color}`}
                  title={skill.name}
                >
                  <div className={`transition-colors duration-300 text-gray-800 ${hoverTextClass}`}>
                    <skill.icon />
                  </div>
                  <span className={`mt-2 text-xs sm:text-sm font-medium text-gray-700 ${hoverTextClass}`}>{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
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
    </motion.section>
  );
};
