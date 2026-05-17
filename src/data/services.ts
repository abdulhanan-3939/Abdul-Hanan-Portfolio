export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  glow: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description:
      'End-to-end web application development — from pixel-perfect frontends to scalable, secure backends. I build products that are fast, reliable, and production-ready.',
    icon: '🌐',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.25)',
    features: ['React & TypeScript frontends', 'Node.js & Express backends', 'Database design & optimization', 'RESTful API development', 'Real-time with Socket.IO'],
  },
  {
    id: 2,
    title: 'AI-Powered Applications',
    description:
      'Integrating AI and machine learning capabilities into web applications — from computer vision systems to intelligent automation tools that solve real problems.',
    icon: '🤖',
    color: '#22d3ee',
    glow: 'rgba(34, 211, 238, 0.25)',
    features: ['Computer Vision integration', 'Python-based AI tooling', 'OpenCV & MediaPipe apps', 'AI-enhanced web interfaces', 'Automation systems'],
  },
  {
    id: 3,
    title: 'Backend & API Architecture',
    description:
      'Designing robust, scalable backend systems with thoughtful architecture — authentication, caching, real-time sync, and clean database structures.',
    icon: '⚙️',
    color: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.25)',
    features: ['JWT authentication systems', 'Redis caching strategies', 'Scalable API design', 'PostgreSQL & MySQL', 'Docker containerization'],
  },
  {
    id: 4,
    title: 'Open to Any Tech Role',
    description:
      'Eager to contribute, learn, and grow in any technical capacity. Whether it\'s a frontend sprint, a backend challenge, or something entirely new — I\'m in.',
    icon: '🚀',
    color: '#34d399',
    glow: 'rgba(52, 211, 153, 0.25)',
    features: ['Fast learner & self-starter', 'Adaptable across tech stacks', 'Team collaboration', 'Problem-first thinking', 'Shipping real-world code'],
  },
];
