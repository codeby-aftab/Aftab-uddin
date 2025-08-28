import React from 'react';
import { Project } from '../types';
import { ProjectCard, cardVariants } from './ProjectCard';
import { ArrowUpRightIcon } from './icons/Icons';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

interface ProjectsProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
  onOpenAllProjects: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onProjectSelect, onOpenAllProjects }) => {
  return (
    <motion.section
      id="projects"
      className="pt-20 lg:pt-0 pb-20 lg:pb-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:snap-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={() => onProjectSelect(project)} />
        ))}
        <motion.div
          onClick={onOpenAllProjects}
          className="group relative rounded-lg bg-gray-900 h-80 cursor-pointer flex flex-col justify-center items-center text-center p-6 text-white overflow-hidden shadow-lg"
          variants={cardVariants}
          data-cursor-hover
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <h3 className="text-xl font-bold">See All Projects</h3>
           <div className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full transform transition-transform duration-300 group-hover:scale-110">
            <ArrowUpRightIcon />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};