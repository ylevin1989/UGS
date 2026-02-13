"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Play, TrendingUp, Users, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/constants";

export default function CasesPage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-24">
                <div className="container">
                    <div className="text-center mb-20 max-w-4xl mx-auto space-y-4">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-primary font-black uppercase tracking-[0.4em] text-xs"
                        >
                            Proven Results
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-[0.85]"
                        >
                            Our <span className="text-primary italic">Success</span> Stories
                        </motion.h1>
                        <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                            Мы превращаем охваты в реальную прибыль. Посмотрите, как мы масштабируем бренды через UGC-стратегии.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {CASE_STUDIES.map((caseItem, idx) => (
                            <motion.div
                                key={caseItem.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group h-full"
                            >
                                <Card className="h-full flex flex-col overflow-hidden glass rounded-[3rem] border-white/5 hover:border-primary/30 transition-all duration-500">
                                    <div className="aspect-[4/5] relative overflow-hidden rounded-[3rem] m-2">
                                        <Image
                                            src={caseItem.image}
                                            alt={caseItem.brand}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-2xl shadow-primary/40 scale-75 group-hover:scale-100 transition-transform">
                                                <Play fill="currentColor" size={32} className="ml-1" />
                                            </div>
                                        </div>

                                        <div className="absolute bottom-8 left-8 right-8 space-y-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/20 px-3 py-1 rounded-full backdrop-blur-md border border-primary/20">
                                                {caseItem.category}
                                            </span>
                                            <h3 className="text-3xl font-black text-white">{caseItem.brand}</h3>
                                        </div>
                                    </div>

                                    <div className="p-10 pt-6 flex flex-col flex-grow space-y-10">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-1">
                                                <div className="flex items-center text-primary space-x-2">
                                                    <Users size={14} />
                                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Reach</span>
                                                </div>
                                                <p className="text-2xl font-black">{caseItem.shortResult}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex items-center text-primary space-x-2">
                                                    <TrendingUp size={14} />
                                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Growth</span>
                                                </div>
                                                <p className="text-2xl font-black">{caseItem.shortRoi}</p>
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <Link href={`/cases/${caseItem.id}`} className="block">
                                                <button className="w-full h-16 rounded-2xl bg-white/5 hover:bg-primary hover:text-black hover:scale-[1.02] border border-white/10 flex items-center justify-center font-black uppercase tracking-tighter transition-all">
                                                    Детальный разбор
                                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 md:p-24 glass rounded-[4rem] text-center border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 -z-10" />
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                                Хотите такие же <br />
                                <span className="text-primary italic">результаты?</span>
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                                Оставьте заявку на бесплатный расчет медиаплана. Мы подберем креаторов и стратегию под ваш бюджет.
                            </p>
                            <Link href="/#contact-form">
                                <button className="h-20 px-16 rounded-full bg-primary text-black font-black text-2xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                                    ПОЛУЧИТЬ СТРАТЕГИЮ
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
