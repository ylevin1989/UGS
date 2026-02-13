"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Zap, DollarSign, ArrowRight } from "lucide-react";
import Image from "next/image";
import { CREATOR_FAQ } from "@/lib/constants";
import { ContactModal } from "@/components/contact-modal";

export default function CreatorsPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-24 pb-16 overflow-hidden min-h-[70vh] flex items-center">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(132,204,22,0.15),transparent_50%)]" />
                    </div>

                    <div className="container relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 backdrop-blur-sm"
                                >
                                    <Sparkles size={14} className="text-primary" />
                                    <span className="text-xs font-bold tracking-widest uppercase text-primary">Join our Creator Network</span>
                                </motion.div>

                                <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase">
                                    Снимай видео на телефон и <br />
                                    <span className="text-primary italic">зарабатывай.</span>
                                </h1>

                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                                    Стабильный поток заказов от топовых брендов. Без поиска клиентов, без переговоров. Ты творишь — мы платим.
                                </p>

                                <ContactModal
                                    type="creator"
                                    trigger={
                                        <Button size="lg" className="rounded-2xl h-16 px-10 text-lg font-bold shadow-2xl shadow-primary/20 group">
                                            Стать креатором
                                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    }
                                />
                            </div>

                            <div className="relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="/creator_filming_phone_1770949347410.png"
                                    alt="Creator working"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it Works */}
                <section className="py-16 bg-card/10 relative">
                    <div className="container">
                        <h2 className="text-4xl md:text-6xl font-black text-center mb-16 tracking-tighter uppercase leading-tight">
                            Как это <span className="text-primary italic">работает</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="p-10 glass rounded-[2.5rem] hover:translate-y-[-10px] transition-all duration-500 border-white/5">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-8 font-black text-3xl">01</div>
                                <h3 className="text-2xl font-bold mb-4">Получи задачу</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    Выбери бренд, который тебе нравится. Мы подберем ТЗ под твой вайб.
                                </p>
                            </Card>
                            <Card className="p-10 glass rounded-[2.5rem] hover:translate-y-[-10px] transition-all duration-500 border-white/5 bg-primary/5">
                                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground mb-8 font-black text-3xl">02</div>
                                <h3 className="text-2xl font-bold mb-4">Сними видео</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    Никакого сложного оборудования — только твой смартфон и хорошее освещение.
                                </p>
                            </Card>
                            <Card className="p-10 glass rounded-[2.5rem] hover:translate-y-[-10px] transition-all duration-500 border-white/5">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-8 font-black text-3xl">03</div>
                                <h3 className="text-2xl font-bold mb-4">Забирай деньги</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    Оплата за каждый ролик + бонусы. Выплаты каждую неделю удобным способом.
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16">
                    <div className="container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Zap, title: "Быстрый старт", desc: "Заказы уже через 24 часа." },
                                { icon: DollarSign, title: "Высокие чеки", desc: "Зарабатывай от 100k+ в месяц." },
                                { icon: Sparkles, title: "Любые ниши", desc: "От Beauty до Tech и Gaming." },
                                { icon: Zap, title: "Развитие", desc: "Бесплатное обучение монтажу." }
                            ].map((b, i) => (
                                <div key={i} className="space-y-3 text-center px-4">
                                    <b.icon className="mx-auto text-primary h-8 w-8" />
                                    <h4 className="font-bold text-lg">{b.title}</h4>
                                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 bg-card/10">
                    <div className="container max-w-4xl">
                        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 uppercase tracking-tighter">
                            Частые вопросы
                        </h2>
                        <Accordion type="single" collapsible className="space-y-4">
                            {CREATOR_FAQ.map((item, idx) => (
                                <AccordionItem key={idx} value={`creator-faq-${idx}`} className="border border-white/5 bg-white/5 rounded-3xl px-8 overflow-hidden">
                                    <AccordionTrigger className="text-lg font-bold py-6 hover:no-underline hover:text-primary transition-colors text-left">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed whitespace-pre-line">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="py-16">
                    <div className="container">
                        <div className="glass p-12 md:p-20 rounded-[4rem] text-center border-white/5 relative overflow-hidden bg-primary/5">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">Готов <span className="text-primary italic">начать?</span></h2>
                            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                                Присоединяйся к самой крупной сети UGC-креаторов в СНГ и начни зарабатывать на своем контенте уже завтра.
                            </p>
                            <ContactModal
                                type="creator"
                                trigger={
                                    <Button size="lg" className="h-16 px-12 rounded-2xl bg-primary text-primary-foreground font-black text-xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                                        Заполнить анкету
                                    </Button>
                                }
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
