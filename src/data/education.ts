export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  tags: string[];
  type: 'education' | 'project' | 'learning';
  icon: string;
}

export const timeline: TimelineItem[] = [
  {
    year: '2024 – Present',
    title: 'BS Software Engineering',
    institution: 'COMSATS University Islamabad — Sahiwal Campus',
    description:
      'Currently in 2nd year (4th semester). Studying core software engineering principles with focus on building real-world systems. Completed DSA, OOP, Database Systems, and introductory AI coursework.',
    tags: ['DSA', 'OOP', 'Databases', 'AI', 'Software Engineering'],
    type: 'education',
    icon: '🎓',
  },
  {
    year: '2025',
    title: 'Topping Town — Restaurant Management System',
    institution: 'Personal Project',
    description:
      'Built a full production-ready restaurant POS and management platform with 15+ modules including real-time KDS, inventory, analytics, and delivery — using React, Node.js, PostgreSQL, Redis & Docker.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Socket.IO'],
    type: 'project',
    icon: '🚀',
  },
  {
    year: '2024',
    title: 'ResuMate-Pro — Resume Builder Platform',
    institution: 'Personal Project',
    description:
      'Developed a complete full-stack resume builder with user authentication, real-time preview, multi-template support, and PDF export — using PHP, MySQL, and Vanilla JavaScript.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    type: 'project',
    icon: '💼',
  },
  {
    year: '2023 – Present',
    title: 'Self-Learning & Skill Development',
    institution: 'Independent',
    description:
      'Continuously self-teaching modern full-stack technologies, AI/ML fundamentals, and software architecture. Built multiple projects to apply and deepen every concept learned.',
    tags: ['TypeScript', 'React', 'AI/ML', 'System Design', 'DSA'],
    type: 'learning',
    icon: '⚡',
  },
];

export const currentlyLearning = [
  { name: 'AI/ML with Python', progress: 45, icon: '🤖' },
  { name: 'Computer Vision (OpenCV)', progress: 55, icon: '👁' },
  { name: 'System Design (Advanced)', progress: 50, icon: '🏗' },
  { name: 'Cloud & DevOps (AWS)', progress: 30, icon: '☁️' },
  { name: 'Next.js & Full Stack Meta', progress: 60, icon: '⚛️' },
];
