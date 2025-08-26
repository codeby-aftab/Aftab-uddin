import React from 'react';
import { Project } from '../types';
import { ArrowUpRightIcon } from './icons/Icons';
// FIX: Import Variants type from framer-motion to resolve typing errors.
import { motion, Variants } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

// FIX: Add Variants type to ensure correct type inference for animation properties.
const cardVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
        }
    }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-lg h-80 cursor-pointer"
      onClick={onSelect}
      variants={cardVariants}
      data-cursor-hover
    >
      <motion.img 
        src={project.imageUrl} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <p className="text-sm font-medium text-white/80 mb-1">{project.category}</p>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <div className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full transform transition-transform duration-300 group-hover:scale-110">
          <ArrowUpRightIcon />
        </div>
      </div>
    </motion.div>
  );
};
