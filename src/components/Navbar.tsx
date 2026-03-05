"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Cpu, Trophy, GraduationCap, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Experience', href: '#experience', icon: Trophy },
    { name: 'Leadership', href: '#leadership', icon: Users },
    { name: 'Learning', href: '#learning', icon: GraduationCap },
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
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled || isOpen ? 'py-4' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 relative z-[101]">
                {/* Logo */}
                <Link href="#" className="text-2xl font-black tracking-tighter text-white group flex items-center gap-2">
                    <span className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center text-black group-active:scale-95 transition-transform">MM</span>
                    <span className="hidden sm:inline-block group-hover:text-primary transition-colors">Mudassir</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 glass px-8 py-3 rounded-2xl border border-white/5">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-[var(--color-headings)] hover:text-[var(--color-primary)] transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Mobile/Tablet Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden w-12 h-12 glass rounded-2xl flex items-center justify-center text-white active:scale-90 transition-all border border-white/10"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Sidebar - Slide in from right */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full max-w-xs bg-[var(--color-background)] z-[100] border-l border-white/10 shadow-2xl flex flex-col p-8 pt-24"
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
                                                className="flex items-center gap-4 text-xl font-bold py-4 px-6 rounded-2xl text-[var(--color-headings)] hover:bg-[var(--color-section-bg)] hover:text-[var(--color-primary)] transition-all active:scale-95 border border-transparent hover:border-white/5"
                                            >
                                                <div className="w-10 h-10 bg-[var(--color-section-bg)] rounded-xl flex items-center justify-center text-[var(--color-secondary)]">
                                                    <Icon size={20} />
                                                </div>
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="mt-auto space-y-6 pt-8 border-t border-white/5">
                                <h4 className="text-secondary font-mono text-xs uppercase tracking-widest text-center">Let's connect</h4>
                                <div className="flex justify-center gap-4">
                                    <Link href="#contact" onClick={() => setIsOpen(false)} className="w-full flex justify-center py-4 bg-gradient-accent text-black rounded-2xl font-bold active:scale-95 transition-transform">
                                        Hire Me
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
