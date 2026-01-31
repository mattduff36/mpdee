# Development Guide

## Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run typecheck` | Run TypeScript type checking |

## Project Structure

```
src/
├── app/               # Next.js App Router pages
│   ├── globals.css   # Global styles + Tailwind
│   ├── layout.tsx    # Root layout with SEO
│   └── page.tsx      # Home page
├── components/        # React components
│   ├── IntroLandingPage.tsx
│   ├── SplitScreenHero.tsx
│   └── StructuredData.tsx
├── shared/           # Shared utilities
│   ├── analytics.ts
│   ├── seo-utils.ts
│   └── types.ts
├── middleware.ts     # Security headers
└── types/            # TypeScript declarations
    └── global.d.ts   # Global type extensions

public/
├── images/           # Static images
└── favicon/          # Favicon assets
```

## Adding New Service Areas

Edit `src/components/SplitScreenHero.tsx` and modify the `serviceAreas` array:

```typescript
const serviceAreas: ServiceArea[] = [
  {
    title: 'YourService',
    description: 'Service description',
    url: 'https://service.mpdee.co.uk/',
    icon: '/images/your-logo.png',
    bgGradient: 'your-custom-class',
    textColor: 'text-gray-900',
    features: ['Feature 1', 'Feature 2'],
  },
];
```

## Styling

The site uses authentic backgrounds for each service area. Add custom backgrounds in `src/app/globals.css`:

```css
.your-custom-class {
  background: linear-gradient(...);
}
```

## Deployment

The site deploys automatically to Vercel on push to master branch. No environment variables required.
