import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function PrivacyPage() {
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
                            Политика в отношении обработки <br />
                            <span className="text-primary italic">персональных данных</span>
                        </h1>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-12">
                        <section className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                            <h2 className="text-xl font-black uppercase mb-4 text-primary">1. Общие положения</h2>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                1.1. Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые <strong>{SITE_CONFIG.company.legalName}</strong> (далее — Оператор).
                            </p>
                            <p className="text-zinc-400 leading-relaxed font-medium mt-4">
                                1.2. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-xl font-black uppercase text-white border-l-4 border-primary pl-6">2. Основные понятия, используемые в Политике</h2>
                            <ul className="space-y-4 text-zinc-400 font-medium">
                                <li className="flex gap-4">
                                    <span className="text-primary font-black shrink-0">•</span>
                                    <span>Автоматизированная обработка персональных данных — обработка персональных данных с помощью средств вычислительной техники.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-primary font-black shrink-0">•</span>
                                    <span>Блокирование персональных данных — временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-primary font-black shrink-0">•</span>
                                    <span>Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств.</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-xl font-black uppercase text-white border-l-4 border-primary pl-6">3. Основные права и обязанности Оператора</h2>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                Оператор имеет право самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-xl font-black uppercase text-white border-l-4 border-primary pl-6">4. Основные права субъектов персональных данных</h2>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                Субъект персональных данных имеет право на получение информации, касающейся обработки его персональных данных, требовать уточнения своих персональных данных, их блокирования или уничтожения в случае, если данные являются неполными, устаревшими или неточными.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-xl font-black uppercase text-white border-l-4 border-primary pl-6">5. Обработка данных</h2>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                Оператор обрабатывает следующие персональные данные пользователя:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="glass p-4 rounded-xl text-sm font-bold border-white/5">Фамилия, имя, отчество</li>
                                <li className="glass p-4 rounded-xl text-sm font-bold border-white/5">Номер телефона</li>
                                <li className="glass p-4 rounded-xl text-sm font-bold border-white/5">Электронная почта</li>
                                <li className="glass p-4 rounded-xl text-sm font-bold border-white/5">Username в мессенджерах (Telegram)</li>
                            </ul>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-xl font-black uppercase text-white border-l-4 border-primary pl-6">6. Условия прекращения обработки</h2>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                Условием прекращения обработки персональных данных может являться достижение целей обработки персональных данных, истечение срока действия согласия субъекта или отзыв согласия субъектом.
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
