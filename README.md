# Abdul Hanan — Portfolio Website

A modern, cinematic, internship-focused developer portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## ✨ Features

- 🎨 **Premium dark UI** — matte graphite + deep purple + cyan glow palette
- 🌊 **Lenis smooth scrolling** — buttery-smooth cinematic scroll
- ✨ **Particle canvas** — interactive floating particles with node connections
- 🖱️ **Mouse glow effect** — ambient cursor glow following your pointer
- 🎬 **Framer Motion animations** — scroll reveals, stagger effects, entrance animations
- ⌨️ **Typewriter hero** — cycling roles with blinking cursor
- 📊 **Animated skill bars** — progress bars that animate on scroll into view
- 📅 **Alternating timeline** — desktop + mobile-responsive journey section
- 🃏 **Glassmorphism cards** — frosted glass project and skill cards
- 📱 **Fully responsive** — mobile, tablet, and desktop optimized
- 🔍 **SEO optimized** — proper meta tags, OG tags, semantic HTML

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Lenis | Smooth scrolling |
| Lucide React | Icons |

## 📦 Installation

```bash
# Clone or navigate to the project
cd d:/Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky animated navbar
│   │   └── Footer.tsx        # Minimal footer
│   ├── sections/
│   │   ├── Hero.tsx          # Typewriter + hero animations
│   │   ├── About.tsx         # Bio + animated stats
│   │   ├── Skills.tsx        # Skill bars by category
│   │   ├── Projects.tsx      # Project showcase cards
│   │   ├── Journey.tsx       # Timeline + Currently Learning
│   │   ├── Services.tsx      # Services offered
│   │   └── Contact.tsx       # Contact form + info
│   └── ui/
│       ├── ParticleCanvas.tsx # Floating particle system
│       ├── MouseGlow.tsx      # Mouse glow effect
│       └── ScrollReveal.tsx   # Reusable scroll animation
├── data/
│   ├── projects.ts           # Project data
│   ├── skills.ts             # Skills + categories
│   ├── education.ts          # Timeline + learning data
│   └── services.ts           # Services data
├── App.tsx                   # Root component + Lenis setup
├── main.tsx                  # Entry point
└── index.css                 # Design system + global styles
```

## 🛠️ Customization

All personal data is centralized in `src/data/`:

- **Add projects** → edit `src/data/projects.ts`
- **Add skills** → edit `src/data/skills.ts`
- **Update timeline** → edit `src/data/education.ts`
- **Change services** → edit `src/data/services.ts`
- **Update contact info** → edit `src/components/sections/Contact.tsx` and `Footer.tsx`

## 📤 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag and drop the /dist folder to netlify.com
```

### GitHub Pages
```bash
npm run build
# Push /dist to gh-pages branch
```

## 📧 Setting Up the Contact Form (EmailJS)

Messages from the contact form will be delivered directly to your **Gmail inbox** once you configure EmailJS (free, no backend needed).

### Step-by-step (5 minutes):

**1.** Go to [emailjs.com](https://www.emailjs.com) and create a **free account**

**2.** In the dashboard → **Email Services** → **Add New Service** → choose **Gmail** → connect your `abdulhananruru39@gmail.com`

**3.** Go to **Email Templates** → **Create New Template** and paste this:
```
Subject: New Portfolio Message: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

**4.** Copy your credentials from the EmailJS dashboard:
- **Service ID** → from Email Services page
- **Template ID** → from Email Templates page  
- **Public Key** → from Account → General tab

**5.** Open `.env.local` in your portfolio folder and fill in:
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxx
```

**6.** Restart the dev server — done! ✅ Messages now land in your Gmail.

> **Free plan**: 200 emails/month — more than enough for a portfolio.



- [ ] Add resume PDF link
- [ ] Add AI/Computer Vision projects
- [ ] Add certifications section when earned
- [ ] Connect contact form to EmailJS / Formspree

---

Built with ❤️ by **Abdul Hanan**
