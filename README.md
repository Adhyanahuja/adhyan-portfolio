# Adhyan Ahuja — Portfolio

A premium dark-themed personal portfolio showcasing my professional journey, research, and skills.

**Live**: [adhyan-portfolio.vercel.app](https://adhyan-portfolio.vercel.app)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Styling** | Tailwind CSS v4 with CSS custom properties |
| **Animations** | Framer Motion (scroll-triggered, spring physics, staggered entrances) |
| **Smooth Scroll** | Lenis |
| **Fonts** | Inter, Space Grotesk, Caveat (handwritten) |
| **Deployment** | Vercel |

## Features

### Visual Design
- Dark cinema aesthetic with glassmorphism cards and gradient mesh backgrounds
- Gradient cursor tracking that responds to mouse movement
- Fully responsive design across desktop, tablet, and mobile

### Interactive Elements
- **My Arsenal** — an animated sticky notes collage of skills, with hover pop-up effects and color-clustered categories (blue/purple/indigo/slate palette)
- **Impact Timeline** — interactive career timeline with animated number counters for key metrics at each role
- **Magnetic Buttons** — CTA buttons with subtle magnetic pull effect on hover
- **Company Logo Marquee** — scrolling banner featuring D.E. Shaw, Piramal, ITC, CSIR, and more

### Content Sections
- Hero with photo, intro, and skills collage
- About / My Story with cinematic image reveals
- Professional experience with detailed role descriptions
- Publications section featuring Springer & IEEE research papers
- Leadership and extracurricular highlights
- Contact with social links (LinkedIn, GitHub, Google Scholar, Instagram)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/            # Next.js App Router pages and layout
├── components/
│   ├── layout/     # Header, Footer
│   ├── sections/   # Hero, About, ImpactTimeline, Publications, Contact, etc.
│   └── ui/         # Reusable components (MagneticButton, NumberCounter, StickyNotesArsenal, etc.)
├── data/           # Static data (experience, skills, publications)
└── lib/            # Animation variants and utilities
```
