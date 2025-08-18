'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface IntroExample {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType<{ onComplete: () => void }>;
}

// Intro Example 1: Classic Fade with Logo
function ClassicFadeIntro({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <Image
            src="/images/logo-trans.png"
            alt="MPDEE Logo"
            width={120}
            height={120}
            className="mx-auto mb-8"
          />
        </motion.div>
        <motion.h1
          className="text-6xl font-bold text-white mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          MPDEE
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Creative • Development • Support
        </motion.p>
      </div>
    </motion.div>
  );
}

// Intro Example 2: Typewriter Effect
function TypewriterIntro({ onComplete }: { onComplete: () => void }) {
  const [text, setText] = useState('');
  const fullText = 'MPDEE';

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
        setTimeout(onComplete, 2000);
      }
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/images/logo-trans.png"
            alt="MPDEE Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </motion.div>
        <h1 className="text-7xl font-bold text-white font-mono">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        <motion.p
          className="text-lg text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: text.length === fullText.length ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          Where creativity meets technology
        </motion.p>
      </div>
    </motion.div>
  );
}

// Intro Example 3: Particle Burst
function ParticleBurstIntro({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-r from-purple-900 to-blue-900 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          initial={{
            x: '50vw',
            y: '50vh',
            scale: 0,
          }}
          animate={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.1,
            ease: 'easeOut',
          }}
        />
      ))}
      
      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-8"
        >
          <Image
            src="/images/logo-trans.png"
            alt="MPDEE Logo"
            width={140}
            height={140}
            className="mx-auto"
          />
        </motion.div>
        <motion.h1
          className="text-8xl font-bold text-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          MPDEE
        </motion.h1>
        <motion.div
          className="flex justify-center space-x-4 mt-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm">Creative</span>
          <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm">Development</span>
          <span className="px-4 py-2 bg-pink-600 text-white rounded-full text-sm">Support</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Intro Example 4: Morphing Shapes
