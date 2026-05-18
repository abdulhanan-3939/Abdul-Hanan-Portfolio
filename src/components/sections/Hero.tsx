import { useEffect, useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, Download, ChevronDown, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Backend Architect',
  'AI/ML Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const target = roles[roleIdx];

    if (typing) {
      if (displayText.length < target.length) {
        timeout.current = setTimeout(() => {
          setDisplayText(target.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeout.current = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 35);
      } else {
        setRoleIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout.current);
  }, [displayText, typing, roleIdx]);

  const socials = [
    { icon: GithubIcon, href: 'https://github.com/abdulhanan-3939', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/abdul-hanan-15a95b380/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:abdulhananruru39@gmail.com', label: 'Email' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '820px' }}
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.5rem 1.25rem',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(52, 211, 153, 0.25)',
              borderRadius: '9999px',
              color: '#34d399',
              fontSize: '0.82rem',
              fontWeight: 600,
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.05em',
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#10b981',
                animation: 'pulse-glow 2s ease-in-out infinite',
                flexShrink: 0,
              }} />
              <Sparkles size={12} />
              Available for Internships · 2026
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '0.5rem',
              color: '#f5f0e8',
            }}>
              Abdul{' '}
              <span className="gradient-text">Hanan</span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div variants={itemVariants} style={{ marginBottom: '1.75rem' }}>
            <div style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              fontWeight: 600,
              color: '#a8a3b8',
              fontFamily: 'JetBrains Mono, monospace',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}>
              <span style={{ color: '#a855f7' }}>&gt; </span>
              <span style={{ color: '#f5f0e8' }}>{displayText}</span>
              <span className="cursor-blink" style={{ color: '#22d3ee', fontWeight: 300 }}>|</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={itemVariants} style={{ marginBottom: '2.5rem' }}>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#a8a3b8',
              lineHeight: 1.7,
              maxWidth: '640px',
            }}>
              Full Stack & AI Developer turning ambitious ideas into{' '}
              <span style={{ color: '#f5f0e8', fontWeight: 500 }}>production-ready reality</span>
              {' '}— where{' '}
              <span style={{ color: '#a855f7', fontWeight: 500 }}>clean code</span> meets{' '}
              <span style={{ color: '#22d3ee', fontWeight: 500 }}>creative thinking</span>.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3rem',
          }}>
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary"
            >
              <span>View My Work</span>
            </a>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-outline"
            >
              <Mail size={16} />
              Contact Me
            </a>
            <a
              href="#"
              onClick={e => e.preventDefault()}
              className="btn-outline"
              style={{ opacity: 0.7 }}
              title="Resume coming soon"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ color: '#6b6880', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace' }}>
              FIND ME ON
            </span>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '42px',
                    height: '42px',
                    background: 'rgba(18, 18, 31, 0.8)',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a8a3b8',
                    textDecoration: 'none',
                    backdropFilter: 'blur(10px)',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = '#a855f7';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168, 85, 247, 0.5)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = '#a8a3b8';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168, 85, 247, 0.2)';
                  }}
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#6b6880',
          cursor: 'pointer',
          zIndex: 2,
        }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.15em' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}