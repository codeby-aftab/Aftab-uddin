import { Project, TimelineEvent } from './types';
import { 
    GitHubIcon, LinkedInIcon, DribbbleIcon, BehanceIcon, 
    CodeBracketIcon, GlobeAltIcon, ShieldCheckIcon, PaintBrushIcon,
    Html5Icon, Css3Icon, JavascriptIcon, ReactIcon, NodejsIcon, 
    MernStackIcon, MongodbIcon, MysqlIcon, WordpressIcon, PythonIcon, 
    GitIcon, PostmanIcon, EthicalHackingIcon, NetworkSecurityIcon, VscodeIcon,
    FacebookIcon, TwitterIcon, YouTubeIcon
} from './components/icons/Icons';

export const NAV_LINKS = [
  { name: 'Intro', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
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

export const ALL_PROJECTS: Project[] = [
  ...PROJECTS,
  {
    id: 6,
    title: 'CyberSec Analytics Dashboard',
    category: 'Data Visualization / Security',
    imageUrl: 'https://picsum.photos/seed/cybersec/800/600',
    details: {
      description: 'A real-time cybersecurity dashboard for visualizing network threats and incidents, built with React and D3.js.',
      role: 'Frontend Developer & Security Analyst',
      technologies: ['React', 'D3.js', 'Node.js', 'WebSocket'],
      images: ['https://picsum.photos/seed/cybersec-d1/1200/800'],
    },
  },
  {
    id: 7,
    title: 'E-Learn Platform',
    category: 'Ed-Tech / MERN Stack',
    imageUrl: 'https://picsum.photos/seed/elearn/800/600',
    details: {
      description: 'An interactive e-learning platform with course management, video streaming, and student progress tracking.',
      role: 'Full-Stack Developer',
      technologies: ['MERN Stack', 'Redux', 'AWS S3', 'Stripe API'],
      images: ['https://picsum.photos/seed/elearn-d1/1200/800', 'https://picsum.photos/seed/elearn-d2/1200/800'],
    },
  },
  {
    id: 8,
    title: 'Recipe Finder API',
    category: 'Backend / API Development',
    imageUrl: 'https://picsum.photos/seed/recipeapi/800/600',
    details: {
      description: 'A RESTful API built with Node.js and Express that provides recipe data based on available ingredients, with comprehensive documentation.',
      role: 'Backend Developer',
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Swagger'],
      images: ['https://picsum.photos/seed/recipeapi-d1/1200/800'],
    },
  },
  {
    id: 9,
    title: 'Portfolio Template',
    category: 'UI/UX Design & Development',
    imageUrl: 'https://picsum.photos/seed/portfolio-template/800/600',
    details: {
      description: 'A sleek, customizable portfolio website template for creatives, built with Next.js and Framer Motion for smooth animations.',
      role: 'Designer & Developer',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma'],
      images: ['https://picsum.photos/seed/portfolio-template-d1/1200/800'],
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
  { name: "HTML5", icon: Html5Icon },
  { name: "CSS3", icon: Css3Icon },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "React", icon: ReactIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "MERN Stack", icon: MernStackIcon },
  { name: "MongoDB", icon: MongodbIcon },
  { name: "MySQL", icon: MysqlIcon },
  { name: "WordPress", icon: WordpressIcon },
  { name: "Python", icon: PythonIcon },
  { name: "Git", icon: GitIcon },
  { name: "Postman", icon: PostmanIcon },
  { name: "Ethical Hacking", icon: EthicalHackingIcon },
  { name: "Network Security", icon: NetworkSecurityIcon },
  { name: "VS Code", icon: VscodeIcon },
];

export const EDUCATION: TimelineEvent[] = [
  {
    date: '2020 - 2024',
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'University of Karachi',
    description: 'Focused on software engineering, web development, and database management. Completed several projects including a final year project on an LLM-integrated MERN stack application.'
  },
  {
    date: '2018 - 2020',
    title: 'Intermediate in Pre-Engineering',
    subtitle: 'Govt. Dehli College',
    description: 'Completed higher secondary education with a focus on mathematics, physics, and chemistry, building a strong foundation for a technical degree.'
  },
];

export const EXPERIENCE: TimelineEvent[] = [
  {
    date: 'Jan 2023 - Present',
    title: 'Full-Stack Developer (Freelance)',
    subtitle: 'Upwork & Fiverr',
    description: 'Developed and maintained full-stack web applications for various clients using the MERN stack. Specialized in creating custom WordPress themes and plugins, and providing web security consultations.'
  },
  {
    date: 'Jun 2022 - Dec 2022',
    title: 'Web Developer Intern',
    subtitle: 'MK Technologies',
    description: 'Assisted the development team in building and updating corporate websites using WordPress. Gained hands-on experience with cPanel, client communication, and project management.'
  },
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

export const OVERLAY_NAV_LINKS = [
  { name: 'Intro', href: '#home' },
  { name: 'Portfolio', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact Us', href: '#contact' },
];

export const BRIEF_US_INFO = {
  email: 'admin@mktechnologies.info',
  tel: '+92 3360067777',
};

export const OFFICE_INFO = {
  address: 'Balad Trade Center 2, Office #108, Bahadurabad, Karachi',
};

export const OVERLAY_SOCIAL_LINKS = [
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
    { name: 'Twitter', icon: TwitterIcon, href: '#' },
    { name: 'YouTube', icon: YouTubeIcon, href: '#' },
];