export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  techStack: string[];
  features: string[];
  github: string;
  live?: string;
  category: string;
  gradient: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Topping Town',
    tagline: 'Full-Stack Restaurant Management & POS Platform',
    description:
      'A production-ready restaurant management ecosystem handling order management, inventory tracking, kitchen workflows, customer loyalty, and real-time staff coordination — built for modern restaurant businesses.',
    problem:
      'Restaurants struggle with fragmented systems across POS, inventory, and kitchen communication. Topping Town unifies all operations into a single real-time platform.',
    techStack: [
      'React 18', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis',
      'Socket.IO', 'Prisma ORM', 'Docker', 'JWT', 'Framer Motion',
    ],
    features: [
      'Real-time POS & order management',
      'Live Kitchen Display System (KDS)',
      'Inventory tracking & alerts',
      'Customer loyalty system',
      'Staff attendance & role-based access',
      'Sales analytics & PDF invoices',
      'WebSocket-powered live dashboards',
    ],
    github: 'https://github.com/abdulhanan-3939/toppingtown',
    category: 'Full Stack',
    gradient: 'from-purple-600/20 via-violet-600/10 to-cyan-500/10',
    accent: '#a855f7',
  },
  {
    id: 2,
    title: 'ResuMate-Pro',
    tagline: 'Full-Stack Online Resume Builder',
    description:
      'A feature-rich resume builder allowing users to create, customize, preview, and download professional resumes with multiple templates, real-time editing, and dynamic theme switching.',
    problem:
      'Most resume builders are either too rigid or require subscriptions. ResuMate-Pro offers full customization with a clean, fast, and free web interface.',
    techStack: [
      'HTML5', 'CSS3', 'Vanilla JavaScript', 'PHP', 'MySQL',
      'XAMPP', 'Session Management', 'PDFKit',
    ],
    features: [
      'Multiple resume templates & themes',
      'Real-time preview with live editing',
      'User authentication & profile management',
      'PDF download functionality',
      'SQL injection prevention & password hashing',
      'Responsive across all devices',
    ],
    github: 'https://github.com/abdulhanan-3939/ResuMate-Pro',
    category: 'Full Stack',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-emerald-500/10',
    accent: '#22d3ee',
  },
  {
    id: 3,
    title: 'Coming Soon',
    tagline: 'AI / Computer Vision Project',
    description:
      'An exciting AI-powered project currently in development. Check back soon — this space will be home to an intelligent system leveraging computer vision and machine learning.',
    problem: 'Stay tuned for a groundbreaking AI application that solves real-world problems intelligently.',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe'],
    features: ['Computer Vision', 'Real-time Processing', 'AI/ML Integration'],
    github: 'https://github.com/abdulhanan-3939',
    category: 'AI/ML',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-purple-500/10',
    accent: '#10b981',
  },
];
