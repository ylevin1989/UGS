"use client";

import { useParams } from "next/navigation";
import { CASE_STUDIES } from "@/lib/constants";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, TrendingUp, Users, Target, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CaseDetailsPage() {
    const params = useParams();
    const caseItem = CASE_STUDIES.find((c) => c.id === params.id);

    if (!caseItem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-black">Кейс не найден</h1>
                    <Link href="/cases">
                        <Button variant="outline">Вернуться к кейсам</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <main className="pt-32 pb-24">
                <div className="container">
                    {/* Back link */}
                    <Link href="/cases" className="inline-flex items-center text-primary font-bold mb-12 hover:translate-x-[-4px] transition-transform">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to cases
                    </Link>

                    {/* Hero Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">
                                    {caseItem.category}
                                </span>
                                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                                    {caseItem.brand}
                                </h1>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                {caseItem.results.map((res, i) => (
                                    <div key={i} className="glass p-6 rounded-3xl border-white/10">
                                        <p className="text-3xl font-black text-primary mb-1">{res.value}</p>
                                        <p className="text-[10px] uppercase font-black tracking-widest text-zinc-500">{res.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <Image
                                src={caseItem.image}
                                alt={caseItem.brand}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        </motion.div>
                    </div>

                    {/* Details Content */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-16">
                            <section className="space-y-6">
                                <h2 className="text-3xl font-black uppercase flex items-center">
                                    <Target className="mr-4 text-primary" />
                                    The Challenge
                                </h2>
                                <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                                    {caseItem.challenge}
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-black uppercase flex items-center">
                                    <Zap className="mr-4 text-primary" />
                                    Our Solution
                                </h2>
                                <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                                    {caseItem.solution}
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-black uppercase">Final Verdict</h2>
                                <div className="glass p-10 rounded-[3rem] border-primary/20 bg-primary/5">
                                    <p className="text-2xl italic font-medium leading-relaxed">
                                        "{caseItem.fullStory}"
                                    </p>
                                </div>
                            </section>
                        </div>

                        <div className="space-y-8">
                            <div className="glass p-8 rounded-[3rem] border-white/10 sticky top-32">
                                <h3 className="text-xl font-black uppercase mb-6 tracking-tight">Project Stats</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between py-4 border-b border-white/5">
                                        <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Industry</span>
                                        <span className="font-black text-sm">{caseItem.category}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-4 border-b border-white/5">
                                        <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Growth</span>
                                        <span className="font-black text-sm text-primary">{caseItem.shortRoi}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Total Reach</span>
                                        <span className="font-black text-sm">{caseItem.shortResult}</span>
                                    </div>
                                </div>

                                <Link href="/#contact-form">
                                    <Button className="w-full mt-8 h-14 rounded-2xl font-black uppercase tracking-tight">
                                        Scale like this
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
