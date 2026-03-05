"use client";

import { motion } from 'framer-motion';
import { BookOpen, Zap, Sparkles, Code2 } from 'lucide-react';

const learnings = [
    {
        topic: "Python & Advanced Algorithms",
        icon: Code2,
        progress: 90
    },
    {
        topic: "AI Automation Workflows",
        icon: Zap,
        progress: 75
    },
    {
        topic: "Generative AI Integration",
        icon: Sparkles,
        progress: 60
    }
];

export function Learning() {
    return (
        <section id="learning" className="py-24 px-6 md:px-20 relative max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 relative flex justify-center w-full"
                >
                    {/* Decorative sphere */}
                    <div className="absolute inset-0 bg-linear-to-tr from-zinc-600/20 to-slate-600/30 rounded-full blur-[100px] w-full h-full" />

                    <div className="relative z-10 p-6 sm:p-8 glass rounded-3xl sm:rounded-[3rem] border border-[rgba(255,255,255,0.08)] w-full max-w-md aspect-square flex flex-col items-center justify-center text-center space-y-6">
                        <div className="p-4 bg-[var(--color-section-bg)] rounded-full">
                            <BookOpen size={48} className="text-secondary" />
                        </div>
                        <div>
                            <h4 className="text-3xl font-extrabold text-[var(--color-headings)]">Growth Mindset</h4>
                            <p className="text-[var(--color-headings)]/80 mt-2 font-light">Continuously expanding my boundaries to build better solutions.</p>
                        </div>
                    </div>
                </motion.div>

                <div className="lg:w-1/2 space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-sm tracking-widest text-[var(--color-primary)] font-mono uppercase font-bold">Current Focus</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--color-headings)]">Learning Journey</h3>
                        <p className="text-[var(--color-headings)] max-w-xl text-lg mt-4 leading-relaxed font-light">
                            Technology evolves rapidly. Here's what I am currently actively studying and incorporating into my projects.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {learnings.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="space-y-3"
                                >
                                    <div className="flex justify-between items-center text-[var(--color-headings)] font-medium">
                                        <span className="flex items-center gap-2">
                                            <Icon className="text-[var(--color-secondary)]" size={20} />
                                            {item.topic}
                                        </span>
                                        <span className="text-[var(--color-headings)] font-mono text-sm">{item.progress}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-[var(--color-section-bg)] rounded-full overflow-hidden border border-[rgba(255,255,255,0.08)]">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.progress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                                            className="h-full bg-gradient-accent rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
