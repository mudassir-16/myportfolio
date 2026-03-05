"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 lg:px-20 pt-20">

            {/* Background reserved for ScrollBackground */}

            <div className="max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >


                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--color-headings)] leading-[1.1]">
                        Mohammed <br />
                        <span className="text-gradient-accent">
                            Mudassir
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-[var(--color-headings)] font-mono tracking-tight max-w-2xl leading-relaxed">
                        AI Developer <span className="text-[var(--color-primary)]">|</span> Automation Builder <span className="text-[var(--color-primary)]">|</span> Problem Solver
                    </h2>

                    <p className="text-[var(--color-headings)]/90 max-w-xl text-lg mt-4 leading-relaxed">
                        I create real AI applications, build automation tools, and solve complex problems. Constantly learning, shipping, and innovating.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-wrap gap-4 mt-10"
                >
                    <Link href="#projects">
                        <button className="flex items-center gap-2 bg-gradient-accent text-black hover:opacity-90 px-6 py-3 rounded-xl transition-all font-medium active:scale-95">
                            View Projects <ArrowRight size={18} />
                        </button>
                    </Link>

                    <Link href="#contact">
                        <button className="flex items-center gap-2 glass hover:bg-[var(--color-section-bg)] text-[var(--color-headings)] px-6 py-3 rounded-xl transition-all font-medium active:scale-95">
                            Contact Me <Mail size={18} />
                        </button>
                    </Link>

                    <a href="/myportfolio/resume.pdf" download>
                        <button className="flex items-center gap-2 glass hover:bg-[var(--color-section-bg)] text-[var(--color-headings)] px-6 py-3 rounded-xl transition-all font-medium active:scale-95 group">
                            Resume <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-zinc-500 hover:text-white transition-colors z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
