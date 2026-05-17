export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  glow: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '{ }',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.3)',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 82 },
      { name: 'Java', level: 70 },
      { name: 'C++', level: 65 },
      { name: 'PHP', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    icon: '◈',
    color: '#22d3ee',
    glow: 'rgba(34, 211, 238, 0.3)',
    skills: [
      { name: 'React 18', level: 88 },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 87 },
      { name: 'Framer Motion', level: 80 },
      { name: 'TypeScript', level: 85 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙',
    color: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.3)',
    skills: [
      { name: 'Node.js', level: 87 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Socket.IO', level: 80 },
      { name: 'JWT / Auth', level: 85 },
      { name: 'PHP', level: 75 },
    ],
  },
  {
    title: 'Database',
    icon: '◉',
    color: '#34d399',
    glow: 'rgba(52, 211, 153, 0.3)',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'Prisma ORM', level: 83 },
      { name: 'Redis', level: 75 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    title: 'AI / ML',
    icon: '◎',
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.3)',
    skills: [
      { name: 'Python for AI', level: 78 },
      { name: 'OpenCV', level: 70 },
      { name: 'Computer Vision', level: 68 },
      { name: 'MediaPipe', level: 65 },
      { name: 'TensorFlow', level: 60 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: '◈',
    color: '#f472b6',
    glow: 'rgba(244, 114, 182, 0.3)',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 72 },
      { name: 'VS Code', level: 95 },
      { name: 'Winston Logger', level: 78 },
      { name: 'PDFKit', level: 75 },
    ],
  },
];

export const coreConcepts = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'System Design',
  'Database Optimization',
  'API Architecture',
  'Real-Time Systems',
  'Authentication & Security',
  'Scalable Backend Design',
];
