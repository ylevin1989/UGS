import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-card/30 border-t border-white/5 pt-12 pb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
                    {/* Brand and Description */}
                    <div className="space-y-6 lg:col-span-1">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-black tracking-tighter text-primary uppercase">
                                UGC AGENCY
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-sm">
                            {SITE_CONFIG.description}
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold">Контакты</h4>
                        <div className="space-y-4">
                            <a href={`mailto:${SITE_CONFIG.contact.email.clients}`} className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                                <Mail size={18} className="text-primary" />
                                <span className="text-sm">{SITE_CONFIG.contact.email.clients}</span>
                            </a>
                            <a href={`https://t.me/${SITE_CONFIG.contact.telegram.manager.replace('@', '')}`} target="_blank" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                                <MessageCircle size={18} className="text-primary" />
                                <span className="text-sm">{SITE_CONFIG.contact.telegram.manager}</span>
                            </a>
                            <div className="flex items-start space-x-3 text-muted-foreground">
                                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                                <span className="text-sm leading-tight">
                                    {SITE_CONFIG.company.address.hq}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold">Навигация</h4>
                        <nav className="flex flex-col space-y-3">
                            <Link href="/cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Кейсы</Link>
                            <Link href="/creators" className="text-sm text-muted-foreground hover:text-primary transition-colors">Креаторам</Link>
                            <Link href="/contacts" className="text-sm text-muted-foreground hover:text-primary transition-colors">Контакты</Link>
                            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                        </nav>
                    </div>

                    {/* Legal / Bot */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold">Для блогеров</h4>
                        <div className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Хочешь стать частью нашей команды креаторов?
                            </p>
                            <a
                                href={`https://t.me/${SITE_CONFIG.contact.telegram.bot.replace('@', '')}`}
                                target="_blank"
                                className="inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm font-semibold transition-all"
                            >
                                <MessageCircle size={16} className="text-primary" />
                                <span>Открыть телеграм бот</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-xs text-muted-foreground/60 space-x-4">
                        <span>© {new Date().getFullYear()} {SITE_CONFIG.name}</span>
                        <span className="hidden md:inline">|</span>
                        <span className="font-mono">{SITE_CONFIG.company.registrationNo}</span>
                    </div>
                    <div className="flex space-x-6 text-xs text-muted-foreground/60">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="/offer" className="hover:text-primary transition-colors">Offer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
