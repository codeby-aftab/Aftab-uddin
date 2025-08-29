import React from 'react';
import { motion, Variants } from 'framer-motion';
import { EDUCATION, EXPERIENCE } from '../constants';
import { TimelineEvent } from '../types';
import { BriefcaseIcon, AcademicCapIcon } from './icons/Icons';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const timelineItemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const TimelineItem: React.FC<{ item: TimelineEvent; icon: React.ReactNode; isLast?: boolean }> = ({ item, icon, isLast = false }) => (
  <motion.li 
    className="relative pb-12 ps-20" 
    variants={timelineItemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    {/* Connector line */}
    {!isLast && <div className="absolute left-[39px] top-7 h-full w-0.5 bg-gray-300"></div>}
    
    {/* Icon */}
    <span className="absolute left-1 top-0 flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full ring-8 ring-off-white text-accent z-10 shadow-sm">
      {icon}
    </span>
    
    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">{item.date}</p>
      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
      <h4 className="text-md font-semibold text-gray-600 mb-2">{item.subtitle}</h4>
      <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
    </div>
  </motion.li>
);


export const Experience: React.FC = () => {
  return (
    <motion.section
      id="experience"
      className="py-20 lg:py-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:snap-start"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
        My Journey
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        <motion.div variants={containerVariants}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 relative">
            Work Experience
          </h3>
          <ul className="relative">
            {EXPERIENCE.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                icon={<BriefcaseIcon className="w-8 h-8" />} 
                isLast={index === EXPERIENCE.length - 1} 
              />
            ))}
          </ul>
        </motion.div>
        <motion.div variants={containerVariants}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 relative">
            Education
          </h3>
           <ul className="relative">
            {EDUCATION.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                icon={<AcademicCapIcon className="w-8 h-8" />}
                isLast={index === EDUCATION.length - 1} 
              />
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};
