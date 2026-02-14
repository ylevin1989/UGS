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
import { Sparkles, Zap, DollarSign, ArrowRight } from "lucide-react";
import Image from "next/image";
import { CREATOR_FAQ } from "@/lib/constants";
import { ContactModal } from "@/components/contact-modal";
import { getContent } from "@/app/actions/content";
import { ClientMotionWrapper } from "@/components/client-motion-wrapper";

export default async function CreatorsPage() {
    const result = await getContent();

    if (!result) return null;
    const { data: content, lang } = result;

    const pageData = content.creatorsPage || {
        title: lang === "ru" ? "Снимай видео на телефон и зарабатывай." : "Shoot videos on your phone and earn money.",
        subtitle: lang === "ru"
            ? "Стабильный поток заказов от топовых брендов. Без поиска клиентов, без переговоров. Ты творишь — мы платим."
            : "A stable stream of orders from top brands. No searching for clients, no negotiations. You create — we pay.",
        image: "/creator_filming_phone_1770949347410.png",
        cta: lang === "ru" ? "Стать креатором" : "Become a creator",
        steps: lang === "ru" ? [
            { title: "Получи задачу", desc: "Выбери бренд, который тебе нравится. Мы подберем ТЗ под твой вайб." },
            { title: "Сними видео", desc: "Никакого сложного оборудования — только твой смартфон и хорошее освещение." },
            { title: "Забирай деньги", desc: "Оплата за каждый ролик + бонусы. Выплаты каждую неделю удобным способом." }
        ] : [
            { title: "Receive Task", desc: "Pick a brand you like. We'll find a task that fits your vibe." },
            { title: "Shoot Video", desc: "No complex gear needed — just your smartphone and good lighting." },
            { title: "Get Paid", desc: "Pay per video + bonuses. Weekly payouts via your preferred method." }
        ]
    };

    const benefits = lang === "ru" ? [
        { icon: Zap, title: "Быстрый старт", desc: "Заказы уже через 24 часа." },
        { icon: DollarSign, title: "Высокие чеки", desc: "Зарабатывай от 100k+ в месяц." },
        { icon: Sparkles, title: "Любые ниши", desc: "От Beauty до Tech и Gaming." },
        { icon: Zap, title: "Развитие", desc: "Бесплатное обучение монтажу." }
    ] : [
        { icon: Zap, title: "Fast Start", desc: "Get orders within 24 hours." },
        { icon: DollarSign, title: "High Payouts", desc: "Earn from $1500+ per month." },
        { icon: Sparkles, title: "Any Niche", desc: "From Beauty to Tech and Gaming." },
        { icon: Zap, title: "Growth", desc: "Free video editing training." }
    ];

    return (
        <>
            <Header phone={content.site?.phone} currentLang={lang} />
            <main>
                {/* Hero Section */}
                <section className="relative pt-24 lg:pt-24 pb-16 overflow-hidden min-h-[70vh] flex items-center">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(132,204,22,0.15),transparent_50%)]" />
                    </div>

                    <div className="container relative z-10 px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="space-y-6 lg:space-y-8">
                                <ClientMotionWrapper
                                    tag="div"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 backdrop-blur-sm"
                                >
                                    <Sparkles size={14} className="text-primary" />
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                                        {lang === "ru" ? "Присоединяйся к нашей сети креаторов" : "Join our Creator Network"}
                                    </span>
                                </ClientMotionWrapper>

                                <h1 className="text-4xl lg:text-7xl font-black leading-[1] lg:leading-[0.9] tracking-tighter uppercase">
                                    {pageData.title}
                                </h1>

                                <p className="text-base lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                                    {pageData.subtitle}
                                </p>

                                <ContactModal
                                    type="creator"
                                    lang={lang}
                                    trigger={
                                        <Button size="lg" className="rounded-2xl h-14 lg:h-16 px-8 lg:px-10 text-base lg:text-lg font-bold shadow-2xl shadow-primary/20 group">
                                            {pageData.cta}
                                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    }
                                />
                            </div>

                            <ClientMotionWrapper
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] lg:rounded-[3.rem] overflow-hidden border border-white/10 shadow-2xl mt-8 lg:mt-0"
                            >
                                <Image
                                    src={pageData.image}
                                    alt="Creator working"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                            </ClientMotionWrapper>
                        </div>
                    </div>
                </section>

                {/* How it Works */}
                <section className="py-16 bg-card/10 relative">
                    <div className="container px-6">
                        <h2 className="text-3xl lg:text-6xl font-black text-center mb-12 lg:mb-16 tracking-tighter uppercase leading-tight">
                            {lang === "ru" ? (
                                <>Как это <span className="text-primary italic">работает</span></>
                            ) : (
                                <>How it <span className="text-primary italic">works</span></>
                            )}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {pageData.steps.map((step: any, idx: number) => (
                                <ClientMotionWrapper
                                    tag="div"
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-full"
                                >
                                    <Card className={`p-8 lg:p-10 glass rounded-[2.5rem] h-full hover:translate-y-[-5px] lg:hover:translate-y-[-10px] transition-all duration-500 border-white/5 ${idx === 1 ? 'bg-primary/5' : ''}`}>
                                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 font-black text-2xl lg:text-3xl ${idx === 1 ? 'bg-primary text-primary-foreground' : 'bg-white/5 text-primary'}`}>0{idx + 1}</div>
                                        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                                            {step.desc}
                                        </p>
                                    </Card>
                                </ClientMotionWrapper>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16">
                    <div className="container px-6">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((b, i) => (
                                <div key={i} className="space-y-3 text-center px-2 lg:px-4">
                                    <b.icon className="mx-auto text-primary h-6 lg:h-8 w-6 lg:w-8" />
                                    <h4 className="font-bold text-sm lg:text-lg">{b.title}</h4>
                                    <p className="text-[10px] lg:text-sm text-muted-foreground">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 bg-card/10">
                    <div className="container max-w-4xl px-6">
                        <h2 className="text-3xl lg:text-5xl font-black text-center mb-10 lg:mb-12 uppercase tracking-tighter">
                            {lang === "ru" ? "Частые вопросы" : "FAQ"}
                        </h2>
                        <Accordion type="single" collapsible className="space-y-4">
                            {(content.faq?.creators || CREATOR_FAQ).map((item: any, idx: number) => (
                                <AccordionItem key={idx} value={`creator-faq-${idx}`} className="border border-white/5 bg-white/5 rounded-[2rem] lg:rounded-3xl px-6 lg:px-8 overflow-hidden">
                                    <AccordionTrigger className="text-base lg:text-lg font-bold py-5 lg:py-6 hover:no-underline hover:text-primary transition-colors text-left">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed whitespace-pre-line text-sm lg:text-base">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="py-16">
                    <div className="container px-6">
                        <div className="glass p-10 lg:p-20 rounded-[3rem] lg:rounded-[4rem] text-center border-white/5 relative overflow-hidden bg-primary/5">
                            <h2 className="text-3xl lg:text-6xl font-black tracking-tighter mb-6 lg:mb-8 uppercase leading-[1]">
                                {lang === "ru" ? (
                                    <>Готов <span className="text-primary italic">начать?</span></>
                                ) : (
                                    <>Ready to <span className="text-primary italic">start?</span></>
                                )}
                            </h2>
                            <p className="text-base lg:text-xl text-muted-foreground mb-8 lg:mb-12 max-w-2xl mx-auto">
                                {lang === "ru"
                                    ? "Присоединяйся к самой крупной сети UGC-креаторов в СНГ и начни зарабатывать на своем контенте уже завтра."
                                    : "Join the largest UGC creator network and start earning from your content tomorrow."}
                            </p>
                            <ContactModal
                                type="creator"
                                lang={lang}
                                trigger={
                                    <Button size="lg" className="h-14 lg:h-16 px-10 lg:px-12 rounded-xl lg:rounded-2xl bg-primary text-primary-foreground font-black text-lg lg:text-xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                                        {lang === "ru" ? "Заполнить анкету" : "Apply Now"}
                                    </Button>
                                }
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer lang={lang} />
        </>
    );
}
