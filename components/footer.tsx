import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, MessageCircle, MapPin } from "lucide-react";

import { FooterSocials } from "./footer-socials";

export function Footer({ lang = "ru" }: { lang?: string }) {
    return (
        <footer className="bg-card/30 border-t border-white/5 pt-20 pb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand and Description */}
                    <div className="space-y-6 lg:col-span-1">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-black tracking-tighter text-primary uppercase">
                                UGC AGENCY
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-sm">
                            {lang === "ru"
                                ? "Мы строим IT-инфраструктуру для массового инфлюенс-маркетинга. Превращаем просмотры в деньги."
                                : "We build IT infrastructure for mass influence marketing. Turning views into revenue."}
                        </p>
                        <FooterSocials />
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-white">
                            {lang === "ru" ? "Контакты" : "Contacts"}
                        </h4>
                        <div className="space-y-4">
                            <a href={`mailto:${SITE_CONFIG.contact.email.clients}`} className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <Mail size={14} className="group-hover:text-primary" />
                                </div>
                                <span className="text-sm font-bold">{SITE_CONFIG.contact.email.clients}</span>
                            </a>
                            <div className="flex items-start space-x-3 text-muted-foreground">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin size={14} />
                                </div>
                                <span className="text-sm leading-tight font-medium">
                                    {SITE_CONFIG.company.address.hq}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-white">
                            {lang === "ru" ? "Навигация" : "Navigation"}
                        </h4>
                        <nav className="flex flex-col space-y-3">
                            <Link href="/cases" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                                {lang === "ru" ? "Кейсы" : "Cases"}
                            </Link>
                            <Link href="/creators" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                                {lang === "ru" ? "Креаторам" : "Creators"}
                            </Link>
                            <Link href="/contacts" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                                {lang === "ru" ? "Контакты" : "Contacts"}
                            </Link>
                            <Link href="/privacy" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                                {lang === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}
                            </Link>
                        </nav>
                    </div>

                    {/* Legal / Bot */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-white">
                            {lang === "ru" ? "Сотрудничество" : "Partnership"}
                        </h4>
                        <div className="space-y-4">
                            <p className="text-sm text-muted-foreground font-medium">
                                {lang === "ru"
                                    ? "Хочешь стать частью нашей команды креаторов?"
                                    : "Want to become part of our creator team?"}
                            </p>
                            <a
                                href={`https://t.me/${SITE_CONFIG.contact.telegram.bot.replace('@', '')}`}
                                target="_blank"
                                className="inline-flex items-center space-x-2 bg-primary text-black rounded-xl px-5 py-3 text-sm font-black uppercase tracking-tight transition-all hover:scale-105 active:scale-95"
                            >
                                <MessageCircle size={16} fill="currentColor" />
                                <span>{lang === "ru" ? "Стать креатором" : "Become a creator"}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 space-x-4">
                        <span>© {new Date().getFullYear()} {SITE_CONFIG.name}</span>
                        <span className="hidden md:inline">|</span>
                        <span>{SITE_CONFIG.company.legalName}</span>
                    </div>
                    <div className="flex space-x-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            {lang === "ru" ? "Согласие на обработку данных" : "Data Processing Agreement"}
                        </Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                            {lang === "ru" ? "Пользовательское соглашение" : "Terms of Service"}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
