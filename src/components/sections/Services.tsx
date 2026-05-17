import { motion } from 'framer-motion';
import { services } from '../../data/services';
import ScrollReveal from '../ui/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="glass-card glass-card-hover"
      style={{
        borderRadius: '1.5rem',
        padding: '2rem',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '-30px',
        right: '-30px',
        width: '120px',
        height: '120px',
        background: `radial-gradient(circle, ${service.color}15, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Icon */}
      <div style={{
        width: '54px',
        height: '54px',
        background: service.color + '15',
        border: `1px solid ${service.color}30`,
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        marginBottom: '1.25rem',
        boxShadow: `0 0 20px ${service.color}20`,
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontWeight: 800,
        color: '#f5f0e8',
        fontSize: '1.1rem',
        marginBottom: '0.75rem',
        letterSpacing: '-0.01em',
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{
        color: '#a8a3b8',
        fontSize: '0.88rem',
        lineHeight: 1.7,
        marginBottom: '1.5rem',
      }}>
        {service.description}
      </p>

      {/* Features list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {service.features.map(f => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <CheckCircle2 size={13} color={service.color} style={{ flexShrink: 0 }} />
            <span style={{ color: '#d4cfe8', fontSize: '0.82rem' }}>{f}</span>
          </div>
        ))}
      </div>

      {/* Number */}
      <div style={{
        position: 'absolute',
        bottom: '1.25rem',
        right: '1.5rem',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '2.5rem',
        fontWeight: 900,
        color: service.color + '12',
        lineHeight: 1,
        userSelect: 'none',
      }}>
        {String(service.id).padStart(2, '0')}
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-50px',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)',
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
              05 — Services
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#f5f0e8',
              marginTop: '0.5rem',
              letterSpacing: '-0.02em',
            }}>
              What I can build
              <br />
              <span className="gradient-text">for you</span>
            </h2>
            <p style={{ color: '#a8a3b8', marginTop: '1rem', maxWidth: '520px', lineHeight: 1.7 }}>
              From full-stack applications to AI-powered tools — I deliver real solutions. And I'm hungry to learn anything new along the way.
            </p>
          </div>
        </ScrollReveal>

        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* CTA strip */}
        <ScrollReveal delay={0.3}>
          <div style={{
            marginTop: '3rem',
            padding: '2rem 2.5rem',
            borderRadius: '1.25rem',
            background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(34,211,238,0.08))',
            border: '1px solid rgba(168,85,247,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}>
            <div>
              <h3 style={{ fontWeight: 700, color: '#f5f0e8', fontSize: '1.15rem', marginBottom: '0.35rem' }}>
                Got a project in mind?
              </h3>
              <p style={{ color: '#a8a3b8', fontSize: '0.88rem' }}>
                I'm open to internships, freelance work, and collaborative projects. Let's build something great.
              </p>
            </div>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary"
              style={{ whiteSpace: 'nowrap' }}
            >
              <span>Let's Talk</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
