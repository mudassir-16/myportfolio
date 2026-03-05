"use client";

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Learning } from '@/components/sections/learning';
import { Leadership } from '@/components/sections/leadership';
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
    <main className="min-h-screen selection:bg-zinc-600">
      <Navbar />
      <ScrollBackground />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-zinc-500 via-slate-500 to-zinc-400 transform origin-left z-50 shadow-none"
        style={{ scaleX }}
      />
      <div className="flex flex-col gap-24 md:gap-32 w-full overflow-hidden pb-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Leadership />
        <Learning />
        <Contact />
      </div>
    </main>
  );
}
