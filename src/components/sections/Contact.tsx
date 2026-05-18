import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import ScrollReveal from '../ui/ScrollReveal';


const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abdulhananruru39@gmail.com',
    href: 'mailto:abdulhananruru39@gmail.com',
    color: '#a855f7',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/abdulhanan-3939',
    href: 'https://github.com/abdulhanan-3939',
    color: '#22d3ee',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'in/abdul-hanan-15a95b380',
    href: 'https://www.linkedin.com/in/abdul-hanan-15a95b380/',
    color: '#818cf8',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Okara, Punjab, Pakistan',
    href: '#',
    color: '#34d399',
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    await new Promise(r => setTimeout(r, 800)); // brief send animation

    try {
      const subject = encodeURIComponent(formState.subject || 'Message from Portfolio');
      const body = encodeURIComponent(
        `Hi Abdul,\n\n${formState.message}\n\n---\nFrom: ${formState.name}\nEmail: ${formState.email}`
      );
      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=abdulhananruru39%40gmail.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, '_blank');
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };


  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      {/* Background */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '700px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" style={{ position: 'relative' }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#a855f7',
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              06 — Contact
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#f5f0e8',
              marginTop: '0.5rem',
              letterSpacing: '-0.02em',
            }}>
              Let's build something
              <br />
              <span className="gradient-text">great together</span>
            </h2>
            <p style={{ color: '#a8a3b8', marginTop: '1rem', maxWidth: '520px', lineHeight: 1.7, margin: '1rem auto 0' }}>
              Currently open to internship opportunities and collaborative projects. Drop me a message — I respond fast.
            </p>

            {/* Availability badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.5rem 1.25rem',
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(52,211,153,0.25)',
              borderRadius: '9999px',
              color: '#34d399',
              fontSize: '0.82rem',
              fontWeight: 600,
              marginTop: '1.5rem',
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#10b981',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }} />
              <Clock size={12} />
              Available for internship · Response within 24h
            </div>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}>
          {/* Left — Contact info */}
          <div>
            <ScrollReveal direction="left">
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontWeight: 700, color: '#f5f0e8', fontSize: '1.15rem', marginBottom: '1.5rem' }}>
                  Get in touch
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {contactInfo.map(info => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      whileHover={{ x: 4 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem 1.25rem',
                        borderRadius: '0.875rem',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        border: `1px solid rgba(168,85,247,0.1)`,
                        background: 'rgba(18,18,31,0.6)',
                        backdropFilter: 'blur(10px)',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = info.color + '40';
                        (e.currentTarget as HTMLElement).style.background = info.color + '08';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,85,247,0.1)';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(18,18,31,0.6)';
                      }}
                    >
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: info.color + '15',
                        border: `1px solid ${info.color}30`,
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: info.color,
                      }}>
                        <info.icon size={16} />
                      </div>
                      <div>
                        <div style={{ color: '#6b6880', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.15rem' }}>
                          {info.label}
                        </div>
                        <div style={{ color: '#f5f0e8', fontSize: '0.85rem', fontWeight: 500 }}>
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Quote */}
            <ScrollReveal delay={0.2} direction="left">
              <div style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(34,211,238,0.06))',
                border: '1px solid rgba(168,85,247,0.15)',
              }}>
                <p style={{
                  color: '#a8a3b8',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                }}>
                  "I'm not just looking for an internship — I'm looking for the opportunity to contribute real value, learn from the best, and grow into the engineer I'm becoming."
                </p>
                <div style={{ marginTop: '1rem', color: '#a855f7', fontWeight: 700, fontSize: '0.85rem' }}>
                  — Abdul Hanan
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <ScrollReveal direction="right">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                padding: '2rem',
                borderRadius: '1.5rem',
                background: 'rgba(18,18,31,0.7)',
                border: '1px solid rgba(168,85,247,0.12)',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                color: '#a855f7',
                fontSize: '0.8rem',
                marginBottom: '0.25rem',
              }}>
                {'// send_message.ts'}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#a8a3b8', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="contact-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#a8a3b8', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="contact-input"
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: '#a8a3b8', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="Internship Opportunity / Project Inquiry"
                  className="contact-input"
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#a8a3b8', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi Abdul, I'd love to discuss..."
                  rows={5}
                  className="contact-input"
                  style={{ resize: 'vertical', minHeight: '120px' }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  background: status === 'success'
                    ? 'linear-gradient(135deg, #10b981, #34d399)'
                    : status === 'error'
                    ? 'linear-gradient(135deg, #ef4444, #f87171)'
                    : 'linear-gradient(135deg, #7c3aed, #6b21a8)',
                  border: 'none',
                  borderRadius: '0.75rem',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: status === 'idle' ? 'pointer' : 'default',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontFamily: 'Outfit, sans-serif',
                  transition: 'all 0.3s ease',
                  boxShadow: status === 'idle' ? '0 0 30px rgba(124,58,237,0.3)' : 'none',
                }}
              >
                {status === 'idle' && <><Send size={16} /> Send Message</>}
                {status === 'sending' && (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}
                    />
                    Sending...
                  </>
                )}
                {status === 'success' && <><CheckCircle2 size={16} /> Message Sent!</>}
                {status === 'error' && <><AlertCircle size={16} /> Try Again</>}
              </motion.button>

              <p style={{ color: '#6b6880', fontSize: '0.75rem', textAlign: 'center' }}>
                I typically respond within 24 hours.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
