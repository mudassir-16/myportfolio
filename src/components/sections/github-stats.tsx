"use client";

import { motion } from 'framer-motion';
import { Github, Star, GitBranch, GitCommit, GitPullRequest } from 'lucide-react';

export function GithubStats() {
    return (
        <section id="github" className="py-24 relative overflow-hidden">
            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-gradient">GitHub Activity</h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg mb-12 italic">
                        "Consistently contributing to open source and scaling solutions."
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 flex flex-col items-center justify-center border-none bg-white/[0.03]"
                    >
                        <div className="flex flex-wrap justify-center gap-12 w-full max-w-4xl opacity-0 animate-fade-in animate-fill-forwards" style={{ animationDelay: '0.3s' }}>
                            <div className="flex flex-col items-center gap-3">
                                <GitBranch className="text-blue-400 group-hover:scale-110 transition-transform" size={40} />
                                <span className="text-4xl font-black text-white">40+</span>
                                <span className="text-sm font-mono text-white/40 uppercase tracking-widest">Repositories</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <Star className="text-yellow-400 group-hover:scale-110 transition-transform" size={40} />
                                <span className="text-4xl font-black text-white">500+</span>
                                <span className="text-sm font-mono text-white/40 uppercase tracking-widest">Global Stars</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <GitCommit className="text-emerald-400 group-hover:scale-110 transition-transform" size={40} />
                                <span className="text-4xl font-black text-white">1.2k+</span>
                                <span className="text-sm font-mono text-white/40 uppercase tracking-widest">Commits</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <GitPullRequest className="text-purple-400 group-hover:scale-110 transition-transform" size={40} />
                                <span className="text-4xl font-black text-white">100+</span>
                                <span className="text-sm font-mono text-white/40 uppercase tracking-widest">Pull Requests</span>
                            </div>
                        </div>

                        <div className="mt-16 w-full max-w-5xl flex flex-col sm:flex-row gap-6 justify-center">
                            <div className="flex-1 min-h-[180px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-2 flex items-center justify-center">
                                <img
                                    src="https://github-readme-stats.vercel.app/api?username=mudassir-16&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&icon_color=8b5cf6&text_color=e2e8f0"
                                    alt="GitHub Stats"
                                    className="w-full h-auto px-4"
                                />
                            </div>
                            <div className="flex-1 min-h-[180px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-2 flex items-center justify-center">
                                <img
                                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=mudassir-16&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=e2e8f0"
                                    alt="Top Languages"
                                    className="w-full h-auto px-4"
                                />
                            </div>
                        </div>

                        <div className="mt-12 flex items-center gap-2 group cursor-pointer" onClick={() => window.open('https://github.com/mudassir-16', '_blank')}>
                            <Github className="text-white group-hover:text-primary transition-colors" size={20} />
                            <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors uppercase tracking-widest">Visit my GitHub profile</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
