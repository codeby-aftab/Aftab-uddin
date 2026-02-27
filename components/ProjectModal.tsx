import React, { useState } from 'react';
import { Project } from '../types';
import { XIcon, ExternalLinkIcon, ChevronLeftIcon, ChevronRightIcon } from './icons/Icons';
// FIX: Import Variants from framer-motion to correctly type animation variants.
import { motion, AnimatePresence, Variants } from 'framer-motion';

// FIX: Explicitly type variants for type safety.
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// FIX: Explicitly type variants to resolve type error with the cubic-bezier ease property.
const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeOut' } },
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

// FIX: Explicitly type variants for type safety.
const carouselVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const images = project.details.images;
  const imageIndex = page % images.length < 0 ? images.length + (page % images.length) : page % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  
  const goToPage = (newPage: number) => {
    const newDirection = newPage > imageIndex ? 1 : -1;
    setPage([newPage, newDirection]);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-off-white/60 backdrop-blur-lg z-50 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-off-white w-full h-full max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 bg-black/20 text-white p-2 rounded-full hover:bg-black/40 transition-colors"
          aria-label="Close project details"
          data-cursor-hover
        >
          <XIcon />
        </button>
        
        {/* Image Carousel Panel */}
        <div className="relative w-full md:w-3/5 h-1/2 md:h-full bg-gray-900">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={images[imageIndex]}
                alt={`${project.title} screenshot ${imageIndex + 1}`}
                referrerPolicy="no-referrer"
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full object-cover cursor-grab active:cursor-grabbing"
              />
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  onClick={() => paginate(-1)}
                  className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors focus:outline-none"
                  aria-label="Previous image"
                  data-cursor-hover
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors focus:outline-none"
                  aria-label="Next image"
                  data-cursor-hover
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToPage(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === imageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
        </div>
        
        {/* Info Panel */}
        <div className="w-full md:w-2/5 h-1/2 md:h-full p-8 lg:p-10 flex flex-col overflow-y-auto no-scrollbar">
            {/* Project Header */}
            <div className="pb-4 mb-4 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-md text-gray-600">{project.details.description}</p>
            </div>

            {/* Meta Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-bold text-gray-500 mb-2 text-sm uppercase tracking-wider">My Role</h4>
                <p className="text-gray-700">{project.details.role}</p>
              </div>
              {project.details.liveUrl && (
                <div>
                  <h4 className="font-bold text-gray-500 mb-2 text-sm uppercase tracking-wider">Live Site</h4>
                  <a
                    href={project.details.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                  >
                    <span>View Project</span>
                    <ExternalLinkIcon />
                  </a>
                </div>
              )}
            </div>

            {/* Technologies */}
            {project.details.technologies && project.details.technologies.length > 0 && (
              <div className="mb-4 pb-6 border-b border-gray-200">
                <h4 className="font-bold text-gray-500 mb-3 text-sm uppercase tracking-wider">Technology Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.details.technologies.map(tech => (
                    <span key={tech} className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Project Overview */}
            {project.details.detailedDescription && (
              <div className="flex-grow min-h-0">
                <h3 className="font-bold text-gray-500 mb-3 text-sm uppercase tracking-wider">
                  Project Overview
                </h3>
                <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                  {project.details.detailedDescription.split('\n').map((paragraph, index) => (
                    paragraph.trim() && <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
        </div>

      </motion.div>
    </motion.div>
  );
};