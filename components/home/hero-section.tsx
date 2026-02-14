"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ContactModal } from "@/components/contact-modal";

import { CreatorGrid } from "./creator-grid";

export function HeroSection({ content }: { content: any }) {
    const hero = content?.hero || {
        title1: "Reach",
        title2: "Millions",
        title3: "in Minutes.",
        subtitle: "Мы заменяем скучную рекламу на живые видео, которые взламывают алгоритмы. Только живой контент. Только результат.",
        ctaPrimary: "Запустить рост",
        ctaSecondary: "Кейсы"
    };

    return (
        <section className="relative min-h-screen flex items-center pt-28 pb-32 overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(132,204,22,0.12),transparent_70%)]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-10 text-center lg:text-left z-20"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400">
                                    {content.lang === "ru" || !content.lang ? (
                                        <>UGC-АГЕНТСТВО <span className="text-primary italic">№1</span></>
                                    ) : (
                                        <>Top Rated <span className="text-primary italic">UGC Factory</span></>
                                    )}
                                </span>
                            </motion.div>

                            <h1 className={`text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter uppercase text-white ${content.lang === "ru" || !content.lang ? "leading-[1.05] md:leading-[1]" : "leading-[0.85]"
                                }`}>
                                {hero.title1} <br />
                                <span className="text-primary tracking-tighter italic">{hero.title2}</span> <br />
                                {hero.title3}
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium whitespace-pre-line">
                                {hero.subtitle}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
                            <ContactModal
                                type="client"
                                trigger={
                                    <Button
                                        size="lg"
                                        className="rounded-full h-16 md:h-18 px-10 text-lg md:text-xl font-black uppercase tracking-tight group shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-black"
                                    >
                                        {hero.ctaPrimary}
                                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                }
                            />
                            <Link href="/cases" className="w-full sm:w-auto">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full rounded-full h-16 md:h-18 px-10 text-lg md:text-xl font-black uppercase tracking-tight border-white/10 hover:bg-white/5 hover:border-white/20 transition-all"
                                >
                                    {hero.ctaSecondary}
                                </Button>
                            </Link>
                        </div>

                        {content.creator_cta && (
                            <Link href={content.creator_cta.link} className="inline-block text-sm font-bold text-zinc-500 hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">
                                {content.creator_cta.text} →
                            </Link>
                        )}

                        {/* Social Proof Badges */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/5">
                            <div className="flex items-center space-x-4">
                                <div className="flex -space-x-4">
                                    {(hero.socialAvatars || ["/test_img_5_1771030911755.png", "/creator_julia_public_1771031028932.png", "/beauty_ugc_new_1771030030660.png"]).map((src: string, i: number) => (
                                        <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-background bg-zinc-800 shadow-xl overflow-hidden relative">
                                            <Image
                                                src={src}
                                                alt="Creator"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-left text-[10px] md:text-xs">
                                    <div className="flex text-primary mb-1">
                                        {[...Array(5)].map((_, i) => <span key={i} className="text-[12px] md:text-[14px]">★</span>)}
                                    </div>
                                    <span className="block font-black uppercase tracking-widest text-zinc-500">
                                        {content.stats?.[0]?.value || "5000+"} {content.stats?.[0]?.label || "Creators"}
                                    </span>
                                </div>
                            </div>

                            <div className="hidden sm:block h-10 w-px bg-white/5" />

                            <div className="flex items-center space-x-3 opacity-40 grayscale hover:grayscale-0 transition-all">
                                <span className="text-[10px] md:text-sm font-black tracking-widest uppercase text-white">Instagram</span>
                                <span className="text-[10px] md:text-sm font-black tracking-widest uppercase text-white">TikTok</span>
                                <span className="text-[10px] md:text-sm font-black tracking-widest uppercase text-white">Google</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual - Upgraded Grid */}
                    <div className="relative">
                        <CreatorGrid content={content} />

                        {/* Status Label (like Image 0) */}
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-12 right-0 hidden lg:flex items-center space-x-4 glass px-5 py-3 rounded-2xl border-white/10 shadow-2xl"
                        >
                            <div className="p-2 bg-primary/10 rounded-xl">
                                <div className="w-3 h-3 rounded-full bg-primary" />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                                Global CPM: <span className="text-white">€0.24</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
