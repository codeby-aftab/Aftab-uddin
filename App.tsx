import React, { useState, useCallback, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Project } from './types';
import { PROJECTS } from './constants';
import { ProjectModal } from './components/ProjectModal';
import { CustomCursor } from './components/CustomCursor';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('projects');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );
    
    document.querySelectorAll('main section').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
        document.querySelectorAll('main section').forEach(section => {
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
          <main className="lg:col-span-8">
            <Projects projects={PROJECTS} onProjectSelect={handleProjectSelect} />
            <Services />
            <About />
            <Contact />
          </main>
        </motion.div>
      </div>

      <Footer />
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default App;