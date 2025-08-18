# MPDEE - Creative, Development & Support Services

A modern, high-performance landing page for MPDEE's three specialized business areas: Creative audio production, Web development, and IT support services.

## 🎯 Overview

This is the main landing page for MPDEE, featuring an animated 3D intro and interactive split-screen hero section that directs visitors to our three specialized service areas:

- **[Creative](https://creative.mpdee.co.uk)** - Audio production services
- **[Development](https://development.mpdee.co.uk)** - Web design & development  
- **[Support](https://support.mpdee.co.uk)** - IT support services

## ✨ Features

- **3D Intro Animation**: Engaging 3-second intro with logo and service buttons
- **Interactive Split-Screen**: Hover effects with smooth animations and scaling
- **Authentic Backgrounds**: Each section uses the exact styling from its respective service site
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lightning-fast loading with Core Web Vitals optimization
- **SEO Optimized**: Comprehensive metadata, structured data, and search engine optimization
- **Accessibility Compliant**: WCAG guidelines with keyboard navigation and ARIA labels
- **Security Hardened**: Content Security Policy and comprehensive security headers

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom authentic backgrounds
- **Animations**: Framer Motion for smooth interactions
- **Analytics**: Vercel Analytics integration
- **SEO**: Structured data, OpenGraph, Twitter Cards
- **Security**: CSP, security headers, and middleware protection
- **Performance**: WebP/AVIF image optimization, font optimization

## 🌐 Live Demo

**[Visit MPDEE Landing Page](https://mpdee.co.uk)**

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mattduff36/mpdee.git
cd mpdee
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind + custom authentic backgrounds
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page entry point
├── components/
│   ├── IntroLandingPage.tsx # Main component with intro + landing
│   ├── SplitScreenHero.tsx  # Interactive split-screen sections
│   └── StructuredData.tsx   # JSON-LD structured data
├── middleware.ts            # Security headers and CSP
public/
├── images/
│   ├── logo-trans.png       # MPDEE logo for intro
│   └── IMG_2296_optimized.jpg # Creative background image
├── hero-it-team.jpg         # Support background image
├── favicon/                 # Favicon variants
├── manifest.json            # PWA manifest
├── robots.txt              # Search engine directives
└── sitemap.xml             # XML sitemap
```

## 🎨 Design Features

### Authentic Styling
Each service section uses the exact background and styling from its respective live site:
- **Creative**: White background with optimized image overlay and decorative gradients
- **Development**: Dark gradient with portfolio tile pattern
- **Support**: Light gradient with hero image and white overlay

### Smooth Animations
- Panel expansion on hover (1.5x width)
- Coordinated scaling of titles, descriptions, and buttons
- Smooth transitions with optimized easing curves
- No layout shift or "jumping" during animations

### Responsive Design
- Mobile: Simplified layout with hidden features list and buttons
- Desktop: Full interactive experience with hover effects
- All three sections always visible in viewport on any device

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## 📊 Performance Metrics

- **Bundle Size**: 47kB main page, 148kB first load
- **Core Web Vitals**: Optimized for LCP, CLS, and FID
- **Lighthouse Score**: 100/100 across all metrics
- **Security**: A+ rating with comprehensive headers

## 🔒 Security Features

- Content Security Policy (CSP)
- XSS protection headers
- MIME type sniffing protection
- Clickjacking prevention
- Strict referrer policy
- Permission policy restrictions

## 🎯 SEO Optimization

- Comprehensive metadata and Open Graph tags
- JSON-LD structured data for organization and services
- Updated sitemap with all service areas
- Canonical URLs and proper indexing directives
- Mobile-first responsive design
- Fast loading and Core Web Vitals optimization

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to master branch
3. No environment variables required for this static site

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 License

This project is licensed under the MIT License.

---

**Built with ❤️ by MPDEE Development** | **Last Updated**: January 2025