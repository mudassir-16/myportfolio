"use client";

import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-20 relative max-w-7xl mx-auto">
            <div className="absolute -left-1/3 top-1/2 w-[800px] h-[800px] bg-zinc-900/10 rounded-full blur-[200px] pointer-events-none" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="flex flex-col lg:flex-row gap-16 items-start"
            >
                <div className="flex-1 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-sm tracking-widest text-[var(--color-primary)] font-mono uppercase font-bold">Who am I</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--color-headings)]">About Me</h3>
                    </div>

                    <div className="text-[var(--color-headings)] space-y-6 text-lg xl:text-xl leading-relaxed font-light">
                        <p className="border-l-4 border-[var(--color-primary)] pl-6 text-[var(--color-headings)] font-medium italic">
                            &quot;I have a deep passion for AI and love building automation tools that solve real-world problems.&quot;
                        </p>

                        <p className="opacity-90">
                            I am a driven software developer actively exploring the intersection of generative AI, automation, and full-stack development. Participating in hackathons is my playground for rapid prototyping and pushing the boundaries of what's possible with new technologies.
                        </p>

                        <p className="opacity-90">
                            I thrive on learning quickly and immediately applying those concepts to ship tangible products. Whether it's architecting a robust backend or creating a seamless developer experience, I consider myself a builder who thrives on execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        <div className="glass p-6 rounded-3xl border border-[rgba(255,255,255,0.08)] hover:border-[var(--color-secondary)] transition-colors">
                            <h4 className="text-[var(--color-headings)] font-bold text-lg mb-2">Hackathons</h4>
                            <p className="text-sm text-[var(--color-headings)] opacity-80">I regularly compete to challenge my skills and build MVPs under pressure.</p>
                        </div>

                        <div className="glass p-6 rounded-3xl border border-[rgba(255,255,255,0.08)] hover:border-[var(--color-secondary)] transition-colors">
                            <h4 className="text-[var(--color-headings)] font-bold text-lg mb-2">Automation</h4>
                            <p className="text-sm text-[var(--color-headings)] opacity-80">I automate tedious workflows using AI pipelines to save time and enhance productivity.</p>
                        </div>
                    </div>
                </div>


            </motion.div>
        </section>
    );
}
