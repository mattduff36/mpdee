'use client';

import React, { useState, useEffect } from 'react';
import { track } from '@vercel/analytics';
import Image from 'next/image';

interface HeroProps {
  onGetStarted?: () => void;
}

const DOTS = [
  { key: 'dot1', base: 'top-10 left-10 w-20 h-20', factor: 0.04 },
  { key: 'dot2', base: 'top-40 right-20 w-16 h-16', factor: -0.03 },
  { key: 'dot3', base: 'bottom-20 left-1/4 w-12 h-12', factor: 0.06 },
  { key: 'dot4', base: 'bottom-40 right-1/3 w-8 h-8', factor: -0.05 },
];

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [dotPositions, setDotPositions] = useState(
    DOTS.map(() => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Detect mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    let animationId: number;
    let startTime = Date.now();

    // Both mobile and desktop: Circular animation
    const animateCircular = () => {
      const time = (Date.now() - startTime) * 0.001; // Convert to seconds
      const radius = isMobile ? 15 : 20; // Slightly larger radius for desktop
      const speed = 0.8; // Speed of rotation

      setDotPositions(
        DOTS.map((dot, i) => {
          const phase = i * 1.5; // Stagger the animation for each dot
          return {
            x: Math.cos(time * speed + phase) * radius,
            y: Math.sin(time * speed + phase) * radius,
          };
        })
      );

      animationId = requestAnimationFrame(animateCircular);
    };

    animateCircular();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isMobile, isClient]);

  const handleGetStarted = () => {
    track('hero_cta_click', {
      source: 'hero',
      buttonText: 'Get Started',
    });

    if (onGetStarted) {
      onGetStarted();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative bg-background-dark text-text-light py-20 overflow-hidden"
    >
      {/* Background animation elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        {DOTS.map((dot, i) => (
          <div
            key={dot.key}
            className={`absolute ${dot.base} bg-white rounded-full`}
            style={{
              transform: `translate(${dotPositions[i].x}px, ${dotPositions[i].y}px)`,
              transition: 'none', // No transition needed for smooth animation
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo above heading */}
          <div
            className={`flex flex-col items-center mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <Image
              src="/images/mpdee_logo.png"
              alt="MPDEE logo"
              width={96}
              height={96}
              className="mx-auto w-24 h-24 md:w-32 md:h-32 object-contain"
              priority
            />
          </div>

          {/* Main heading with slide-up animation */}
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Professional Web Design & Development
          </h1>

          {/* Subtitle with delayed slide-up animation */}
          <p
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            We create beautiful, functional websites that drive results for your
            business
          </p>

          {/* CTA button with delayed fade-in and scale animation */}
          <div
            className={`transition-all duration-1000 ease-out delay-600 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <button
              onClick={handleGetStarted}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Get started with our web design services"
            >
              Get Started
            </button>
          </div>

          {/* Scroll indicator with bounce animation */}
          <div
            className={`mt-16 transition-all duration-1000 ease-out delay-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 opacity-80">Scroll to explore</span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
