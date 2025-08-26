import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon } from './icons/Icons';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

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
    
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
    
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.querySelectorAll('section').forEach(section => {
            observer.unobserve(section);
        });
    };
  }, []);

  const navClass = isScrolled
    ? 'bg-off-white/80 backdrop-blur-lg shadow-md'
    : 'bg-transparent';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        <a href="#home" className="text-xl font-bold tracking-tighter text-gray-900" data-cursor-hover>
          Aftab Uddin
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                data-cursor-hover
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 block h-[2px] w-full bg-accent"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2" aria-label="Toggle menu" data-cursor-hover>
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-off-white py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-center py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              data-cursor-hover
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};