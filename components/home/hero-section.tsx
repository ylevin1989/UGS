"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactModal } from "@/components/contact-modal";

import { CreatorGrid } from "./creator-grid";

export function HeroSection() {
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
                        transition={{ duration: 0.8 }}
                        className="space-y-10 lg:text-left z-20"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400">
                                    Top Rated <span className="text-primary italic">UGC Factory</span>
                                </span>
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter uppercase">
                                Reach <br />
                                <span className="text-primary tracking-tighter italic">Millions</span> <br />
                                in Minutes.
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl lg:mx-0 font-medium">
                                Мы заменяем скучную рекламу на живые видео, которые взламывают алгоритмы. <br className="hidden md:block" />
                                <span className="text-white font-bold">Только живой контент. Только результат.</span>
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 pt-4">
                            <ContactModal
                                type="client"
                                trigger={
                                    <Button
                                        size="lg"
                                        className="rounded-full h-16 md:h-18 px-10 text-lg md:text-xl font-black uppercase tracking-tight group shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                                    >
                                        Запустить рост
                                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                }
                            />
                            <Link href="/cases">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto rounded-full h-16 md:h-18 px-10 text-lg md:text-xl font-black uppercase tracking-tight border-white/10 hover:bg-white/5 hover:border-white/20 transition-all"
                                >
                                    Кейсы
                                </Button>
                            </Link>
                        </div>

                        {/* Social Proof Badges */}
                        <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/5">
                            <div className="flex items-center space-x-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-zinc-800 shadow-xl overflow-hidden relative">
                                            <div className="absolute inset-0 bg-primary/20" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-xs">
                                    <div className="flex text-primary mb-1">
                                        {[...Array(5)].map((_, i) => <span key={i} className="text-[14px]">★</span>)}
                                    </div>
                                    <span className="block font-black uppercase tracking-widest text-zinc-500">5000+ Creators</span>
                                </div>
                            </div>

                            <div className="hidden sm:block h-10 w-px bg-white/5" />

                            <div className="flex items-center space-x-3 opacity-40 grayscale hover:grayscale-0 transition-all">
                                <span className="text-sm font-black tracking-widest uppercase">Meta</span>
                                <span className="text-sm font-black tracking-widest uppercase">TikTok</span>
                                <span className="text-sm font-black tracking-widest uppercase">Google</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual - Upgraded Grid */}
                    <div className="relative">
                        <CreatorGrid />

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
