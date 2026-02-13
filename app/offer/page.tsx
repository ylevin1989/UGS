"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function OfferPage() {
    return (
        <>
            <Header />
            <main className="py-20 md:py-32">
                <div className="container max-w-4xl">
                    <div className="space-y-4 mb-12">
                        <Link href="/" className="text-primary text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity flex items-center">
                            <ArrowLeft size={14} className="mr-2" />
                            Вернуться на главную
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                            Договор <br />
                            <span className="text-primary italic">публичной оферты</span>
                        </h1>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-12">
                        <section className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                            <h2 className="text-xl font-black uppercase mb-4 text-primary">1. Определение терминов</h2>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                1.1. В настоящей оферте, если контекст не требует иного, нижеприведенные термины имеют следующие значения:
                                <strong> «Оферта»</strong> — публичное предложение Исполнителя, адресованное любому физическому лицу или юридическому лицу, заключить с ним договор на оказание услуг.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-xl font-black uppercase text-white border-l-4 border-primary pl-6">2. Предмет договора</h2>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                2.1. Исполнитель обязуется оказать Заказчику услуги по созданию и продвижению UGC-контента, а Заказчик обязуется принять и оплатить услуги в порядке и на условиях, определенных настоящим Договором.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-xl font-black uppercase text-white border-l-4 border-primary pl-6">3. Акцепт оферты</h2>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                3.1. Полным и безоговорочным акцептом настоящей публичной оферты является оплата Заказчиком услуг Исполнителя или заполнение формы заявки на сайте.
                            </p>
                        </section>

                        <section className="pt-12 border-t border-white/5 flex justify-between items-center text-zinc-500 font-bold uppercase text-[10px] tracking-widest">
                            <span>{SITE_CONFIG.name} Legal Compliance</span>
                            <span>Обновлено: {new Date().toLocaleDateString("ru-RU")}</span>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
