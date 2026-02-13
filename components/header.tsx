"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ContactModal } from "@/components/contact-modal";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Главная", href: "/" },
        { name: "Кейсы", href: "/cases" },
        { name: "Креаторам", href: "/creators" },
        { name: "Контакты", href: "/contacts" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
            <div className="container">
                <div className={`glass rounded-full px-6 md:px-10 h-16 flex items-center justify-between transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-2xl shadow-2xl shadow-primary/10 border-white/10" : "bg-card/20"}`}>
                    <Link href="/" className="flex items-center space-x-2 group">
                        <span className="text-xl md:text-2xl font-black tracking-tighter text-primary group-hover:scale-105 transition-transform">
                            UGC AGENCY
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
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
                        <ContactModal type="client" />
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-2 mx-4 glass rounded-3xl p-6 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
                    <nav className="flex flex-col space-y-2">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-xl font-bold py-3 px-4 rounded-2xl transition-all ${pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-white/5"
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <ContactModal
                                type="client"
                                trigger={
                                    <Button className="w-full rounded-2xl h-14 text-lg font-bold">
                                        Запустить рекламу
                                    </Button>
                                }
                            />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
