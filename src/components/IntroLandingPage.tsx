'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SplitScreenHero from './SplitScreenHero';
import StructuredData from './StructuredData';

// 3D Rotate Intro Component
function Intro3DRotate({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
      style={{ perspective: '1000px' }}
    >
      <div className="text-center">
        <motion.div
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-8"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Image
            src="/images/MPDEE-logo-trans.png"
            alt="MPDEE Logo"
            width={140}
            height={140}
            className="mx-auto"
            priority
            quality={90}
          />
        </motion.div>
        <motion.h1
          className="text-7xl font-bold text-white"
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          MPDEE
        </motion.h1>
        <motion.div
          className="flex justify-center space-x-4 mt-6"
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm">
            Creative
          </span>
          <span className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm">
            Development
          </span>
          <span className="px-4 py-2 bg-red-500 text-white rounded-full text-sm">
            Support
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function IntroLandingPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
    );
  }

  return (
    <>
      <StructuredData />
      {/* Main Landing Page Content */}
      <SplitScreenHero />

      {/* 3D Intro Overlay */}
      <AnimatePresence>
        {showIntro && <Intro3DRotate onComplete={handleIntroComplete} />}
      </AnimatePresence>
    </>
  );
}
