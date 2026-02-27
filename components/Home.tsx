import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDownIcon } from './icons/Icons';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export const Home: React.FC = () => {
  const handleScrollToProjects = () => {
    const mainEl = document.querySelector('main.lg\\:overflow-y-scroll');
    const projectsSection = document.getElementById('projects');

    if (mainEl && projectsSection) {
      mainEl.scrollTo({
        top: projectsSection.offsetTop,
        behavior: 'smooth'
      });
    } else if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="home"
      className="relative py-20 lg:py-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center lg:snap-start"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={containerVariants} className="max-w-4xl text-center flex flex-col items-center">
        <motion.h1
          variants={containerVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-black text-gray-900 tracking-tighter mb-6 leading-[0.9]"
        >
          <motion.span variants={itemVariants} className="block">Full-Stack Developer</motion.span>
          <motion.span 
            variants={itemVariants} 
            className="block text-transparent"
            style={{ WebkitTextStroke: '1px #1f2937' }}
          >
            & Security Analyst
          </motion.span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
        >
          I build and secure intuitive, high-performance web applications. From MERN stack development to custom WordPress solutions, I focus on creating seamless user journeys and robust digital platforms.
        </motion.p>
      </motion.div>

       <motion.div
          className="hidden lg:block absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
       >
          <button onClick={handleScrollToProjects} data-cursor-hover aria-label="Scroll to projects">
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-gray-600 p-2"
            >
                <ArrowDownIcon />
            </motion.div>
          </button>
       </motion.div>
    </motion.section>
  );
};