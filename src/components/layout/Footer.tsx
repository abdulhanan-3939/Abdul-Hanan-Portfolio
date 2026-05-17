import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

const navLinks = ['About', 'Skills', 'Projects', 'Journey', 'Services', 'Contact'];
const socials = [
  { icon: GithubIcon, href: 'https://github.com/abdulhanan-3939', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/abdul-hanan-15a95b380/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:abdulhananruru39@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      background: 'linear-gradient(180deg, transparent, rgba(10,10,15,0.8))',
      borderTop: '1px solid rgba(168, 85, 247, 0.1)',
      padding: '3rem 0 2rem',
      position: 'relative',
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #7c3aed, #22d3ee)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: 'white',
              }}>
                AH
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f5f0e8' }}>Abdul Hanan</span>
            </div>
            <p style={{ color: '#6b6880', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '220px' }}>
              Software Engineer. Full Stack & AI Developer. Currently seeking internship opportunities.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontWeight: 600, color: '#a8a3b8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: '#6b6880',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#a855f7')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b6880')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 600, color: '#a8a3b8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="mailto:abdulhananruru39@gmail.com" style={{ color: '#6b6880', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#22d3ee')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b6880')}>
                abdulhananruru39@gmail.com
              </a>
              <a href="https://github.com/abdulhanan-3939" target="_blank" rel="noreferrer" style={{ color: '#6b6880', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#a855f7')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b6880')}>
                github.com/abdulhanan-3939
              </a>
              <a href="https://www.linkedin.com/in/abdul-hanan-15a95b380/" target="_blank" rel="noreferrer" style={{ color: '#6b6880', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#818cf8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b6880')}>
                linkedin.com/in/abdul-hanan
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(168, 85, 247, 0.08)',
          paddingTop: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ color: '#6b6880', fontSize: '0.85rem' }}>
            © 2025 Abdul Hanan. Crafted with passion & precision.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {socials.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'rgba(124, 58, 237, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a8a3b8',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                <s.icon size={16} />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
              style={{
                width: '36px',
                height: '36px',
                background: 'linear-gradient(135deg, #7c3aed, #22d3ee)',
                border: 'none',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
