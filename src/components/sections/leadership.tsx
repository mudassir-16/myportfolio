"use client";

import { motion } from 'framer-motion';
import { Users, Megaphone, Globe, ShieldCheck } from 'lucide-react';

const leaderships = [
    {
        role: "Vice-President",
        organization: "NextGen Innovators Club",
        description: "Leading strategic initiatives to foster innovation and cross-disciplinary collaboration among student developers.",
        icon: Users,
    },
    {
        role: "Organizer",
        organization: "SpeakEasy Club",
        description: "Orchestrating public speaking events and workshops to empower students with effective communication and leadership skills.",
        icon: Megaphone,
    },
    {
        role: "Community Outreach",
        organization: "Algorand Algobharat VITS",
        description: "Driving community growth and awareness for blockchain technology and the Algorand ecosystem within the local student body.",
        icon: Globe,
    },
    {
        role: "Member of IIC Council",
        organization: "Vignan Institute of Technology and Science",
        description: "Contributing to the Institution's Innovation Council to mentor and support campus-wide entrepreneurial ventures.",
        icon: ShieldCheck,
    }
];

export function Leadership() {
    return (
        <section id="leadership" className="py-24 px-6 md:px-20 relative max-w-7xl mx-auto">
            <div className="space-y-16">
                <div className="space-y-4 text-center">
                    <h2 className="text-sm tracking-widest text-[var(--color-primary)] font-mono uppercase font-bold">Involvement</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--color-headings)]">Leadership & Impact</h3>
                    <p className="text-[var(--color-headings)]/80 max-w-2xl mx-auto text-lg mt-4 leading-relaxed font-light">
                        Beyond coding, I actively contribute to my community through various leadership roles and organizational initiatives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {leaderships.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="glass rounded-3xl p-6 sm:p-8 hover:border-[var(--color-secondary)] transition-all group relative overflow-hidden"
                            >
                                <div className="flex items-start gap-6 relative z-10">
                                    <div className="w-16 h-16 bg-[var(--color-section-bg)] rounded-2xl flex items-center justify-center text-[var(--color-secondary)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all shrink-0">
                                        <Icon size={32} />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-[var(--color-headings)] tracking-tight">{item.role}</h4>
                                        <h5 className="text-[var(--color-primary)] font-mono font-bold text-sm uppercase tracking-wider">{item.organization}</h5>
                                        <p className="text-[var(--color-headings)]/70 leading-relaxed font-light pt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
