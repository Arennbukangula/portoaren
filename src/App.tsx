import React, { useRef, useEffect, useState } from 'react';
import {
  motion, useScroll, useTransform, useSpring,
  useVelocity, AnimatePresence
} from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Writings from './components/Writings';
import Footer from './components/Footer';
import DetailOverlay from './components/DetailOverlay';
import { LanguageProvider, useLanguage } from './LanguageContext';
import LanguageSwitch from './components/LanguageSwitch';
import { Project, Writing } from './types';

// ── Custom Cursor ──────────────────────────────────────────────
const CustomCursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHovering(
        !!(t.tagName === 'A' || t.tagName === 'BUTTON' ||
          t.closest('a') || t.closest('button') ||
          t.classList.contains('cursor-pointer'))
      );
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot kecil */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[300] mix-blend-difference hidden md:block"
        animate={{ x: mouse.x - 6, y: mouse.y - 6, scale: hovering ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Lingkaran besar */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[300] mix-blend-difference hidden md:block"
        animate={{
          x: mouse.x - 20,
          y: mouse.y - 20,
          scale: hovering ? 1.5 : 1,
          borderColor: hovering ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
          backgroundColor: hovering ? 'rgba(255,255,255,0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  );
};

// ── Main Scroll Content ────────────────────────────────────────
const ScrollContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const { t } = useLanguage();

  const [selectedItem, setSelectedItem] = useState<Project | Writing | null>(null);
  const [selectedType, setSelectedType] = useState<'project' | 'writing' | null>(null);

  // Hitung total lebar konten
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const calcWidth = () => {
      setScrollRange(el.scrollWidth - window.innerWidth);
    };
    calcWidth();

    const observer = new ResizeObserver(() => setTimeout(calcWidth, 300));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Spring pada scroll
  const smoothScrollY = useSpring(scrollY, { damping: 50, stiffness: 400, mass: 1 });

  // Efek skew saat scroll cepat
  const skewVelocity = useTransform(scrollVelocity, [-50, 50], [2, -2]);
  const skew = useSpring(skewVelocity, { stiffness: 400, damping: 30 });

  // Horizontal transform
  const transformX = useTransform(smoothScrollY, [0, scrollRange], [0, -scrollRange]);

  // Progress bar
  const progressWidth = useTransform(smoothScrollY, [0, scrollRange], ['0%', '100%']);

  return (
    <div
      style={{ height: `${scrollRange + window.innerHeight}px` }}
      className="bg-black relative"
    >
      <CustomCursor />
      <LanguageSwitch />

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <DetailOverlay
            item={selectedItem}
            type={selectedType}
            onClose={() => { setSelectedItem(null); setSelectedType(null); }}
          />
        )}
      </AnimatePresence>

      {/* Panel horizontal yang di-sticky */}
      <div className="fixed top-0 left-0 h-[100dvh] w-screen overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x: transformX, skewX: skew }}
          className="flex h-full w-max will-change-transform"
        >
          <Hero />
          <About />
          <Projects onSelect={(p) => { setSelectedItem(p); setSelectedType('project'); }} />
          <Writings onSelect={(w) => { setSelectedItem(w); setSelectedType('writing'); }} />
          <Footer />
        </motion.div>
      </div>

      {/* Progress bar bawah */}
      <motion.div
        className="fixed bottom-0 left-0 h-[2px] bg-white z-50 mix-blend-difference"
        style={{ width: progressWidth }}
      />

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 mix-blend-difference text-white z-40 font-mono text-xs hidden md:block"
      >
        {t('SCROLL ↓ TO NAVIGATE →', 'GULIR ↓ UNTUK NAVIGASI →')}
      </motion.div>
    </div>
  );
};

// ── App Root ───────────────────────────────────────────────────
function App() {
  return (
    <LanguageProvider>
      <ScrollContent />
    </LanguageProvider>
  );
}

export default App;