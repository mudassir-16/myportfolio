"use client";

import { motion } from "framer-motion";
import { User, Code2, Rocket, Brain } from "lucide-react";

export function About() {
    const highlights = [
        {
            icon: <Brain className="text-blue-400" />,
            title: "AI Specialist",
            description: "Deep expertise in LLMs, RAG systems, and AI automation."
        },
        {
            icon: <Code2 className="text-purple-400" />,
            title: "Full Stack",
            description: "Building scalable web apps with Next.js and modern tech."
        },
        {
            icon: <Rocket className="text-emerald-400" />,
            title: "Fast Shipper",
            description: "Turning complex ideas into working products rapidly."
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-gradient">About Me</h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg italic">
                        "Bridging the gap between human creativity and machine intelligence."
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-8 md:p-12 space-y-6"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                                <User className="text-blue-400" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">The Journey</h3>
                        </div>

                        <p className="text-white/70 leading-relaxed text-lg">
                            I&apos;m <span className="text-white font-semibold">Mohammed Mudassir</span>, a developer dedicated to pushing the boundaries of what&apos;s possible with AI and web technologies. My approach combines technical rigor with a product-driven mindset.
                        </p>

                        <p className="text-white/70 leading-relaxed text-lg">
                            Whether it&apos;s building intelligent automation pipelines or crafting seamless user experiences, I focus on creating value and solving real-world challenges through code.
                        </p>
                    </motion.div>

                    <div className="grid gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-6 flex items-start gap-6 group"
                            >
                                <div className="mt-1 transition-transform group-hover:scale-110 duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
