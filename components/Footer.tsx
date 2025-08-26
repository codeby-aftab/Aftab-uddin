import React from 'react';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_DETAILS } from '../constants';
import { ArrowUpIcon } from './icons/Icons';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-off-white/30 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-8">
                <div className="py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let's build something amazing together.</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Ready to start your next project? I'm here to help. Get in touch to discuss your ideas.</p>
                    <a
                        href="#contact"
                        className="mt-8 inline-block bg-accent text-white font-semibold py-3 px-8 rounded-lg hover:bg-accent-light transition-all shadow-lg transform hover:scale-105"
                        data-cursor-hover
                    >
                        Start a Conversation
                    </a>
                </div>

                <div className="py-16 border-t border-gray-400/30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Aftab Uddin</h3>
                        <p className="text-gray-600 mt-2">Full-Stack Web Developer & SOC Analyst</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-600 hover:text-accent transition-colors" data-cursor-hover>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Connect With Me</h4>
                        <div className="flex justify-center md:justify-start space-x-4">
                            {SOCIAL_LINKS.map(link => (
                                <motion.a 
                                    key={link.name} 
                                    href={link.href} 
                                    className="text-gray-500 hover:text-accent transition-colors" 
                                    aria-label={`${link.name} Profile`}
                                    whileHover={{ y: -4 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    data-cursor-hover
                                >
                                    <link.icon />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
                        <p className="text-gray-600">{CONTACT_DETAILS.email}</p>
                        <p className="text-gray-600 mt-1">{CONTACT_DETAILS.location}</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-400/30">
                <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                    <p className="mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Aftab Uddin. All rights reserved.</p>
                    <a href="#home" className="inline-flex items-center gap-2 hover:text-accent transition-colors" data-cursor-hover>
                        Back to Top <ArrowUpIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
};