import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { timeline, currentlyLearning } from '../../data/education';
import ScrollReveal from '../ui/ScrollReveal';

function TimelineCard({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const isLeft = index % 2 === 0;

  const colors = {
    education: { color: '#a855f7', bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.3)' },
    project: { color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.3)' },
    learning: { color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.3)' },
  };
  const style = colors[item.type];

  return (
    <div ref={ref} style={{
      display: 'grid',
      gridTemplateColumns: '1fr 60px 1fr',
      alignItems: 'start',
      gap: '0',
      marginBottom: '3rem',
      position: 'relative',
    }}>
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ paddingRight: '2rem', textAlign: 'right', display: isLeft ? 'block' : 'none' }}
      >
        <TimelineContent item={item} style={style} />
      </motion.div>
      {!isLeft && <div />}

      {/* Center dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: style.bg,
            border: `2px solid ${style.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
            flexShrink: 0,
            boxShadow: `0 0 20px ${style.color}30`,
            zIndex: 1,
            position: 'relative',
          }}
        >
          {item.icon}
        </motion.div>
        <div style={{
          width: '2px',
          flex: 1,
          minHeight: '60px',
          background: `linear-gradient(180deg, ${style.color}40, transparent)`,
          marginTop: '4px',
        }} />
      </div>

      {/* Right content */}
      {isLeft ? <div /> : (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ paddingLeft: '2rem' }}
        >
          <TimelineContent item={item} style={style} />
        </motion.div>
      )}
    </div>
  );
}

function TimelineContent({ item, style }: { item: typeof timeline[0]; style: { color: string; bg: string; border: string } }) {
  return (
    <div
      className="glass-card glass-card-hover"
      style={{ borderRadius: '1rem', padding: '1.5rem', textAlign: 'left', cursor: 'default' }}
    >
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.72rem',
        color: style.color,
        fontWeight: 600,
        marginBottom: '0.5rem',
        letterSpacing: '0.05em',
      }}>
        {item.year}
      </div>
      <h3 style={{ fontWeight: 700, color: '#f5f0e8', fontSize: '1rem', marginBottom: '0.25rem' }}>
        {item.title}
      </h3>
      <p style={{ color: style.color, fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.75rem' }}>
        {item.institution}
      </p>
      <p style={{ color: '#a8a3b8', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>
        {item.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {item.tags.map(tag => (
          <span key={tag} style={{
            padding: '0.2rem 0.6rem',
            background: style.bg,
            border: `1px solid ${style.border}`,
            borderRadius: '6px',
            color: style.color,
            fontSize: '0.7rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 500,
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// Mobile timeline (stacked)
function MobileTimeline() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {timeline.map((item, i) => {
        const colors = {
          education: { color: '#a855f7', bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.3)' },
          project: { color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.3)' },
          learning: { color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.3)' },
        };
        const style = colors[item.type];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: style.bg,
              border: `2px solid ${style.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              flexShrink: 0,
            }}>
              {item.icon}
            </div>
            <div className="glass-card" style={{ flex: 1, borderRadius: '1rem', padding: '1.25rem' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: style.color, marginBottom: '0.4rem' }}>
                {item.year}
              </div>
              <h3 style={{ fontWeight: 700, color: '#f5f0e8', fontSize: '0.95rem', marginBottom: '0.2rem' }}>{item.title}</h3>
              <p style={{ color: style.color, fontSize: '0.78rem', marginBottom: '0.6rem' }}>{item.institution}</p>
              <p style={{ color: '#a8a3b8', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="section-padding" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '-100px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" style={{ position: 'relative' }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: '4rem' }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#a855f7',
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              04 — Journey
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#f5f0e8',
              marginTop: '0.5rem',
              letterSpacing: '-0.02em',
            }}>
              My story so far
              <br />
              <span className="gradient-text">always growing</span>
            </h2>
            <p style={{ color: '#a8a3b8', marginTop: '1rem', maxWidth: '520px', lineHeight: 1.7 }}>
              Two years of self-driven learning, real-world building, and relentless growth. This is just the beginning.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop timeline */}
        <div className="desktop-timeline">
          {timeline.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="mobile-timeline">
          <MobileTimeline />
        </div>

        {/* Currently Learning */}
        <ScrollReveal delay={0.2}>
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{
              fontWeight: 700,
              color: '#f5f0e8',
              fontSize: '1.3rem',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                color: '#f59e0b',
                fontSize: '0.8rem',
                background: 'rgba(245,158,11,0.1)',
                border: '1px solid rgba(245,158,11,0.25)',
                padding: '0.2rem 0.6rem',
                borderRadius: '6px',
              }}>
                LIVE
              </span>
              Currently Learning
            </h3>
            <p style={{ color: '#6b6880', fontSize: '0.88rem', marginBottom: '2rem' }}>
              Things I'm actively studying and building with right now
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem',
            }}>
              {currentlyLearning.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card"
                  style={{ borderRadius: '1rem', padding: '1.25rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                    <span style={{ color: '#f5f0e8', fontWeight: 600, fontSize: '0.9rem' }}>{item.name}</span>
                    <span style={{
                      marginLeft: 'auto',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.75rem',
                      color: '#a855f7',
                      fontWeight: 600,
                    }}>
                      {item.progress}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: item.progress / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1 + 0.3 }}
                      style={{
                        height: '100%',
                        borderRadius: '9999px',
                        background: 'linear-gradient(90deg, #a855f7, #22d3ee)',
                        transformOrigin: 'left',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .desktop-timeline { display: block; }
        .mobile-timeline { display: none; }
        @media (max-width: 768px) {
          .desktop-timeline { display: none; }
          .mobile-timeline { display: block; }
        }
      `}</style>
    </section>
  );
}