function MorphingShapesIntro({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center relative">
        {/* Morphing background shapes */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-32 h-32 bg-purple-500 rounded-full opacity-20"
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10"
        >
          <Image
            src="/images/logo-trans.png"
            alt="MPDEE Logo"
            width={130}
            height={130}
            className="mx-auto mb-8"
          />
          <motion.h1
            className="text-7xl font-bold text-white mb-4"
            initial={{ letterSpacing: '0.5em', opacity: 0 }}
            animate={{ letterSpacing: 'normal', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            MPDEE
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Transforming ideas into reality
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Intro Example 5: Glitch Effect
function GlitchIntro({ onComplete }: { onComplete: () => void }) {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const glitchTimer = setTimeout(() => setGlitchActive(true), 1500);
    const completeTimer = setTimeout(onComplete, 4000);
    
    return () => {
      clearTimeout(glitchTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Image
            src="/images/logo-trans.png"
            alt="MPDEE Logo"
            width={120}
            height={120}
            className="mx-auto"
          />
        </motion.div>
        <motion.h1
          className={`text-8xl font-bold text-white ${glitchActive ? 'animate-pulse' : ''}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            textShadow: glitchActive ? '2px 0 #ff0000, -2px 0 #00ff00' : 'none',
            animation: glitchActive ? 'glitch 0.3s infinite' : 'none',
          }}
        >
          MPDEE
        </motion.h1>
        <motion.p
          className="text-green-400 font-mono text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {'> Initializing systems...'}
        </motion.p>
        <motion.p
          className="text-green-400 font-mono text-sm mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: glitchActive ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {'> Systems online'}
        </motion.p>
      </div>
    </motion.div>
  );
}

// Intro Example 6: Minimal Slide
function MinimalSlideIntro({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="text-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-8"
        >
          <Image
            src="/images/logo-trans.png"
            alt="MPDEE Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </motion.div>
        <motion.h1
          className="text-6xl font-light text-gray-900 tracking-wider"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          MPDEE
        </motion.h1>
        <motion.div
          className="w-24 h-0.5 bg-gray-900 mx-auto mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <motion.p
          className="text-gray-600 text-sm tracking-wide mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          PROFESSIONAL SERVICES
        </motion.p>
      </div>
    </motion.div>
  );
}

// Intro Example 7: 3D Rotate
function Rotate3DIntro({ onComplete }: { onComplete: () => void }) {
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
            src="/images/logo-trans.png"
            alt="MPDEE Logo"
            width={140}
            height={140}
            className="mx-auto"
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
          <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm">Creative</span>
          <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm">Development</span>
          <span className="px-4 py-2 bg-pink-600 text-white rounded-full text-sm">Support</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Intro Example 8: Logo Build Animation
function LogoBuildIntro({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'backOut' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.8] }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <Image
              src="/images/logo-trans.png"
              alt="MPDEE Logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </motion.div>
          
          {/* Animated rings around logo */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-white rounded-full"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ 
                scale: [1, 2, 3], 
                opacity: [0.8, 0.4, 0] 
              }}
              transition={{
                duration: 2,
                delay: i * 0.3 + 1,
                repeat: Infinity,
                ease: 'easeOut'
              }}
            />
          ))}
        </motion.div>
        
        <motion.h1
          className="text-8xl font-bold text-white tracking-wide"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          {'MPDEE'.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.2 + index * 0.1,
                ease: [0.23, 1, 0.32, 1] 
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p
          className="text-xl text-blue-200 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Building tomorrow's solutions today
        </motion.p>
      </div>
    </motion.div>
  );
}

const introExamples: IntroExample[] = [
  {
    id: 'classic-fade',
    title: 'Classic Fade',
    description: 'Traditional fade-in with logo and text',
    component: ClassicFadeIntro,
  },
  {
    id: 'typewriter',
    title: 'Typewriter Effect',
    description: 'Text appears letter by letter with cursor',
    component: TypewriterIntro,
  },
  {
    id: 'particle-burst',
    title: 'Particle Burst',
    description: 'Animated particles with logo rotation',
    component: ParticleBurstIntro,
  },
  {
    id: 'morphing-shapes',
    title: 'Morphing Shapes',
    description: 'Background shapes with letter spacing animation',
    component: MorphingShapesIntro,
  },
  {
    id: 'glitch',
    title: 'Glitch Effect',
    description: 'Tech-inspired glitch animation',
    component: GlitchIntro,
  },
  {
    id: 'minimal-slide',
    title: 'Minimal Slide',
    description: 'Clean, minimal design with slide exit',
    component: MinimalSlideIntro,
  },
  {
    id: '3d-rotate',
    title: '3D Rotate',
    description: '3D perspective animations',
    component: Rotate3DIntro,
  },
  {
    id: 'logo-build',
    title: 'Logo Build',
    description: 'Logo with expanding rings and letter-by-letter text',
    component: LogoBuildIntro,
  },
];

export default function IntroExamples() {
  const [selectedIntro, setSelectedIntro] = useState<string | null>(null);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleIntroComplete = () => {
    setShowMainContent(true);
    // Reset after showing main content briefly
    setTimeout(() => {
      setShowMainContent(false);
      setSelectedIntro(null);
    }, 2000);
  };

  const selectedExample = introExamples.find(ex => ex.id === selectedIntro);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          MPDEE Intro Animation Examples
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Click on any example to preview the full-screen intro animation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {introExamples.map((example) => (
            <motion.div
              key={example.id}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedIntro(example.id)}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {example.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {example.description}
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">▶</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add CSS for glitch animation */}
        <style jsx global>{`
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
        `}</style>
      </div>

      {/* Render selected intro */}
      <AnimatePresence>
        {selectedIntro && selectedExample && !showMainContent && (
          <selectedExample.component onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Show main content preview */}
      <AnimatePresence>
        {showMainContent && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Main Landing Page</h2>
              <p className="text-xl text-gray-300">
                This is where your main content would appear
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <div className="w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white">🎵</span>
                </div>
                <div className="w-20 h-20 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white">💻</span>
                </div>
                <div className="w-20 h-20 bg-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white">🛠️</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
