"use client";

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, ArrowUpRight, Send } from 'lucide-react';

const contactLinks = [
    {
        name: "Email",
        value: "mohammadmudassir1604@gmail.com",
        href: "mailto:mohammadmudassir1604@gmail.com",
        icon: <Mail size={24} />,
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        name: "LinkedIn",
        value: "Mohammed Mudassir",
        href: "https://www.linkedin.com/in/mohammed-mudassir-82882933a/",
        icon: <Linkedin size={24} />,
        color: "text-blue-600",
        bg: "bg-blue-600/10"
    },
    {
        name: "GitHub",
        value: "mudassir-16",
        href: "https://github.com/mudassir-16",
        icon: <Github size={24} />,
        color: "text-white",
        bg: "bg-white/10"
    },
    {
        name: "Instagram",
        value: "@mudassir.1604",
        href: "https://www.instagram.com/mudassir.1604?igsh=bWFkOTFvYWFxeGpv",
        icon: <Instagram size={24} />,
        color: "text-pink-500",
        bg: "bg-pink-500/10"
    }
];

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-gradient">Get In Touch</h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Let's collaborate on your next big idea or just have a chat about technology.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-6">
                        {contactLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.href}
                                target="_blank"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="glass-card p-6 flex items-center justify-between group bg-white/[0.03] border-white/5 hover:bg-white/[0.06] transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl ${link.bg} ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        {link.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest">{link.name}</h4>
                                        <p className="text-white font-semibold truncate max-w-[180px] sm:max-w-none">{link.value}</p>
                                    </div>
                                </div>
                                <ArrowUpRight size={20} className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3 glass-card p-8 sm:p-12 border-none bg-white/[0.03]"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Your Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Your Email</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Message</label>
                                <textarea rows={4} placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-3 py-4 group">
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
