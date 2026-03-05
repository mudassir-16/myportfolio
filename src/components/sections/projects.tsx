"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Sparkles } from 'lucide-react';
import Link from 'next/link';

const projects = [
    {
        title: "SEDS - AI Scam Defense",
        description: "A high-priority cybersecurity platform detecting social engineering and scams using vision-based AI and OCR. Features behavioral risk profiling and automated scam type classification.",
        tech: ["Next.js", "Groq AI", "Supabase", "TailwindCSS"],
        github: "https://github.com/mudassir-16/aiseds",
        live: "https://aiseds.vercel.app",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        accent: "from-blue-500/20 to-indigo-500/20"
    },
    {
        title: "OpenIdeaX Innovation Platform",
        description: "An AI-powered co-creation engine for global challenges. Built during a major hackathon, it features multi-agent AI collaboration, real-time rooms, and impact evaluation metrics.",
        tech: ["Next.js 14", "TypeScript", "GPT-4", "Recharts"],
        github: "https://github.com/mudassir-16/GROUP-P-hackathon-oct-2025",
        live: "#",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        accent: "from-purple-500/20 to-violet-500/20"
    },
    {
        title: "StudyMate AI",
        description: "Transforming how you learn from PDFs using document intelligence. Includes vector-based semantic search, automated quiz generation, and AI Q&A with citations.",
        tech: ["Python", "Streamlit", "LangChain", "OpenAI"],
        github: "https://github.com/mudassir-16/StudyMateAi-The-Devion-",
        live: "#",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
        accent: "from-emerald-500/20 to-teal-500/20"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-gradient">Featured Work</h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        A collection of projects where AI meets practical utility, focused on solving complex problems with elegant code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card group flex flex-col h-full overflow-hidden border-none bg-white/[0.03]"
                        >
                            <div className="h-48 sm:h-64 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} mix-blend-overlay`} />
                                <div className="absolute top-4 right-4 backdrop-blur-md bg-black/40 p-2 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Sparkles size={18} className="text-white" />
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-white/60 mb-6 leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-xs font-mono rounded-lg"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors py-2"
                                    >
                                        <Github size={18} />
                                        <span className="font-semibold text-sm">Source</span>
                                    </Link>
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors py-2 ml-auto"
                                    >
                                        <span className="font-semibold text-sm">Live Demo</span>
                                        <ExternalLink size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
