import React from 'react';
import { Project } from '../types';
import { XIcon } from './icons/Icons';
import { motion } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 },
};

// FIX: Define props interface for ProjectModal component
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-off-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
        variants={modalVariants}
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors z-10"
          aria-label="Close project details"
        >
          <XIcon />
        </button>
        <div className="p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{project.title}</h2>
          <p className="text-md text-gray-500 mb-6">{project.details.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="font-bold text-gray-800 mb-1">My Role</h4>
              <p className="text-gray-600">{project.details.role}</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-bold text-gray-800 mb-1">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.details.technologies.map(tech => (
                  <span key={tech} className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {project.details.images.map((img, index) => (
              <img key={index} src={img} alt={`${project.title} detail ${index + 1}`} className="w-full rounded-lg shadow-md" />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};