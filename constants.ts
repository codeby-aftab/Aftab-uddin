import { Project, TimelineEvent } from './types';
import { 
    GitHubIcon, LinkedInIcon, DribbbleIcon, BehanceIcon, 
    CodeBracketIcon, GlobeAltIcon, ShieldCheckIcon, PaintBrushIcon,
    Html5Icon, Css3Icon, JavascriptIcon, ReactIcon, NodejsIcon, 
    MernStackIcon, MongodbIcon, MysqlIcon, WordpressIcon, PythonIcon, 
    GitIcon, PostmanIcon, EthicalHackingIcon, NetworkSecurityIcon, VscodeIcon
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
      detailedDescription: "This project was the culmination of my Bachelor's degree in Computer Science. The primary goal was to create a smart, interactive web application that leverages the power of Large Language Models to provide a unique user experience.\n\nThe MERN stack (MongoDB, Express.js, React, Node.js) was chosen for its flexibility and robustness in building modern, single-page applications. The application features a user-friendly interface where users can interact with an AI assistant for various tasks. The backend handles complex logic, API integrations with the LLM, and user data management. This project honed my skills in full-stack development, API integration, and project management from conception to deployment.",
      role: 'Lead Full-Stack Developer',
      technologies: ['MERN Stack', 'React', 'Node.js', 'Express.js', 'MongoDB', 'LLM API Integration'],
      images: [
        'https://picsum.photos/seed/getsetgo-d1/1200/800',
        'https://picsum.photos/seed/getsetgo-d2/1200/800',
      ],
      liveUrl: '#',
    },
  },
  {
    id: 2,
    title: 'MK Realties',
    category: 'Real Estate Portal',
    imageUrl: 'https://picsum.photos/seed/mkrealties/800/600',
    details: {
      description: 'A professional real estate website for showcasing property listings. Built on WordPress, allowing for easy content management and updates by the client.',
      detailedDescription: "MK Realties required a clean, professional, and easy-to-navigate website to showcase their property listings effectively. WordPress was the ideal choice due to its powerful content management capabilities, which allow the client to update listings and content without technical expertise.\n\nI developed a custom theme from scratch to match their branding and functional requirements. The site features a dynamic property listing system with advanced search and filtering options, an interactive map view, and detailed property pages. SEO best practices were implemented to ensure high visibility in search engine results.",
      role: 'Web Developer',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Theming', 'CSS3'],
      images: [
        'https://picsum.photos/seed/mkrealties-d1/1200/800',
      ],
      liveUrl: '#',
    },
  },
  {
    id: 3,
    title: 'MK Autos',
    category: 'Automotive Marketplace',
    imageUrl: 'https://picsum.photos/seed/mkautos/800/600',
    details: {
      description: 'A dynamic online marketplace for buying and selling vehicles. Developed using the MERN stack to handle complex filtering, user accounts, and listings.',
      detailedDescription: 'The goal for MK Autos was to create a feature-rich automotive marketplace that could compete with established platforms. The MERN stack provided the necessary power and scalability to handle a large inventory of vehicles and high user traffic.\n\nKey features include advanced search and filtering by make, model, year, and other criteria, secure user authentication for buyers and sellers, and a comprehensive dashboard for managing listings. The RESTful API backend, built with Node.js and Express, ensures fast and reliable data handling for a smooth user experience.',
      role: 'Full-Stack Developer',
      technologies: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'REST APIs'],
      images: [
        'https://picsum.photos/seed/mkautos-d1/1200/800',
        'https://picsum.photos/seed/mkautos-d2/1200/800',
      ],
      liveUrl: '#',
    },
  },
  {
    id: 4,
    title: 'MK Technologies',
    category: 'Corporate Website',
    imageUrl: 'https://picsum.photos/seed/mktech/800/600',
    details: {
      description: 'The official corporate website for MK Technologies, providing information about their services and projects. Developed with WordPress for robust content management.',
      detailedDescription: 'As the corporate face of MK Technologies, this website needed to be professional, informative, and reflect the company\'s brand identity. Built on WordPress, it allows the marketing team to easily update content, news, and project showcases without needing technical assistance.\n\nThe design is fully responsive, ensuring an optimal viewing experience across all devices. I focused on clean code, fast page load times, and a clear information architecture to effectively communicate the company\'s value proposition to potential clients.',
      role: 'Web Developer',
      technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'cPanel'],
      images: [
        'https://picsum.photos/seed/mktech-d1/1200/800',
      ],
      liveUrl: '#',
    },
  },
    {
    id: 5,
    title: 'Magical Storytelling by Ian Swan',
    category: 'E-commerce / Author Site',
    imageUrl: 'https://picsum.photos/seed/ianswan/800/600',
    details: {
      description: 'An engaging website for an author, featuring a blog, book showcase, and an integrated e-commerce shop for selling books and merchandise.',
      detailedDescription: "This project for author Ian Swan was about creating an immersive online presence that reflects his brand of magical storytelling. The website combines a personal blog with a fully functional WooCommerce store, allowing him to connect with his audience and sell his products directly.\n\nI integrated payment gateways and customized the WooCommerce platform to fit the unique needs of selling books and related merchandise. The result is a seamless experience for fans to read his latest posts, explore his works, and make purchases, all in one place.",
      role: 'WordPress Developer',
      technologies: ['WordPress', 'WooCommerce', 'Elementor', 'Payment Gateway Integration'],
      images: [
        'https://picsum.photos/seed/ianswan-d1/1200/800',
      ],
      liveUrl: '#',
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
      detailedDescription: "This dashboard provides security analysts with a real-time overview of network activity and potential threats. Using React for the frontend and D3.js for data visualization, it transforms complex security data into intuitive charts and graphs.\n\nWebSockets ensure a live, continuous stream of data from network sensors. The interface is designed to be highly interactive, allowing analysts to drill down into specific incidents and investigate suspicious activity efficiently. This project merged my skills in both web development and cybersecurity.",
      role: 'Frontend Developer & Security Analyst',
      technologies: ['React', 'D3.js', 'Node.js', 'WebSocket'],
      images: ['https://picsum.photos/seed/cybersec-d1/1200/800'],
      liveUrl: '#',
    },
  },
  {
    id: 7,
    title: 'E-Learn Platform',
    category: 'Ed-Tech / MERN Stack',
    imageUrl: 'https://picsum.photos/seed/elearn/800/600',
    details: {
      description: 'An interactive e-learning platform with course management, video streaming, and student progress tracking.',
      detailedDescription: "The E-Learn Platform is a comprehensive solution for online education. Built with the MERN stack and Redux for state management, it offers a robust and scalable architecture.\n\nIt includes features like course creation and management for instructors, video streaming hosted on AWS S3, interactive quizzes, and detailed progress tracking for students. Secure payment processing is handled through the Stripe API, providing a complete educational ecosystem.",
      role: 'Full-Stack Developer',
      technologies: ['MERN Stack', 'Redux', 'AWS S3', 'Stripe API'],
      images: ['https://picsum.photos/seed/elearn-d1/1200/800', 'https://picsum.photos/seed/elearn-d2/1200/800'],
      liveUrl: '#',
    },
  },
  {
    id: 8,
    title: 'Recipe Finder API',
    category: 'Backend / API Development',
    imageUrl: 'https://picsum.photos/seed/recipeapi/800/600',
    details: {
      description: 'A RESTful API built with Node.js and Express that provides recipe data based on available ingredients, with comprehensive documentation.',
      detailedDescription: "This project involved creating a robust, well-documented RESTful API for a recipe application. Built with Node.js and Express, it serves data from a PostgreSQL database containing a vast collection of recipes.\n\nThe API allows users to search for recipes based on ingredients they have on hand. I used Swagger to generate interactive API documentation, making it easy for frontend developers to understand and consume the endpoints. The focus was on performance, reliability, and clear documentation.",
      role: 'Backend Developer',
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Swagger'],
      images: ['https://picsum.photos/seed/recipeapi-d1/1200/800'],
      liveUrl: '#',
    },
  },
  {
    id: 9,
    title: 'Portfolio Template',
    category: 'UI/UX Design & Development',
    imageUrl: 'https://picsum.photos/seed/portfolio-template/800/600',
    details: {
      description: 'A sleek, customizable portfolio website template for creatives, built with Next.js and Framer Motion for smooth animations.',
      detailedDescription: "This project was a creative exercise to build a sleek and modern portfolio template for developers and designers. I used Next.js for its performance and SEO benefits, Tailwind CSS for rapid UI development, and Framer Motion for smooth, delightful animations.\n\nThe design, which was first prototyped in Figma, is clean, minimalist, and fully customizable. It's built to be easily deployed and updated, serving as a perfect starting point for anyone looking to showcase their work online.",
      role: 'Designer & Developer',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma'],
      images: ['https://picsum.photos/seed/portfolio-template-d1/1200/800'],
      liveUrl: '#',
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
  { name: "HTML5", icon: Html5Icon, color: 'hover:bg-skill-html' },
  { name: "CSS3", icon: Css3Icon, color: 'hover:bg-skill-css' },
  { name: "JavaScript", icon: JavascriptIcon, color: 'hover:bg-skill-js', hoverTextColor: 'group-hover:text-black' },
  { name: "React", icon: ReactIcon, color: 'hover:bg-skill-react', hoverTextColor: 'group-hover:text-black' },
  { name: "Node.js", icon: NodejsIcon, color: 'hover:bg-skill-node' },
  { name: "MERN Stack", icon: MernStackIcon, color: 'hover:bg-gray-900' },
  { name: "MongoDB", icon: MongodbIcon, color: 'hover:bg-skill-mongo' },
  { name: "MySQL", icon: MysqlIcon, color: 'hover:bg-skill-mysql' },
  { name: "WordPress", icon: WordpressIcon, color: 'hover:bg-skill-wordpress' },
  { name: "Python", icon: PythonIcon, color: 'hover:bg-skill-python' },
  { name: "Git", icon: GitIcon, color: 'hover:bg-skill-git', hoverTextColor: 'group-hover:text-black' },
  { name: "Postman", icon: PostmanIcon, color: 'hover:bg-skill-postman', hoverTextColor: 'group-hover:text-black' },
  { name: "Ethical Hacking", icon: EthicalHackingIcon, color: 'hover:bg-red-500' },
  { name: "Network Security", icon: NetworkSecurityIcon, color: 'hover:bg-blue-500' },
  { name: "VS Code", icon: VscodeIcon, color: 'hover:bg-skill-vscode' },
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
  email: 'codebyaftab@gmail.com',
  tel: '+92 3172749922',
};

export const OVERLAY_SOCIAL_LINKS = [
    { name: 'GitHub', icon: GitHubIcon, href: '#' },
    { name: 'LinkedIn', icon: LinkedInIcon, href: '#' },
];