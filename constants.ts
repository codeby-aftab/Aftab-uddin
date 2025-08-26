import { Project } from './types';
import { 
    GitHubIcon, LinkedInIcon, DribbbleIcon, BehanceIcon, 
    CodeBracketIcon, GlobeAltIcon, ShieldCheckIcon, PaintBrushIcon 
} from './components/icons/Icons';

export const NAV_LINKS = [
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'GetSetGo Final Year Project',
    category: 'Web Application / LLM',
    imageUrl: 'https://picsum.photos/seed/getsetgo/800/600',
    details: {
      description: 'A comprehensive final year project utilizing the MERN stack integrated with a Large Language Model (LLM) to deliver advanced features and intelligent interactions.',
      role: 'Lead Full-Stack Developer',
      technologies: ['MERN Stack', 'React', 'Node.js', 'Express.js', 'MongoDB', 'LLM API Integration'],
      images: [
        'https://picsum.photos/seed/getsetgo-d1/1200/800',
        'https://picsum.photos/seed/getsetgo-d2/1200/800',
      ],
    },
  },
  {
    id: 2,
    title: 'MK Realties',
    category: 'Real Estate Portal',
    imageUrl: 'https://picsum.photos/seed/mkrealties/800/600',
    details: {
      description: 'A professional real estate website for showcasing property listings. Built on WordPress, allowing for easy content management and updates by the client.',
      role: 'Web Developer',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Theming', 'CSS3'],
      images: [
        'https://picsum.photos/seed/mkrealties-d1/1200/800',
      ],
    },
  },
  {
    id: 3,
    title: 'MK Autos',
    category: 'Automotive Marketplace',
    imageUrl: 'https://picsum.photos/seed/mkautos/800/600',
    details: {
      description: 'A dynamic online marketplace for buying and selling vehicles. Developed using the MERN stack to handle complex filtering, user accounts, and listings.',
      role: 'Full-Stack Developer',
      technologies: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'REST APIs'],
      images: [
        'https://picsum.photos/seed/mkautos-d1/1200/800',
        'https://picsum.photos/seed/mkautos-d2/1200/800',
      ],
    },
  },
  {
    id: 4,
    title: 'MK Technologies',
    category: 'Corporate Website',
    imageUrl: 'https://picsum.photos/seed/mktech/800/600',
    details: {
      description: 'The official corporate website for MK Technologies, providing information about their services and projects. Developed with WordPress for robust content management.',
      role: 'Web Developer',
      technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'cPanel'],
      images: [
        'https://picsum.photos/seed/mktech-d1/1200/800',
      ],
    },
  },
    {
    id: 5,
    title: 'Magical Storytelling by Ian Swan',
    category: 'E-commerce / Author Site',
    imageUrl: 'https://picsum.photos/seed/ianswan/800/600',
    details: {
      description: 'An engaging website for an author, featuring a blog, book showcase, and an integrated e-commerce shop for selling books and merchandise.',
      role: 'WordPress Developer',
      technologies: ['WordPress', 'WooCommerce', 'Elementor', 'Payment Gateway Integration'],
      images: [
        'https://picsum.photos/seed/ianswan-d1/1200/800',
      ],
    },
  },
];

export const SERVICES = [
    {
        icon: CodeBracketIcon,
        title: 'Full-Stack Development',
        description: 'Building responsive, scalable, and secure full-stack web applications from scratch using the MERN stack and modern technologies.'
    },
    {
        icon: GlobeAltIcon,
        title: 'WordPress Solutions',
        description: 'Developing custom WordPress themes, plugins, and e-commerce solutions that are easy to manage and tailored to your business needs.'
    },
    {
        icon: ShieldCheckIcon,
        title: 'Web Security',
        description: 'Conducting vulnerability assessments and implementing security best practices to protect your web applications from threats.'
    },
    {
        icon: PaintBrushIcon,
        title: 'UI/UX & Responsive Design',
        description: 'Creating intuitive, user-friendly interfaces with a focus on responsive design to ensure a seamless experience on all devices.'
    }
];

export const SKILLS = [
    "HTML5", "CSS3", "JavaScript", "React", "Node.js", "MERN Stack", "MongoDB", "MySQL", "WordPress", "Python", "Git", "Postman", "Ethical Hacking", "Network Security", "VS Code"
];

export const SOCIAL_LINKS = [
    { name: 'LinkedIn', icon: LinkedInIcon, href: '#' },
    { name: 'GitHub', icon: GitHubIcon, href: '#' },
    { name: 'Dribbble', icon: DribbbleIcon, href: '#' },
    { name: 'Behance', icon: BehanceIcon, href: '#' }
];

export const CONTACT_DETAILS = {
  email: 'codebyaftab@gmail.com',
  location: 'Karachi, Pakistan',
};