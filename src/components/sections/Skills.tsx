import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories, coreConcepts } from '../../data/skills';
import ScrollReveal from '../ui/ScrollReveal';

function SkillBar({ name, level, color, inView }: { name: string; level: number; color: string; inView: boolean }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
        <span style={{ color: '#d4cfe8', fontSize: '0.875rem', fontWeight: 500 }}>{name}</span>
        <span style={{ color: color, fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? level / 100 : 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="glass-card glass-card-hover"
      style={{
        borderRadius: '1.25rem',
        padding: '1.75rem',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: `linear-gradient(90deg, transparent, ${category.color}, transparent)`,
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: category.color + '15',
          border: `1px solid ${category.color}30`,
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1rem',
          color: category.color,
          fontWeight: 700,
          fontFamily: 'JetBrains Mono, monospace',
          flexShrink: 0,
        }}>
          {category.icon}
        </div>
        <h3 style={{ fontWeight: 700, color: '#f5f0e8', fontSize: '1rem' }}>{category.title}</h3>
      </div>

      {/* Skill bars */}
      <div>
        {category.skills.map(skill => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={category.color}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      {/* Background gradient accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '600px',
        background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" style={{ position: 'relative' }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: '4rem' }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#22d3ee',
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              02 — Skills
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#f5f0e8',
              marginTop: '0.5rem',
              letterSpacing: '-0.02em',
            }}>
              Tools I craft with
              <br />
              <span className="gradient-text">every single day</span>
            </h2>
            <p style={{ color: '#a8a3b8', marginTop: '1rem', maxWidth: '500px', lineHeight: 1.7 }}>
              A continuously growing tech toolkit — built through real projects, not just tutorials.
            </p>
          </div>
        </ScrollReveal>

        {/* Skill cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>

        {/* Core concepts */}
        <ScrollReveal delay={0.2}>
          <div className="glass-card" style={{
            borderRadius: '1.25rem',
            padding: '2rem',
          }}>
            <h3 style={{
              fontWeight: 700,
              color: '#f5f0e8',
              fontSize: '1.05rem',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #a855f7, #22d3ee)',
                display: 'inline-block',
              }} />
              Core CS Concepts
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {coreConcepts.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="tag"
                  style={{ fontSize: '0.82rem' }}
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
