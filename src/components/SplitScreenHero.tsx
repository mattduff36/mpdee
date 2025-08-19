'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Global function declaration for analytics tracking
declare global {
  interface Window {
    trackServiceReferral?: (service: string) => void;
  }
}

interface ServiceArea {
  title: string;
  description: string;
  url: string;
  icon: string;
  bgGradient: string;
  textColor: string;
  features: string[];
}

const serviceAreas: ServiceArea[] = [
  {
    title: 'Creative',
    description: 'Audio Production Services',
    url: 'https://creative.mpdee.co.uk/',
    icon: '/images/MPDEE-Creative-logo.png',
    bgGradient: 'creative-authentic',
    textColor: 'text-gray-900',
    features: [
      'Radio Commercial Production',
      'Audio Imaging',
      'Event Recording',
      'Sound Design',
    ],
  },
  {
    title: 'Development',
    description: 'Web Design & Development',
    url: 'https://development.mpdee.co.uk/',
    icon: '/images/MPDEE-Development-logo-trans.png',
    bgGradient: 'development-authentic',
    textColor: 'text-white',
    features: [
      'Web Development',
      'Custom Applications',
      'E-commerce Solutions',
      'Digital Platforms',
    ],
  },
  {
    title: 'Support',
    description: 'IT Support Services',
    url: 'https://support.mpdee.co.uk/',
    icon: '/images/MPDEE-Support-logo.png',
    bgGradient: 'support-authentic',
    textColor: 'text-gray-900',
    features: [
      'Remote Support',
      'On-Site Support',
      'Hardware Services',
      'Software Solutions',
    ],
  },
];

