"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Cpu, Trophy, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Achievements', href: '#achievements', icon: Trophy },
    { name: 'Contact', href: '#contact', icon: Mail },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled || isOpen ? 'py-4 nav-glass' : 'py-8'}`}>
            <div className="section-container flex justify-between items-center">
                {/* Logo */}
                <Link href="#" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                        M
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight hidden sm:block group-hover:text-blue-400 transition-colors">
                        Mudassir
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 p-1 rounded-2xl backdrop-blur-md">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-5 py-2 text-sm font-semibold text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <Link href="#contact" className="btn-primary py-2 px-6 text-sm">
                        Let's Talk
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white active:scale-95 transition-all"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[110]"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed right-0 top-0 h-screen w-full max-w-sm bg-black z-[120] border-l border-white/10 p-8 pt-24"
                        >
                            <div className="flex flex-col gap-2">
                                {navItems.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-4 p-4 rounded-2xl text-white/50 hover:text-white hover:bg-white/5 transition-all group"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <Icon size={20} className="text-blue-500" />
                                                </div>
                                                <span className="text-lg font-bold">{item.name}</span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="absolute bottom-12 left-8 right-8">
                                <Link
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full btn-primary flex justify-center py-4 text-center"
                                >
                                    Get In Touch
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
