"use client";

import { motion, Variants } from 'framer-motion';
import { Database, Code2, BrainCircuit, Wrench } from 'lucide-react';

const categories = [
    {
        title: "Programming",
        icon: Code2,
        skills: ["Python", "JavaScript", "TypeScript", "HTML/CSS"]
    },
    {
        title: "AI / Data",
        icon: BrainCircuit,
        skills: ["Machine Learning", "Generative AI", "Data Analysis", "Prompt Engineering"]
    },
    {
        title: "Backend / Databases",
        icon: Database,
        skills: ["Supabase", "MySQL", "PostgreSQL", "REST APIs", "Node.js"]
    },
    {
        title: "Tools & DevOps",
        icon: Wrench,
        skills: ["Git", "GitHub", "Vercel", "Docker (Learning)"]
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    }
};

export function Skills() {
    return (
        <section id="skills" className="py-24 px-6 md:px-20 relative max-w-7xl mx-auto">
            <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-zinc-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="flex flex-col gap-12">
                <div className="space-y-2 text-center lg:text-left">
                    <h2 className="text-sm tracking-widest text-[var(--color-primary)] font-mono uppercase font-bold">Tech Stack</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--color-headings)]">Skills & Arsenal</h3>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="glass rounded-3xl p-6 hover:border-[var(--color-secondary)] transition-all group"
                            >
                                <div className="w-12 h-12 bg-[var(--color-section-bg)] rounded-2xl flex items-center justify-center mb-6 text-[var(--color-secondary)] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
                                    <Icon size={24} />
                                </div>

                                <h4 className="text-xl font-bold text-[var(--color-headings)] mb-4">{category.title}</h4>

                                <ul className="space-y-3">
                                    {category.skills.map((skill, sIdx) => (
                                        <li key={sIdx} className="flex items-center gap-3 text-[var(--color-headings)] font-medium">
                                            <span className="w-1.5 h-1.5 bg-gradient-accent rounded-full inline-block" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
