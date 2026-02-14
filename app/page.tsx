import { getContent } from "@/app/actions/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYPERLIFT | UGC Performance Agency No.1",
  description: "Мы строим IT-инфраструктуру для массового инфлюенс-маркетинга. Превращаем просмотры в деньги через виральный UGC контент.",
};

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
  Zap,
  Eye,
} from "lucide-react";
import { MarqueeTicker } from "@/components/ui/marquee-ticker";
import Image from "next/image";
import { ClientMotionWrapper } from "@/components/client-motion-wrapper";

const IconMap: any = {
  Package,
  MessageSquare,
  Theater,
  Lightbulb
};

export default async function HomePage() {
  const result = await getContent();

  if (!result) return null;
  const { data: content, lang } = result;
  const sections = content.sections;

  return (
    <>
      <Header phone={content.site.phone} currentLang={lang} />
      <main>
        <HeroSection content={content} />

        <div className="relative -mt-16 mb-24 z-40">
          <MarqueeTicker
            items={lang === "ru" ? ["UGC Реклама", "Стратегия TikTok", "Виральный контент", "Креатив", "SaaS Обзоры", "Growth Hacking"] : ["UGC Ads", "TikTok Strategy", "Viral Content", "Creative Strategy", "SaaS Reviews", "Growth Hacking"]}
            speed={30}
          />
        </div>

        {/* Problem Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
              <ClientMotionWrapper
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                tag="span"
                className="text-primary font-black uppercase tracking-[0.3em] text-[10px]"
              >
                {sections.problem.tag}
              </ClientMotionWrapper>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] uppercase">
                {sections.problem.title} <br />
                <span className="text-destructive tracking-tighter italic">{sections.problem.titleItalic}</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-10 glass rounded-[3rem] space-y-6 hover:border-destructive/30 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center text-destructive group-hover:scale-110 transition-transform">
                  <Zap size={32} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter">{sections.problem.card1.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {sections.problem.card1.desc}
                </p>
              </Card>
              <Card className="p-10 glass rounded-[3rem] space-y-6 hover:border-primary/30 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter">{sections.problem.card2.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {sections.problem.card2.desc}
                </p>
              </Card>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-[3rem] p-8 md:p-12 text-center w-full">
              <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">{sections.problem.solution}</h3>
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
              <ClientMotionWrapper
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                tag="span"
                className="text-primary font-black uppercase tracking-[0.3em] text-xs"
              >
                {sections.execution.tag}
              </ClientMotionWrapper>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                {sections.execution.title} <br />
                <span className="text-primary italic">{sections.execution.titleItalic}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
              {(content.process || PROCESS_STEPS).map((step: any, idx: number) => (
                <ClientMotionWrapper
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 1.2,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative group p-8 glass rounded-[2.5rem] hover:border-primary/30 transition-all duration-500 flex flex-col h-auto min-h-[320px] lg:min-h-[350px]"
                >
                  <div className="absolute top-2 right-4 text-9xl font-black text-white/[0.03] group-hover:text-primary/10 transition-colors pointer-events-none select-none">
                    {idx + 1}
                  </div>

                  <div className="space-y-6 relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-black font-black text-2xl shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                      0{step.step || idx + 1}
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
                </ClientMotionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Content Formats */}
        <section className="py-24">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
              <ClientMotionWrapper
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                tag="span"
                className="text-primary font-black uppercase tracking-[0.3em] text-[10px]"
              >
                {sections.arsenal.tag}
              </ClientMotionWrapper>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                {sections.arsenal.title} <br />
                <span className="text-primary italic">{sections.arsenal.titleItalic}</span>.
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {(content.formats || CONTENT_FORMATS).map((format: any, idx: number) => {
                const Icon = IconMap[format.icon] || Lightbulb;
                return (
                  <ClientMotionWrapper
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
                  </ClientMotionWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* Business Value Section */}
        <section className="py-20 bg-[#050505] text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10" />

          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
                <Image
                  src={content.homeImages?.businessValue || "/creator_filming_phone_1770949347410.png"}
                  alt="Creator filming"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 glass p-4 rounded-2xl border-white/10">
                  <p className="text-primary font-bold text-sm tracking-widest uppercase">Premium UGC Production</p>
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                    {sections.value.title} <br /><span className="text-primary italic">{sections.value.titleItalic}</span>
                  </h2>
                  <p className="text-zinc-400 text-lg">
                    {sections.value.subtitle}
                  </p>
                </div>

                <div className="space-y-8">
                  {sections.value.points.map((point: any, idx: number) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-black transition-all">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="py-12 overflow-hidden">
          <MarqueeTicker
            items={lang === "ru" ? ["Масштабируемый ROI", "Глобальный охват", "Высокая конверсия", "Живой вайб", "Результат"] : ["Scalable ROI", "Global Reach", "High Conversion", "Authentic Vibes", "Performance Driven"]}
            direction="right"
            speed={40}
          />
        </div>

        <CTASection lang={lang} />

        {/* FAQ Section */}
        <section className="py-12 bg-card/20">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-black tracking-tighter mb-10 uppercase text-center">
              {sections.faq}
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
      <Footer lang={lang} />
    </>
  );
}

