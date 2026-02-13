"use client";

import { useEffect, useState } from "react";
import { getContent } from "@/app/actions/content";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { CTASection } from "@/components/home/cta-section";
import { Card } from "@/components/ui/card";
import {
  PROCESS_STEPS,
  CONTENT_FORMATS,
  CLIENT_FAQ
} from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  Package,
  MessageSquare,
  Theater,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  History,
  TrendingDown,
  Zap,
  Eye,
  ChevronDown,
  ArrowRight,
  Play,
  Star,
  Settings,
  ShieldCheck,
  Rocket,
  Users,
  Film,
  Sparkles,
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const IconMap: any = {
  Package,
  MessageSquare,
  Theater,
  Lightbulb
};

import { MarqueeTicker } from "@/components/ui/marquee-ticker";

export default function HomePage() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    getContent().then(setContent);
  }, []);

  if (!content) return null;

  return (
    <>
      <Header />
      <main>
        <HeroSection content={content} />

        <div className="relative -mt-16 mb-24 z-40">
          <MarqueeTicker
            items={["UGC Ads", "TikTok Strategy", "Viral Content", "Creative Strategy", "SaaS Reviews", "Growth Hacking"]}
            speed={30}
          />
        </div>

        {/* Problem Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-black uppercase tracking-[0.3em] text-[10px]"
              >
                The Problem
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] uppercase">
                Why classic ads <br />
                <span className="text-destructive tracking-tighter italic">don't work</span> anymore.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-10 glass rounded-[3rem] space-y-6 hover:border-destructive/30 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center text-destructive group-hover:scale-110 transition-transform">
                  <Zap size={32} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter">Низкий TRUST-барьер</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Пользователи научились игнорировать классическую рекламу. Вашему бренду нужен <span className="text-white font-bold">голос реальных людей</span>, а не голос диктора.
                </p>
              </Card>
              <Card className="p-10 glass rounded-[3rem] space-y-6 hover:border-primary/30 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter">Баннерная слепота</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  CTR нативной рекламы (UGC) в <span className="text-primary font-black">4 раза выше</span>, чем у классических креативов. Люди смотрят то, что им интересно.
                </p>
              </Card>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-[3rem] p-6 md:p-10 text-center max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">Наше решение</h3>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80 italic">
                {content.site.description}
              </p>
            </div>
          </div>
        </section>

        <StatsSection content={content} />

        {/* Process Section */}
        <section className="py-24 bg-background select-none overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[150px] -z-10" />

          <div className="container">
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-black uppercase tracking-[0.3em] text-xs"
              >
                Execution
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                From Brief to <br />
                <span className="text-primary italic">Viral Sales</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
              {(content.process || PROCESS_STEPS).map((step: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative group p-8 glass rounded-[2.5rem] hover:border-primary/30 transition-all duration-500 flex flex-col h-auto min-h-[320px] lg:min-h-[350px]"
                >
                  <div className="absolute top-2 right-4 text-9xl font-black text-white/[0.03] group-hover:text-primary/10 transition-colors pointer-events-none select-none">
                    {idx + 1}
                  </div>

                  <div className="space-y-6 relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-black font-black text-2xl shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                      0{step.step}
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-none">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Formats */}
        <section className="py-24">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-black uppercase tracking-[0.3em] text-[10px]"
              >
                Our Arsenal
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                Formats that <br />
                <span className="text-primary italic">Dominate</span> feeds.
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {(content.formats || CONTENT_FORMATS).map((format: any, idx: number) => {
                const Icon = IconMap[format.icon] || Lightbulb;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative h-[300px] md:h-[350px] glass rounded-[2.5rem] md:rounded-[3rem] overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />

                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-20">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-primary mb-4 md:mb-6 transition-transform group-hover:scale-110">
                        <Icon size={24} className="md:w-7 md:h-7" />
                      </div>
                      <h3 className="text-lg md:text-2xl font-black uppercase tracking-tighter text-white mb-2">{format.title}</h3>
                      <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                        {format.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Business Value Section */}
        <section className="py-20 bg-[#050505] text-white relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10" />

          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
                <Image
                  src={content.homeImages?.businessValue || "/creator_filming_phone_1770949347410.png"}
                  alt="Creator filming"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute bottom-8 left-8 glass p-4 rounded-2xl border-white/10">
                  <p className="text-primary font-bold text-sm tracking-widest uppercase">Premium UGC Production</p>
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                    Зачем вам <br /><span className="text-primary italic">это нужно?</span>
                  </h2>
                  <p className="text-zinc-400 text-lg">
                    Мы не просто делаем «красиво». Мы решаем конкретные боли бизнеса в 2024 году.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-black transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Снижение CAC</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Органические охваты Reels и TikTok бесплатны. Это делает стоимость одного привлеченного клиента в 5-10 раз дешевле, чем классический таргет.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-black transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Тотальное доверие</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        UGC-контент воспринимается как совет друга, а не реклама. Конверсия в покупку с таких видео в среднем выше на 35-50%.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-black transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Вечный актив</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Вы получаете полные права на контент. Используйте его в рекламе, на сайте, в карточках Wildberries, Ozon или Amazon без ограничений.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="py-12 overflow-hidden">
          <MarqueeTicker
            items={["Scalable ROI", "Global Reach", "High Conversion", "Authentic Vibes", "Performance Driven"]}
            direction="right"
            speed={40}
          />
        </div>

        <CTASection />

        {/* FAQ Section */}
        <section className="py-12 bg-card/20">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-black tracking-tighter mb-10 uppercase text-center">
              Частые вопросы
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {(content.faq?.clients || CLIENT_FAQ).map((item: any, idx: number) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border border-white/10 bg-white/[0.02] rounded-3xl px-8 overflow-hidden hover:bg-white/[0.05] transition-colors">
                  <AccordionTrigger className="text-lg font-bold py-6 hover:no-underline hover:text-primary transition-colors">
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
      </main>
      <Footer />
    </>
  );
}
