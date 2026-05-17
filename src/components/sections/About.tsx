import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import { Code2, Brain, Rocket, Target } from 'lucide-react';

interface StatProps { end: number; label: string; suffix?: string; color: string }

function AnimatedStat({ end, label, suffix = '+', color }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800,
        color,
        lineHeight: 1,
        marginBottom: '0.5rem',
        fontFamily: 'JetBrains Mono, monospace',
      }}>
        {count}{suffix}
      </div>
      <div style={{ color: '#6b6880', fontSize: '0.85rem', fontWeight: 500 }}>{label}</div>
    </div>
  );
}

const passions = [
  { icon: Code2, title: 'Clean Code', desc: 'Writing readable, maintainable, and scalable code is non-negotiable for me.', color: '#a855f7' },
  { icon: Brain, title: 'AI Exploration', desc: 'Fascinated by machine learning and its potential to transform industries.', color: '#22d3ee' },
  { icon: Rocket, title: 'Real-World Impact', desc: 'I build systems that solve actual problems — not just portfolio pieces.', color: '#34d399' },
  { icon: Target, title: 'Continuous Growth', desc: 'Every project teaches me something new. I never stop learning.', color: '#f59e0b' },
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container-custom">
        {/* Section header */}
        <ScrollReveal>
          <div style={{ marginBottom: '4rem' }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#a855f7',
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              01 — About
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#f5f0e8',
              marginTop: '0.5rem',
              letterSpacing: '-0.02em',
            }}>
              The person behind
              <br />
              <span className="gradient-text">the code</span>
            </h2>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left — Story */}
          <div>
            <ScrollReveal delay={0.1}>
              <div style={{
                padding: '2.5rem',
                borderRadius: '1.25rem',
                position: 'relative',
                overflow: 'hidden',
              }}
                className="glass-card"
              >
                {/* Accent top bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #7c3aed, #22d3ee, #10b981)',
                }} />

                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  color: '#a855f7',
                  fontSize: '0.8rem',
                  marginBottom: '1.25rem',
                  letterSpacing: '0.1em',
                }}>
                  {'// bio.ts'}
                </div>

                <p style={{ color: '#a8a3b8', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  I'm a <span style={{ color: '#f5f0e8', fontWeight: 600 }}>2nd year BS Software Engineering student</span> at COMSATS University Islamabad (Sahiwal Campus) with a passion for building intelligent, scalable, and impactful digital systems.
                </p>
                <p style={{ color: '#a8a3b8', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  I specialize in <span style={{ color: '#a855f7', fontWeight: 500 }}>full-stack web development</span> and am actively expanding into <span style={{ color: '#22d3ee', fontWeight: 500 }}>AI/ML and computer vision</span>. My projects aren't exercises — they're production-grade systems built to solve real problems.
                </p>
                <p style={{ color: '#a8a3b8', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  I'm analytical, ambitious, and creative — seeking an <span style={{ color: '#34d399', fontWeight: 500 }}>internship</span> where I can contribute meaningfully, learn from exceptional engineers, and grow fast in any technical domain.
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.75rem' }}>
                  {['Open to Intern', 'Fast Learner', 'Islamabad, Pakistan', 'Full Time Student'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Stats + Passions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Stats */}
            <ScrollReveal delay={0.2}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}>
                {[
                  { end: 2, label: 'Years Learning', suffix: '+', color: '#a855f7' },
                  { end: 5, label: 'Projects Built', suffix: '+', color: '#22d3ee' },
                  { end: 15, label: 'Technologies', suffix: '+', color: '#34d399' },
                  { end: 1000, label: 'Hours Coded', suffix: '+', color: '#f59e0b' },
                ].map(stat => (
                  <div key={stat.label} style={{ padding: '1.5rem', textAlign: 'center', borderRadius: '1rem' }} className="glass-card">
                    <AnimatedStat {...stat} />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Passions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {passions.map((p, i) => (
                <ScrollReveal key={p.title} delay={0.1 * i}>
                  <div
                    className="glass-card glass-card-hover"
                    style={{ padding: '1.25rem', borderRadius: '1rem', cursor: 'default' }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      background: p.color + '20',
                      border: `1px solid ${p.color}30`,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.75rem',
                    }}>
                      <p.icon size={18} color={p.color} />
                    </div>
                    <h4 style={{ fontWeight: 700, color: '#f5f0e8', fontSize: '0.9rem', marginBottom: '0.4rem' }}>{p.title}</h4>
                    <p style={{ color: '#6b6880', fontSize: '0.78rem', lineHeight: 1.5 }}>{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
