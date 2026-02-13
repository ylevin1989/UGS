"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function TermsPage() {
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
                            Пользовательское <br />
                            <span className="text-primary italic">соглашение</span>
                        </h1>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-12">
                        <section className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                            <h2 className="text-xl font-black uppercase mb-4 text-primary">1. Предмет соглашения</h2>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                1.1. Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между <strong>{SITE_CONFIG.company.legalName}</strong> (далее — Администрация сайта) и пользователем сети Интернет (далее — Пользователь), возникающие при использовании сайта.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-xl font-black uppercase text-white border-l-4 border-primary pl-6">2. Условия использования</h2>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                2.1. Использование материалов и сервисов Сайта регулируется нормами действующего законодательства Российской Федерации.
                            </p>
                            <p className="text-zinc-400 leading-relaxed font-medium mt-4">
                                2.2. Настоящее Соглашение является публичной офертой. Получая доступ к материалам Сайта, Пользователь считается присоединившимся к настоящему Соглашению.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-xl font-black uppercase text-white border-l-4 border-primary pl-6">3. Обязательства Пользователя</h2>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                3.1. Пользователь соглашается не предпринимать действий, которые могут рассматриваться как нарушающие российское законодательство или нормы международного права, в том числе в сфере интеллектуальной собственности, авторских и/или смежных правах.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-xl font-black uppercase text-white border-l-4 border-primary pl-6">4. Прочие условия</h2>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                4.1. Все возможные споры, вытекающие из настоящего Соглашения или связанные с ним, подлежат разрешению в соответствии с действующим законодательством Российской Федерации.
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
