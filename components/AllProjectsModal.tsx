import React from 'react';
import { Project } from '../types';
import { ArrowLeftIcon, Logo } from './icons/Icons';
// FIX: Import Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

// FIX: Explicitly type variants for type safety.
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// FIX: Explicitly type variants to resolve type error with 'ease' property.
const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: 0.4, ease: [0.5, 0, 0.75, 0] } 
  },
};

// FIX: Explicitly type variants for type safety.
const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};


interface AllProjectsModalProps {
  projects: Project[];
  onClose: () => void;
  onProjectSelect: (project: Project) => void;
}

export const AllProjectsModal: React.FC<AllProjectsModalProps> = ({ projects, onClose, onProjectSelect }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-off-white z-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="w-full h-full flex flex-col"
        variants={modalVariants}
        exit="exit"
      >
        <div className="relative flex justify-center items-center p-6 border-b border-gray-200 sticky top-0 bg-off-white z-10">
            <div className="absolute left-6">
                <Logo className="w-10 h-10 text-gray-900" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">All Projects</h2>
            <button
                onClick={onClose}
                className="group absolute right-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Go back"
                data-cursor-hover
            >
              <ArrowLeftIcon />
              <span className="text-sm font-medium">Go Back</span>
            </button>
        </div>
        <div className="overflow-y-auto h-full p-6 md:p-8 no-scrollbar">
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                variants={gridVariants}
                initial="hidden"
                animate="visible"
            >
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onSelect={() => onProjectSelect(project)} />
            ))}
            </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};