"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ChevronDown, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 lg:px-20">
            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-emerald-400 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Available for opportunities
                    </motion.div>

                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
                            <span className="text-white block">Mohammed</span>
                            <span className="text-gradient-primary block">Mudassir</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl leading-relaxed">
                            AI Automation Specialist & Full Stack Developer building the future of intelligent applications.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link href="#projects">
                            <button className="btn-primary flex items-center gap-2 group">
                                Explore Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        <Link href="#contact">
                            <button className="btn-secondary flex items-center gap-2">
                                Get In Touch
                            </button>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 pt-8">
                        <a href="https://github.com/mudassir" target="_blank" className="text-white/50 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/mudassir" target="_blank" className="text-white/50 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest text-white/30 font-bold">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white/50"
                >
                    <ChevronDown size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
}
