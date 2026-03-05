"use client";

import { motion } from 'framer-motion';
import { Database, Code2, BrainCircuit, Wrench, Terminal, Cpu, Globe, Layout } from 'lucide-react';

const categories = [
    {
        title: "Frontend Development",
        icon: Layout,
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        color: "text-blue-400"
    },
    {
        title: "AI & Automation",
        icon: BrainCircuit,
        skills: ["LLM Integration", "RAG Systems", "Prompt Engineering", "Python", "LangChain"],
        color: "text-purple-400"
    },
    {
        title: "Backend & Systems",
        icon: Terminal,
        skills: ["Node.js", "PostgreSQL", "Supabase", "RESTful APIs", "Docker"],
        color: "text-emerald-400"
    },
    {
        title: "Tools & Workflow",
        icon: Wrench,
        skills: ["Git / GitHub", "Vercel", "Linux", "Postman", "Claude/GPT APIs"],
        color: "text-amber-400"
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-gradient">Technical Arsenal</h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        A curated selection of technologies I use to bring complex ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="glass-card p-8 group h-full"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${category.color} group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20`}>
                                    <Icon size={28} />
                                </div>

                                <h4 className="text-xl font-bold text-white mb-6 tracking-tight">{category.title}</h4>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white/70 group-hover:text-white group-hover:border-white/20 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
