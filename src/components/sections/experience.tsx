"use client";

import { motion } from 'framer-motion';
import { Calendar, Award, Trophy, Code } from 'lucide-react';

const experiences = [
    {
        event: "Unique Idea & Innovation Award",
        description: "Recognized for outstanding innovation at the GENAIVERSITY HACKATHON 2025 for visionary AI conceptualization.",
        year: "Oct 2025",
        icon: Trophy
    },
    {
        event: "3rd Place - Robotica Chapter-3",
        description: "Secured 3rd place in the 36-hour Hackathon at Geethanjali College's Technical Fest, showcasing rapid prototyping skills.",
        year: "Oct 2025",
        icon: Award
    },
    {
        event: "2nd Place - CongnitiveX: GenAI",
        description: "Ranked 2nd in the GenAI Hackathon at VGNT ECE Department, delivering high-impact generative AI solutions.",
        year: "Sept 2025",
        icon: Trophy
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 px-6 md:px-20 relative max-w-4xl mx-auto">
            <div className="space-y-16">
                <div className="space-y-4 text-center">
                    <h2 className="text-sm tracking-widest text-[var(--color-primary)] font-mono uppercase font-bold">Milestones</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--color-headings)]">Experience & Achievements</h3>
                </div>

                <div className="relative border-l-2 border-[var(--color-secondary)]/30 ml-4 md:ml-10 space-y-12">
                    {experiences.map((exp, idx) => {
                        const Icon = exp.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="relative pl-10 md:pl-16 group"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[var(--color-background)] border-4 border-solid border-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
                                </div>

                                <div className="glass rounded-3xl p-8 hover:border-[var(--color-secondary)] transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <h4 className="text-2xl font-bold text-[var(--color-headings)] tracking-tight flex items-center gap-3">
                                            <Icon className="text-[var(--color-secondary)]" size={24} />
                                            {exp.event}
                                        </h4>
                                        <span className="flex items-center gap-2 text-[var(--color-headings)] font-mono font-medium px-4 py-1.5 rounded-full bg-[var(--color-section-bg)] w-fit border border-[rgba(255,255,255,0.08)]">
                                            <Calendar size={16} />
                                            {exp.year}
                                        </span>
                                    </div>
                                    <p className="text-[var(--color-headings)]/80 leading-relaxed font-light text-lg">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
