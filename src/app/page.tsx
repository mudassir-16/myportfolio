"use client";

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Achievements } from '@/components/sections/achievements';
import { Contact } from '@/components/sections/contact';
import { ScrollBackground } from '@/components/ScrollBackground';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <ScrollBackground />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400 transform origin-left z-[100]"
        style={{ scaleX }}
      />
      <div className="flex flex-col w-full overflow-hidden pb-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </div>

      <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-md relative z-10 text-center">
        <div className="section-container">
          <p className="text-white/40 text-sm font-mono tracking-widest uppercase mb-4">
            Designed & Built by Mohammed Mudassir
          </p>
          <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
            © 2024 • All Rights Reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
