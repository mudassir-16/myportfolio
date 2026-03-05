"use client";

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Instagram } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-20 relative max-w-7xl mx-auto overflow-hidden text-center">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[200px]" />
            </div>

            <div className="space-y-16 relative z-10 max-w-3xl mx-auto">
                <div className="space-y-4">
                    <h2 className="text-sm tracking-widest text-[var(--color-primary)] font-mono uppercase font-bold">Get In Touch</h2>
                    <h3 className="text-4xl md:text-6xl font-extrabold text-[var(--color-headings)]">Let's Build Something Great</h3>
                    <p className="text-[var(--color-headings)]/80 text-lg md:text-xl mt-4 leading-relaxed font-light mx-auto max-w-xl">
                        Whether you have a question about my work, want to collaborate on a project, or just want to say hi, my inbox is always open.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass p-12 rounded-[3.5rem] border border-white/5 relative shadow-2xl space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <a href="mailto:mohammadmudassir1604@gmail.com" className="group p-6 glass rounded-3xl border border-[rgba(255,255,255,0.08)] flex flex-col items-center gap-4 hover:bg-[var(--color-section-bg)] transition-all text-[var(--color-foreground)] hover:text-[var(--color-primary)]">
                            <div className="p-4 bg-[var(--color-section-bg)] rounded-2xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-all">
                                <Mail size={32} className="text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors" />
                            </div>
                            <div className="text-center">
                                <h5 className="font-bold text-lg text-[var(--color-headings)]">Email</h5>
                                <p className="text-sm text-[var(--color-headings)]/70 mt-1">mohammadmudassir1604@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/mohammed-mudassir-82882933a/" target="_blank" className="group p-6 glass rounded-3xl border border-[rgba(255,255,255,0.08)] flex flex-col items-center gap-4 hover:bg-[var(--color-section-bg)] transition-all text-[var(--color-foreground)] hover:text-[#0A66C2]">
                            <div className="p-4 bg-[var(--color-section-bg)] rounded-2xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] transition-all">
                                <Linkedin size={32} className="text-blue-400 group-hover:text-[#0A66C2] transition-colors" />
                            </div>
                            <div className="text-center">
                                <h5 className="font-bold text-lg text-[var(--color-headings)]">LinkedIn</h5>
                                <p className="text-sm text-[var(--color-headings)]/70 mt-1">Let's connect</p>
                            </div>
                        </a>

                        <a href="https://github.com/mudassir-16" target="_blank" className="group p-6 glass rounded-3xl border border-[rgba(255,255,255,0.08)] flex flex-col items-center gap-4 hover:bg-[var(--color-section-bg)] transition-all text-[var(--color-foreground)] hover:text-white">
                            <div className="p-4 bg-[var(--color-section-bg)] rounded-2xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all">
                                <Github size={32} className="text-zinc-400 group-hover:text-white transition-colors" />
                            </div>
                            <div className="text-center">
                                <h5 className="font-bold text-lg text-[var(--color-headings)]">GitHub</h5>
                                <p className="text-sm text-[var(--color-headings)]/70 mt-1">Check my code</p>
                            </div>
                        </a>

                        <a href="https://www.instagram.com/mudassir.1604?igsh=bWFkOTFvYWFxeGpv" target="_blank" className="group p-6 glass rounded-3xl border border-[rgba(255,255,255,0.08)] flex flex-col items-center gap-4 hover:bg-[var(--color-section-bg)] transition-all text-[var(--color-foreground)] hover:text-[#E4405F]">
                            <div className="p-4 bg-[var(--color-section-bg)] rounded-2xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(228,64,95,0.3)] transition-all">
                                <Instagram size={32} className="text-pink-400 group-hover:text-[#E4405F] transition-colors" />
                            </div>
                            <div className="text-center">
                                <h5 className="font-bold text-lg text-[var(--color-headings)]">Instagram</h5>
                                <p className="text-sm text-[var(--color-headings)]/70 mt-1">Follow me</p>
                            </div>
                        </a>
                    </div>


                </motion.div>
            </div>
        </section>
    );
}
