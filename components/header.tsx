"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Phone, Globe } from "lucide-react";
import { ContactModal } from "@/components/contact-modal";
import { setLanguage } from "@/app/actions/content";
import { useRouter } from "next/navigation";

export function Header({ phone, currentLang = "ru" }: { phone?: string, currentLang?: string }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLang = () => {
        const newLang = currentLang === "ru" ? "en" : "ru";
        // Fast client-side cookie set
        document.cookie = `lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
        router.refresh();
    };

    const navLinks = currentLang === "ru" ? [
        { name: "Главная", href: "/" },
        { name: "Кейсы", href: "/cases" },
        { name: "Креаторам", href: "/creators" },
        { name: "Контакты", href: "/contacts" },
    ] : [
        { name: "Home", href: "/" },
        { name: "Cases", href: "/cases" },
        { name: "Creators", href: "/creators" },
        { name: "Contacts", href: "/contacts" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
            <div className="container">
                <div className={`glass rounded-full px-6 md:px-10 h-16 flex items-center justify-between transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-2xl shadow-2xl shadow-primary/10 border-white/10" : "bg-card/20"}`}>
                    <Link href="/" className="flex items-center space-x-2 group shrink-0">
                        <span className="text-xl md:text-2xl font-black tracking-tighter text-primary group-hover:scale-105 transition-transform">
                            UGC AGENCY
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-bold tracking-tight transition-all hover:text-primary ${pathname === item.href ? "text-primary" : "text-white/90"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4 md:space-x-8">
                        {phone && (
                            <a href={`tel:${phone.replace(/\D/g, '')}`} className="hidden md:flex items-center space-x-2 text-sm font-black hover:text-primary transition-colors">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone size={14} fill="currentColor" />
                                </div>
                                <span>{phone}</span>
                            </a>
                        )}
                        <button
                            onClick={toggleLang}
                            className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
                        >
                            <Globe size={14} className="group-hover:text-primary transition-colors" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{currentLang}</span>
                        </button>

                        <div className="hidden sm:block">
                            <ContactModal type="client" />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-foreground w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <motion.div
                initial={false}
                animate={mobileMenuOpen ? "open" : "closed"}
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
            >
                {/* Backdrop */}
                <motion.div
                    variants={{
                        open: { opacity: 1, backdropFilter: "blur(20px)" },
                        closed: { opacity: 0, backdropFilter: "blur(0px)" }
                    }}
                    className="absolute inset-0 bg-black/80"
                    onClick={() => setMobileMenuOpen(false)}
                />

                {/* Menu Content */}
                <motion.div
                    variants={{
                        open: { x: 0, opacity: 1 },
                        closed: { x: "100%", opacity: 0 }
                    }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="absolute top-0 right-0 bottom-0 w-[90%] sm:w-[85%] max-w-sm bg-zinc-950 border-l border-white/10 p-8 pt-24 flex flex-col shadow-2xl safe-area-padding"
                >
                    {/* Close button inside menu */}
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
                        aria-label="Close menu"
                    >
                        <X size={28} />
                    </button>

                    <nav className="flex flex-col space-y-6 mt-4">
                        {navLinks.map((item, i) => (
                            <motion.div
                                key={item.href}
                                variants={{
                                    open: { opacity: 1, x: 0 },
                                    closed: { opacity: 0, x: 20 }
                                }}
                                transition={{ delay: 0.1 + i * 0.05 }}
                            >
                                <Link
                                    href={item.href}
                                    className={`text-4xl font-black uppercase tracking-tighter transition-all ${pathname === item.href ? "text-primary border-b-4 border-primary inline-block" : "text-white/60 hover:text-white"
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <div className="mt-auto space-y-8 pb-10">
                        {phone && (
                            <motion.div
                                variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                                transition={{ delay: 0.4 }}
                                className="space-y-2"
                            >
                                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                                    {currentLang === "ru" ? "Связаться с нами" : "Contact us"}
                                </div>
                                <a href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center space-x-3 text-xl font-bold text-white hover:text-primary transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Phone size={18} fill="currentColor" />
                                    </div>
                                    <span>{phone}</span>
                                </a>
                            </motion.div>
                        )}

                        <motion.div
                            variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 10 } }}
                            transition={{ delay: 0.45 }}
                            className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className="flex items-center space-x-3">
                                <Globe size={20} className="text-primary" />
                                <span className="font-bold uppercase tracking-tight text-sm">
                                    {currentLang === "ru" ? "Язык сайта" : "Language"}
                                </span>
                            </div>
                            <button
                                onClick={toggleLang}
                                className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase"
                            >
                                {currentLang === "ru" ? "EN" : "RU"}
                            </button>
                        </motion.div>

                        <motion.div
                            variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}
                            transition={{ delay: 0.5 }}
                        >
                            <ContactModal
                                type="client"
                                trigger={
                                    <Button className="w-full rounded-2xl h-16 text-lg font-black uppercase tracking-tight shadow-xl shadow-primary/20">
                                        {currentLang === "ru" ? "Запустить рекламу" : "Start growth"}
                                    </Button>
                                }
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </header>
    );
}
