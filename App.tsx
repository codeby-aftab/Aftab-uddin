import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Project } from './types';
import { PROJECTS } from './constants';
import { ProjectModal } from './components/ProjectModal';
import { CustomCursor } from './components/CustomCursor';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('projects');
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mainEl = mainRef.current;
    // On smaller screens, mainEl won't exist for the observer, so we fall back to document
    const scrollRoot = mainEl || document.body;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        root: mainEl, // will be null on mobile, which is correct
        threshold: 0.5 
      }
    );
    
    const sections = (mainEl || document).querySelectorAll('main section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
        sections.forEach(section => {
            observer.unobserve(section);
        });
    };
  }, []);

  const handleProjectSelect = useCallback((project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="lg:grid lg:grid-cols-12 lg:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Left Sticky Column */}
          <aside className="lg:col-span-4 lg:sticky lg:top-0 lg:h-screen">
            <Hero activeSection={activeSection} />
          </aside>

          {/* Right Scrollable Column */}
          <main ref={mainRef} className="lg:col-span-8 lg:h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory no-scrollbar">
            <Projects projects={PROJECTS} onProjectSelect={handleProjectSelect} />
            <Services />
            <About />
            <Contact />
          </main>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default App;