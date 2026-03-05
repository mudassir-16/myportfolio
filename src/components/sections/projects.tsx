"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        title: "SEDS - AI Scam Defense",
        description: "A high-priority cybersecurity platform detecting social engineering and scams using vision-based AI and OCR. Features behavioral risk profiling and automated scam type classification.",
        tech: ["Next.js", "Groq AI", "Supabase", "TailwindCSS"],
        github: "https://github.com/mudassir-16/aiseds",
        live: "https://aiseds.vercel.app",
        color: "from-red-600 to-rose-600"
    },
    {
        title: "OpenIdeaX Innovation Platform",
        description: "An AI-powered co-creation engine for global challenges. Built during a major hackathon, it features multi-agent AI collaboration, real-time rooms, and impact evaluation metrics.",
        tech: ["Next.js 14", "TypeScript", "OpenAI GPT-4", "Recharts"],
        github: "https://github.com/mudassir-16/GROUP-P-hackathon-oct-2025",
        live: "#",
        color: "from-purple-600 to-violet-600"
    },
    {
        title: "StudyMate AI",
        description: "Transforming how you learn from PDFs using document intelligence. Includes vector-based semantic search, automated quiz generation, and AI Q&A with citations.",
        tech: ["Python", "Streamlit", "LangChain", "OpenAI"],
        github: "https://github.com/mudassir-16/StudyMateAi-The-Devion-",
        live: "#",
        color: "from-blue-600 to-indigo-600"
    },
    {
        title: "Smart Workflow Automator",
        description: "A drag-and-drop automation tool that orchestrates complex AI pipelines and multi-step tasks across multiple platforms and APIs.",
        tech: ["React", "Node.js", "Express", "PostgreSQL"],
        github: "https://github.com/mudassir-16",
        live: "#",
        color: "from-emerald-600 to-teal-600"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-20 relative max-w-7xl mx-auto">
            <div className="space-y-16">
                <div className="space-y-4">
                    <h2 className="text-sm tracking-widest text-[var(--color-primary)] font-mono uppercase font-bold">Showcase</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--color-headings)]">Featured Projects</h3>
                    <p className="text-[var(--color-headings)]/90 max-w-2xl text-lg mt-4 leading-relaxed font-light">
                        A selection of my best work, ranging from AI applications to full-stack automation tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="glass rounded-3xl p-6 sm:p-8 hover:border-[var(--color-secondary)] transition-all group flex flex-col h-full overflow-hidden relative"
                        >
                            {/* Background gradient blur */}
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${project.color} rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity -z-10`} />

                            <div className="flex-1 space-y-6 z-10">
                                <h4 className="text-2xl font-bold text-[var(--color-headings)] tracking-tight">{project.title}</h4>
                                <p className="text-[var(--color-headings)]/80 leading-relaxed font-light">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((tech, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-[var(--color-section-bg)] text-[var(--color-headings)] text-sm rounded-full font-mono border border-[rgba(255,255,255,0.08)] group-hover:border-[var(--color-secondary)] transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-[rgba(255,255,255,0.08)] z-10 w-full">
                                <Link href={project.github} target="_blank" className="flex items-center gap-2 text-[var(--color-headings)]/70 hover:text-[var(--color-primary)] transition-colors">
                                    <Github size={20} />
                                    <span className="font-medium text-sm">Source Code</span>
                                </Link>
                                <Link href={project.live} target="_blank" className="flex items-center gap-2 text-[var(--color-headings)]/70 hover:text-[var(--color-primary)] transition-colors ml-auto">
                                    <span className="font-medium text-sm">Live Demo</span>
                                    <ExternalLink size={20} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
