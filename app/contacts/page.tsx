import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { SITE_CONFIG, CLIENT_FAQ } from "@/lib/constants";
import { Mail, MessageCircle, Clock, MapPin, ExternalLink } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { getContent } from "@/app/actions/content";
import { ClientMotionWrapper } from "@/components/client-motion-wrapper";

export default async function ContactsPage() {
    const result = await getContent();

    if (!result) return null;
    const { data: content, lang } = result;

    const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${SITE_CONFIG.company.coordinates.lng}%2C${SITE_CONFIG.company.coordinates.lat}&z=14&l=map&pt=${SITE_CONFIG.company.coordinates.lng}%2C${SITE_CONFIG.company.coordinates.lat},pm2rdl`;

    return (
        <>
            <Header phone={content.site?.phone} currentLang={lang} />
            <main className="pt-32 pb-16">
                <div className="container">
                    <div className="text-center mb-20">
                        <ClientMotionWrapper
                            tag="h1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase"
                        >
                            {lang === "ru" ? (
                                <>Свяжитесь с <span className="text-primary italic">нами</span></>
                            ) : (
                                <>Contact <span className="text-primary italic">us</span></>
                            )}
                        </ClientMotionWrapper>
                        <ClientMotionWrapper
                            tag="p"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            {lang === "ru"
                                ? "Мы всегда на связи и готовы обсудить вашу следующую взрывную кампанию. Пхукет ждет вас!"
                                : "We are always in touch and ready to discuss your next big campaign. Phuket is waiting for you!"}
                        </ClientMotionWrapper>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mb-16">
                        {/* Quick Contact Cards */}
                        <ClientMotionWrapper
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Card className="p-10 glass rounded-[3rem] space-y-6 border-white/5 hover:border-primary/20 transition-all h-full">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail size={28} />
                                </div>
                                <h3 className="text-2xl font-bold">Email</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase font-black tracking-widest mb-1">
                                            {lang === "ru" ? "Для клиентов" : "For Clients"}
                                        </p>
                                        <a href={`mailto:${SITE_CONFIG.contact.email.clients}`} className="text-lg font-bold hover:text-primary transition-colors">
                                            {SITE_CONFIG.contact.email.clients}
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase font-black tracking-widest mb-1">
                                            {lang === "ru" ? "Для креаторов" : "For Creators"}
                                        </p>
                                        <a href={`mailto:${SITE_CONFIG.contact.email.creators}`} className="text-lg font-bold hover:text-primary transition-colors">
                                            {SITE_CONFIG.contact.email.creators}
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </ClientMotionWrapper>

                        <ClientMotionWrapper
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Card className="p-10 glass rounded-[3rem] space-y-6 border-white/5 hover:border-primary/20 transition-all h-full">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <MessageCircle size={28} />
                                </div>
                                <h3 className="text-2xl font-bold">Telegram</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase font-black tracking-widest mb-1">
                                            {lang === "ru" ? "Менеджер" : "Manager"}
                                        </p>
                                        <a href={`https://t.me/${SITE_CONFIG.contact.telegram.manager.replace('@', '')}`} target="_blank" className="text-lg font-bold hover:text-primary transition-colors flex items-center">
                                            {SITE_CONFIG.contact.telegram.manager} <ExternalLink size={14} className="ml-2 opacity-50" />
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase font-black tracking-widest mb-1">
                                            {lang === "ru" ? "Бот для креаторов" : "Creator Bot"}
                                        </p>
                                        <a href={`https://t.me/${SITE_CONFIG.contact.telegram.bot.replace('@', '')}`} target="_blank" className="text-lg font-bold hover:text-primary transition-colors flex items-center">
                                            {SITE_CONFIG.contact.telegram.bot} <ExternalLink size={14} className="ml-2 opacity-50" />
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </ClientMotionWrapper>

                        <ClientMotionWrapper
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Card className="p-10 glass rounded-[3rem] space-y-6 border-white/5 hover:border-primary/20 transition-all h-full">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Clock size={28} />
                                </div>
                                <h3 className="text-2xl font-bold">{lang === "ru" ? "Часы работы" : "Working Hours"}</h3>
                                <p className="text-lg font-bold leading-tight">
                                    {SITE_CONFIG.contact.workingHours}
                                </p>
                                <p className="text-sm text-muted-foreground italic">
                                    {lang === "ru"
                                        ? "Мы базируемся на Пхукете, но работаем по всему миру в 4 часовых поясах."
                                        : "We are based in Phuket, but work worldwide across 4 time zones."}
                                </p>
                            </Card>
                        </ClientMotionWrapper>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                        {/* Map and HQ Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter italic">International HQ</h2>
                                <div className="space-y-6 text-lg text-muted-foreground">
                                    <div className="flex gap-4">
                                        <MapPin className="text-primary shrink-0 mt-1" />
                                        <p className="font-bold text-foreground">{SITE_CONFIG.company.address.full}</p>
                                    </div>
                                    <p className="leading-relaxed">
                                        {lang === "ru"
                                            ? "Наша штаб-квартира расположена в самом сердце Юго-Восточной Азии — на Пхукете. Это позволяет нам работать с клиентами по всему миру, объединяя креаторов из СНГ, Европы и Азии."
                                            : "Our headquarters is located in the heart of Southeast Asia — in Phuket. This allows us to work with clients worldwide, bringing together creators from the CIS, Europe, and Asia."}
                                    </p>
                                    <p className="leading-relaxed">
                                        {lang === "ru"
                                            ? "Мы всегда рады гостям! Напишите нам в Telegram, чтобы договориться о встрече за кофе."
                                            : "We are always happy to have guests! Message us on Telegram to arrange a coffee meeting."}
                                    </p>
                                </div>
                            </div>

                            {/* Legal Info Card */}
                            <Card className="p-8 bg-zinc-900/50 border-white/5 rounded-[2rem]">
                                <h4 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-6">
                                    {lang === "ru" ? "Юридическая информация" : "Legal Information"}
                                </h4>
                                <div className="space-y-3 text-sm">
                                    <p><span className="text-muted-foreground">Company Name:</span> <span className="font-bold">{SITE_CONFIG.company.legalName}</span></p>
                                    <p><span className="text-muted-foreground">Registration No:</span> <span className="font-mono">{SITE_CONFIG.company.registrationNo}</span></p>
                                    <p><span className="text-muted-foreground">Address:</span> 88/8 Moo 5, Chalong, Phuket, Thailand</p>
                                </div>
                            </Card>
                        </div>

                        {/* Yandex Map Container */}
                        <div className="relative rounded-[3rem] overflow-hidden aspect-video lg:aspect-square border border-white/10 shadow-2xl">
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)", opacity: 0.8 }}
                                title="Office Location"
                            ></iframe>
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* About Us Section */}
                    <div className="py-16 border-t border-white/5">
                        <div className="max-w-4xl">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 uppercase leading-[0.9]">
                                {lang === "ru" ? (
                                    <>Мы превращаем <br /><span className="text-primary italic">просмотры в деньги.</span></>
                                ) : (
                                    <>We turn <br /><span className="text-primary italic">views into revenue.</span></>
                                )}
                            </h2>
                            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    {lang === "ru"
                                        ? <>Мы не просто "покупаем рекламу у блогеров". Мы строим <span className="text-foreground font-bold">IT-инфраструктуру</span> для массового инфлюенс-маркетинга.</>
                                        : <>We don't just "buy ads from bloggers". We build <span className="text-foreground font-bold">IT infrastructure</span> for mass influence marketing.</>}
                                </p>
                                <p>
                                    {lang === "ru"
                                        ? "Рынок изменился. Один дорогой блогер больше не дает гарантий. Гарантию дает система. Мы создали платформу, которая объединяет сотни микро-креаторов, генерирующих гигабайты контента для вашего бренда."
                                        : "The market has changed. One expensive blogger no longer provides guarantees. The system provides the guarantee. We created a platform that connects hundreds of micro-creators, generating gigabytes of content for your brand."}
                                </p>
                                <p>
                                    {lang === "ru"
                                        ? "Наша миссия: Дать брендам прогнозируемый канал трафика из TikTok, Reels и Shorts, а талантливым креаторам — возможность зарабатывать на своем творчестве, где бы они ни находились."
                                        : "Our mission: To provide brands with a predictable traffic channel from TikTok, Reels, and Shorts, and to give talented creators the opportunity to earn from their creativity, wherever they are."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ on Contacts Page */}
                    <div className="py-16 border-t border-white/5">
                        <h2 className="text-4xl font-black tracking-tighter mb-12 uppercase text-center">
                            {lang === "ru" ? "FAQ для клиентов" : "Client FAQ"}
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="space-y-4">
                                {(content.faq?.clients || CLIENT_FAQ).map((item: any, idx: number) => (
                                    <AccordionItem key={idx} value={`faq-${idx}`} className="border border-white/5 bg-white/5 rounded-3xl px-8 overflow-hidden">
                                        <AccordionTrigger className="text-lg font-bold py-6 hover:no-underline text-left">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </main>
            <Footer lang={lang} />
        </>
    );
}
