import React from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
// FIX: Import Variants type from framer-motion to resolve typing errors.
import { motion, Variants } from 'framer-motion';

// FIX: Add Variants type to ensure correct type inference for animation properties.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// FIX: Add Variants type to ensure correct type inference for animation properties.
const titleVariants: Variants = {
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

interface ProjectsProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onProjectSelect }) => {
  return (
    <motion.section
      id="projects"
      className="pt-20 lg:pt-32 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="text-center mb-16">
        <motion.h2 variants={titleVariants} className="text-4xl md:text-5xl font-bold text-gray-900">Featured Projects</motion.h2>
        <motion.p variants={titleVariants} className="text-lg text-gray-600 mt-2">A selection of my recent work.</motion.p>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={() => onProjectSelect(project)} />
        ))}
      </motion.div>
    </motion.section>
  );
};