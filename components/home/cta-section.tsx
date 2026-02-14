"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/contact-modal";
import { ArrowRight } from "lucide-react";

export function CTASection({ lang = "ru" }: { lang?: string }) {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10" />

            <div className="container">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="glass p-8 md:p-16 lg:p-20 rounded-[3rem] md:rounded-[4rem] border-white/5 space-y-10 relative overflow-hidden"
                    >
                        {/* Decorative gradient */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(217,249,157,0.1),transparent_70%)] pointer-events-none" />

                        <div className="space-y-6 relative z-10">
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-sm block mb-2">
                                {lang === "ru" ? "Готовы к росту?" : "Ready to scale?"}
                            </span>
                            <h2 className={`font-black tracking-tighter uppercase mb-6 ${lang === "ru"
                                ? "text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.1]"
                                : "text-5xl md:text-8xl leading-[0.8]"
                                }`}>
                                {lang === "ru" ? (
                                    <>ДАВАЙТЕ СДЕЛАЕМ <br /><span className="text-primary italic">ВИРУСНЫЙ КОНТЕНТ</span></>
                                ) : (
                                    <>LET'S BUILD <br /><span className="text-primary italic">SOMETHING VIRAL</span></>
                                )}
                            </h2>
                            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                                {lang === "ru"
                                    ? "Оставьте заявку сейчас, и мы подготовим бесплатную стратегию продвижения вашего бренда через UGC-контент."
                                    : "Submit your request now, and we will prepare a free strategy for promoting your brand through UGC content."}
                            </p>
                        </div>

                        <div className="relative z-10 flex justify-center">
                            <ContactModal
                                type="client"
                                lang={lang}
                                trigger={
                                    <Button size="lg" className="h-20 px-12 rounded-full bg-primary text-primary-foreground font-black text-2xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group flex items-center justify-center">
                                        <div className="w-8 h-8 mr-3 invisible" aria-hidden="true" /> {/* Spacer for perfect centering */}
                                        {lang === "ru" ? "Начать проект" : "Start project"}
                                        <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform h-8 w-8" />
                                    </Button>
                                }
                            />
                        </div>

                        {/* Social proofs */}
                        <div className="pt-8 relative z-10 flex flex-wrap justify-center gap-8 opacity-40 grayscale items-center text-sm font-black uppercase tracking-widest">
                            <span>Instagram</span>
                            <span>TikTok</span>
                            <span>Google Ads</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
