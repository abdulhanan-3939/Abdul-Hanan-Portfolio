import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight, Star, Zap, Lock } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { projects } from '../../data/projects';
import ScrollReveal from '../ui/ScrollReveal';

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isComingSoon = project.title === 'Coming Soon';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '1.5rem',
        overflow: 'hidden',
        position: 'relative',
        background: 'rgba(18, 18, 31, 0.8)',
        border: `1px solid ${hovered ? project.accent + '40' : 'rgba(168, 85, 247, 0.1)'}`,
        backdropFilter: 'blur(20px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: hovered
          ? `0 30px 80px ${project.accent}20, 0 0 0 1px ${project.accent}20`
          : '0 8px 32px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Visual header */}
      <div style={{
        height: '200px',
        background: `linear-gradient(135deg, ${project.gradient.replace('from-', '').replace(/\/\d+/g, '')})`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, rgba(18,18,31,0.3), rgba(18,18,31,0.6))`,
        }} />

        {/* Abstract pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 30% 50%, ${project.accent}20 0%, transparent 50%), 
                             radial-gradient(circle at 70% 30%, rgba(34,211,238,0.15) 0%, transparent 50%)`,
        }} />

        {/* Project number */}
        <div style={{
          position: 'absolute',
          top: '1.25rem',
          left: '1.25rem',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.75rem',
          color: project.accent,
          background: project.accent + '15',
          border: `1px solid ${project.accent}30`,
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
        }}>
          {project.category}
        </div>

        {/* Featured badge */}
        {index === 0 && (
          <div style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: '#f59e0b',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.72rem',
            fontWeight: 600,
          }}>
            <Star size={10} fill="currentColor" />
            Featured
          </div>
        )}

        {/* Center display */}
        <motion.div
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}
        >
          {isComingSoon ? (
            <div style={{
              width: '64px',
              height: '64px',
              background: `${project.accent}20`,
              border: `2px solid ${project.accent}40`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}>
              <Lock size={24} color={project.accent} />
            </div>
          ) : (
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '3.5rem',
              fontWeight: 900,
              color: project.accent + 'cc',
              textShadow: `0 0 40px ${project.accent}60`,
              letterSpacing: '-0.05em',
            }}>
              {project.title.split(' ').map(w => w[0]).join('').slice(0, 3)}
            </div>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.75rem' }}>
        {/* Title */}
        <h3 style={{
          fontWeight: 800,
          color: '#f5f0e8',
          fontSize: '1.25rem',
          marginBottom: '0.4rem',
          letterSpacing: '-0.02em',
        }}>
          {project.title}
        </h3>
        <p style={{
          color: project.accent,
          fontSize: '0.82rem',
          fontWeight: 600,
          fontFamily: 'JetBrains Mono, monospace',
          marginBottom: '1rem',
        }}>
          {project.tagline}
        </p>

        {/* Description */}
        <p style={{
          color: '#a8a3b8',
          fontSize: '0.9rem',
          lineHeight: 1.7,
          marginBottom: '1.25rem',
        }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.techStack.slice(0, 6).map(tech => (
            <span key={tech} style={{
              padding: '0.2rem 0.6rem',
              background: project.accent + '12',
              border: `1px solid ${project.accent}25`,
              borderRadius: '6px',
              color: project.accent,
              fontSize: '0.72rem',
              fontWeight: 500,
              fontFamily: 'JetBrains Mono, monospace',
            }}>
              {tech}
            </span>
          ))}
          {project.techStack.length > 6 && (
            <span style={{
              padding: '0.2rem 0.6rem',
              background: 'rgba(168,85,247,0.1)',
              border: '1px solid rgba(168,85,247,0.2)',
              borderRadius: '6px',
              color: '#a855f7',
              fontSize: '0.72rem',
              fontWeight: 500,
            }}>
              +{project.techStack.length - 6}
            </span>
          )}
        </div>

        {/* Expandable features */}
        {!isComingSoon && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                background: 'none',
                border: 'none',
                color: '#6b6880',
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: 0,
                fontFamily: 'Outfit, sans-serif',
                marginBottom: '1.25rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = project.accent)}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b6880')}
            >
              <Zap size={12} />
              {expanded ? 'Hide' : 'Show'} key features
              <motion.span
                animate={{ rotate: expanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'inline-flex' }}
              >
                <ChevronRight size={12} />
              </motion.span>
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden', marginBottom: '1.25rem' }}
                >
                  <div style={{
                    background: 'rgba(18,18,31,0.6)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    border: `1px solid ${project.accent}15`,
                  }}>
                    {project.features.map(f => (
                      <div key={f} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.35rem 0',
                        color: '#a8a3b8',
                        fontSize: '0.82rem',
                      }}>
                        <span style={{ color: project.accent, flexShrink: 0 }}>▸</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {!isComingSoon ? (
            <>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 1.25rem',
                  background: 'rgba(124,58,237,0.12)',
                  border: '1px solid rgba(168,85,247,0.25)',
                  borderRadius: '0.6rem',
                  color: '#c084fc',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  flex: 1,
                  justifyContent: 'center',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.25)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,85,247,0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.12)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,85,247,0.25)';
                }}
              >
                <GithubIcon size={14} />
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.6rem 1.25rem',
                    background: project.accent + '15',
                    border: `1px solid ${project.accent}35`,
                    borderRadius: '0.6rem',
                    color: project.accent,
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    flex: 1,
                    justifyContent: 'center',
                  }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </>
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#6b6880',
              fontSize: '0.82rem',
              fontFamily: 'JetBrains Mono, monospace',
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#f59e0b',
                animation: 'pulse-glow 2s infinite',
              }} />
              In development — coming soon
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-100px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" style={{ position: 'relative' }}>
        <ScrollReveal>
          <div style={{ marginBottom: '4rem' }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#34d399',
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              03 — Projects
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#f5f0e8',
              marginTop: '0.5rem',
              letterSpacing: '-0.02em',
            }}>
              Things I've shipped
              <br />
              <span className="gradient-text">into the real world</span>
            </h2>
            <p style={{ color: '#a8a3b8', marginTop: '1rem', maxWidth: '540px', lineHeight: 1.7 }}>
              Production-grade systems built with care, precision, and a lot of late nights. Each project solves a real problem.
            </p>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More coming soon */}
        <ScrollReveal delay={0.3}>
          <div style={{
            marginTop: '2rem',
            textAlign: 'center',
            padding: '2rem',
            borderRadius: '1rem',
            background: 'rgba(18,18,31,0.5)',
            border: '1px dashed rgba(168,85,247,0.2)',
          }}>
            <p style={{ color: '#6b6880', fontSize: '0.9rem' }}>
              🚧 More projects in progress — AI/ML & Computer Vision projects coming soon
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