export default function SplitScreenHero() {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [viewportHeight, setViewportHeight] = useState('100dvh');
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Set initial viewport height
    const setHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      setViewportHeight(`${window.innerHeight}px`);
    };

    setHeight();

    // Update on resize and orientation change
    window.addEventListener('resize', setHeight);
    window.addEventListener('orientationchange', setHeight);

    return () => {
      window.removeEventListener('resize', setHeight);
      window.removeEventListener('orientationchange', setHeight);
    };
  }, []);

  // Demo animation for mobile - cycles through sections
  useEffect(() => {
    if (!mounted) return;

    // Only run demo on mobile devices
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (!isMobile) return;

    // Start demo as intro animation begins to fade out (around 2.5 seconds)
    const introDelay = 2500;
    const demoDelay = introDelay + 500; // 0.5 seconds after intro starts fading

    const demoTimer = setTimeout(() => {
      setIsDemoMode(true);

      // Cycle through each section for 0.5 seconds each
      const sections = [0, 1, 2];
      let currentIndex = 0;

      const cycleSections = () => {
        if (currentIndex < sections.length) {
          setHoveredPanel(sections[currentIndex]);
          currentIndex++;

          setTimeout(() => {
            if (currentIndex >= sections.length) {
              // Demo complete, reset
              setHoveredPanel(null);
              setIsDemoMode(false);
            } else {
              cycleSections();
            }
          }, 500); // 0.5 seconds per section
        }
      };

      cycleSections();
    }, demoDelay);

    return () => {
      clearTimeout(demoTimer);
      setIsDemoMode(false);
      setHoveredPanel(null);
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
    );
  }

  return (
    <div
      className="viewport-responsive flex flex-col"
      style={{
        height: viewportHeight,
        minHeight: viewportHeight,
        maxHeight: viewportHeight,
        overflow: 'hidden',
      }}
      data-demo-mode={isDemoMode ? 'true' : 'false'}
    >
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Split Screen Main Content */}
      <main
        id="main-content"
        className="flex-1 flex flex-col lg:flex-row"
        role="main"
      >
        {serviceAreas.map((area, index) => (
          <motion.div
            key={area.title}
            className={`relative overflow-hidden cursor-pointer flex-1 ${area.bgGradient}`}
            style={{ willChange: 'flex' }}
            animate={{
              flex: hoveredPanel === index ? 1.5 : 1,
            }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            onHoverStart={() => {
              // Only enable hover on desktop/larger screens or during demo mode
              if (
                typeof window !== 'undefined' &&
                (window.innerWidth > 768 || isDemoMode)
              ) {
                setHoveredPanel(index);
              }
            }}
            onHoverEnd={() => {
              // Only enable hover on desktop/larger screens or during demo mode
              if (
                typeof window !== 'undefined' &&
                (window.innerWidth > 768 || isDemoMode)
              ) {
                setHoveredPanel(null);
              }
            }}
            onClick={() => {
              // Track service referral
              if (
                typeof window !== 'undefined' &&
                window.trackServiceReferral
              ) {
                window.trackServiceReferral(area.title.toLowerCase());
              }
              window.open(area.url, '_blank');
            }}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Track service referral
                if (
                  typeof window !== 'undefined' &&
                  window.trackServiceReferral
                ) {
                  window.trackServiceReferral(area.title.toLowerCase());
                }
                window.open(area.url, '_blank');
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Visit ${area.title} services - ${area.description}`}
          >
            {/* Content */}
            <motion.div
              className={`relative z-10 h-full flex flex-col justify-center items-center ${area.textColor}`}
              style={{
                padding: 'clamp(0.5rem, 2vh, 2rem) clamp(0.25rem, 1vw, 2rem)',
              }}
              animate={{
                scale:
                  hoveredPanel !== null &&
                  hoveredPanel !== index &&
                  typeof window !== 'undefined' &&
                  (window.innerWidth > 768 || isDemoMode)
                    ? 0.96
                    : 1,
              }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="text-center">
                {/* Icon with smooth scaling */}
                <motion.div
                  className="mb-2 lg:mb-6 flex justify-center items-center"
                  animate={{
                    scale:
                      hoveredPanel !== null &&
                      hoveredPanel !== index &&
                      typeof window !== 'undefined' &&
                      (window.innerWidth > 768 || isDemoMode)
                        ? 0.8
                        : 1,
                  }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  style={{
                    willChange: 'transform',
                  }}
                >
                  <Image
                    src={area.icon}
                    alt={`${area.title} logo`}
                    width={120}
                    height={120}
                    className="w-auto h-auto max-w-[80px] max-h-[80px] md:max-w-[120px] md:max-h-[120px] object-contain"
                    priority={index < 2}
                  />
                </motion.div>

                {/* Title with unified scaling */}
                <motion.h2
                  className={`font-bold framer-motion-title ${
                    area.title === 'Creative'
                      ? 'text-gray-900'
                      : area.title === 'Development'
                        ? 'text-white'
                        : 'text-gray-900'
                  }`}
                  style={{
                    fontSize: 'clamp(1.25rem, 4vh, 2rem)',
                    lineHeight: 1.1,
                    marginBottom: 'clamp(0.25rem, 1vh, 1rem)',
                    marginTop: 'clamp(0.25rem, 1vh, 1rem)',
                    whiteSpace: 'nowrap',
                    overflow: 'visible',
                    textOverflow: 'clip',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    textRendering: 'optimizeLegibility',
                    transition: 'none',
                  }}
                  animate={{
                    scale:
                      hoveredPanel !== null &&
                      hoveredPanel !== index &&
                      typeof window !== 'undefined' &&
                      (window.innerWidth > 768 || isDemoMode)
                        ? 0.75
                        : hoveredPanel === index &&
                            typeof window !== 'undefined' &&
                            (window.innerWidth > 768 || isDemoMode)
                          ? 1.2
                          : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                    type: 'tween',
                  }}
                  transformTemplate={({ scale }) =>
                    `translate3d(0,0,0) scale(${scale})`
                  }
                >
                  MPDEE{' '}
                  <span
                    className={`${
                      area.title === 'Creative'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'
                        : area.title === 'Development'
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'
                          : 'bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent'
                    }`}
                  >
                    {area.title}
                  </span>
                </motion.h2>

                {/* Description with opacity and scale */}
                <motion.p
                  className={`max-w-md mx-auto leading-relaxed ${
                    area.title === 'Creative'
                      ? 'text-gray-800'
                      : area.title === 'Development'
                        ? 'text-white'
                        : 'text-gray-900'
                  }`}
                  style={{
                    fontSize: 'clamp(0.875rem, 2.5vh, 1.125rem)',
                    marginBottom: 'clamp(0.5rem, 2vh, 2rem)',
                    willChange: 'transform, opacity',
                  }}
                  animate={{
                    opacity:
                      hoveredPanel !== null &&
                      hoveredPanel !== index &&
                      typeof window !== 'undefined' &&
                      (window.innerWidth > 768 || isDemoMode)
                        ? 0.7
                        : 1,
                    scale:
                      hoveredPanel !== null &&
                      hoveredPanel !== index &&
                      typeof window !== 'undefined' &&
                      (window.innerWidth > 768 || isDemoMode)
                        ? 0.9
                        : 1,
                  }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                >
                  {area.description}
                </motion.p>

                {/* Features List - Hidden on mobile */}
                <motion.div
                  className="space-y-2 hidden lg:block"
                  style={{ willChange: 'transform, opacity' }}
                  animate={{
                    opacity:
                      hoveredPanel !== null &&
                      hoveredPanel !== index &&
                      typeof window !== 'undefined' &&
                      (window.innerWidth > 768 || isDemoMode)
                        ? 0.6
                        : 1,
                    scale:
                      hoveredPanel !== null &&
                      hoveredPanel !== index &&
                      typeof window !== 'undefined' &&
                      (window.innerWidth > 768 || isDemoMode)
                        ? 0.9
                        : 1,
                  }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                >
                  {area.features.map(feature => (
                    <div
                      key={feature}
                      className="flex items-center justify-center text-sm opacity-80"
                      style={{ fontSize: '0.875rem' }}
                    >
                      <span className="w-2 h-2 bg-current rounded-full mr-3 opacity-60" />
                      {feature}
                    </div>
                  ))}
                </motion.div>

                {/* Call to Action - Hidden on mobile */}
                <motion.div
                  className="mt-8 hidden lg:block"
                  style={{ willChange: 'transform' }}
                  animate={{
                    scale:
                      hoveredPanel !== null &&
                      hoveredPanel !== index &&
                      typeof window !== 'undefined' &&
                      (window.innerWidth > 768 || isDemoMode)
                        ? 0.9
                        : 1,
                  }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div
                    className={`
                    inline-flex items-center font-semibold px-4 py-2 rounded-lg
                    transition-all duration-700 ease-out
                    ${
                      area.title === 'Creative'
                        ? 'text-blue-600 hover:text-blue-700 border border-blue-200 bg-white/80 hover:bg-blue-50'
                        : area.title === 'Development'
                          ? 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                          : 'bg-gradient-to-r from-red-500 to-blue-600 text-white hover:opacity-90 shadow-sm'
                    }
                    ${hoveredPanel === index ? 'shadow-lg' : ''}
                  `}
                    style={{
                      transform:
                        hoveredPanel === index ? 'scale(1.05)' : 'scale(1)',
                      willChange: 'transform',
                    }}
                  >
                    Enter
                    <span className="ml-2">→</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Overlay for better text readability */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                hoveredPanel === index
                  ? 'bg-black/10'
                  : area.title === 'Development'
                    ? 'bg-black/20'
                    : 'bg-white/10'
              }`}
              style={{ willChange: 'opacity' }}
            />
          </motion.div>
        ))}
      </main>
    </div>
  );
}
