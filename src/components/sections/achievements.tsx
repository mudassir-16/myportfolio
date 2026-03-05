"use client";

import { motion } from 'framer-motion';
import { Trophy, Award, Target, Star, ExternalLink } from 'lucide-react';

const achievements = [
    {
        title: "Winner - Global AI Hackathon 2024",
        organization: "OpenAI & Microsoft",
        description: "Developed 'OpenIdeaX', an AI-powered co-creation engine that won the first prize among 500+ global teams.",
        date: "Oct 2024",
        icon: <Trophy className="text-yellow-400" />,
        link: "#"
    },
    {
        title: "Top 10 Finalist - Cybersecurity Hack",
        organization: "Ethical Hacking Council",
        description: "Built 'SEDS', a social engineering detection system that was recognized for its innovative vision-OCR approach.",
        date: "Aug 2024",
        icon: <Award className="text-blue-400" />,
        link: "#"
    },
    {
        title: "Vice-President - Innovators Club",
        organization: "NextGen Innovators",
        description: "Leading a community of 200+ developers, organizing hands-on workshops on GenAI and automation.",
        date: "2023 - Present",
        icon: <Target className="text-purple-400" />,
        link: "#"
    },
    {
        title: "Academic Excellence Award",
        organization: "Vignan Institute",
        description: "Recognized for maintaining top-tier grades while contributing significantly to the campus tech ecosystem.",
        date: "2023",
        icon: <Star className="text-emerald-400" />,
        link: "#"
    }
];

export function Achievements() {
    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-gradient">Achievements</h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Milestones and recognitions from my journey in technology and leadership.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-8 group flex items-start gap-6 border-none bg-white/[0.03]"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-black/20">
                                {item.icon}
                            </div>

                            <div className="flex-1 space-y-2">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h4>
                                    <span className="text-xs font-mono text-white/30 uppercase tracking-widest pt-1">
                                        {item.date}
                                    </span>
                                </div>
                                <h5 className="text-primary/70 font-semibold text-sm uppercase tracking-wider">
                                    {item.organization}
                                </h5>
                                <p className="text-white/60 text-sm leading-relaxed pt-2">
                                    {item.description}
                                </p>

                                {item.link !== "#" && (
                                    <div className="pt-4">
                                        <a href={item.link} className="inline-flex items-center gap-2 text-xs font-bold text-white/40 hover:text-white transition-colors">
                                            VERIFY CREDENTIAL <ExternalLink size={14} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
