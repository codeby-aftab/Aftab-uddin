import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Project } from './types';
import { PROJECTS, ALL_PROJECTS } from './constants';
import { ProjectModal } from './components/ProjectModal';
import { CustomCursor } from './components/CustomCursor';
import { AnimatePresence, motion } from 'framer-motion';
import { AllProjectsModal } from './components/AllProjectsModal';
import { MenuOverlay } from './components/MenuOverlay';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  useEffect(() => {
    document.body.dataset.activeSection = activeSection;
  }, [activeSection]);

  const handleProjectSelect = useCallback((project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  }, []);

  const handleOpenAllProjects = useCallback(() => {
    setIsAllProjectsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseAllProjects = useCallback(() => {
    setIsAllProjectsOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const handleProjectSelectFromAll = useCallback((project: Project) => {
    setIsAllProjectsOpen(false);
    // We don't need to set body overflow here because handleProjectSelect will do it.
    // A brief moment of 'auto' is fine between modal transitions.
    handleProjectSelect(project);
  }, [handleProjectSelect]);

  const handleNavClick = (sectionId: string) => {
    const mainEl = mainRef.current;
    // On large screens, scroll within the main element
    if (mainEl) {
      const targetElement = mainEl.querySelector(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On smaller screens, scroll the whole window
      const targetElement = document.querySelector(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const handleOverlayNavClick = (sectionId: string) => {
    closeMenu();
    // A small delay to allow the menu to close before scrolling
    setTimeout(() => {
      handleNavClick(sectionId);
    }, 300);
  };

  return (
    <>
      <CustomCursor />
      <div className="px-4 sm:px-8 md:px-12 lg:px-16">
        <motion.div 
          className="lg:grid lg:grid-cols-12 lg:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Left Sticky Column */}
          <aside className="lg:col-span-3 lg:sticky lg:top-0 lg:h-screen">
            <Hero activeSection={activeSection} onNavClick={handleNavClick} onLogoClick={openMenu} />
          </aside>

          {/* Right Scrollable Column */}
          <main ref={mainRef} className="lg:col-span-9 lg:h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory no-scrollbar">
            <Home />
            <Projects projects={PROJECTS} onProjectSelect={handleProjectSelect} onOpenAllProjects={handleOpenAllProjects} />
            <Services />
            <About />
            <Experience />
            <Contact />
          </main>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <MenuOverlay
            onClose={closeMenu}
            onNavClick={handleOverlayNavClick}
          />
        )}
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
        {isAllProjectsOpen && (
          <AllProjectsModal 
            projects={ALL_PROJECTS} 
            onClose={handleCloseAllProjects} 
            onProjectSelect={handleProjectSelectFromAll}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default App;