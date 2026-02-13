import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className="py-20 md:py-32">
                <div className="container max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">
                        Политика конфиденциальности
                    </h1>

                    <div className="prose prose-invert max-w-none space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
                            <p className="text-muted-foreground">
                                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
                                пользователей сайта UGC Performance Agency.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Собираемые данные</h2>
                            <p className="text-muted-foreground mb-2">
                                Мы собираем следующую информацию:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                <li>Имя и контактные данные (телефон, email, Telegram)</li>
                                <li>Информация о вашем бизнесе или творческой деятельности</li>
                                <li>Данные об использовании сайта (cookies, IP-адрес)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Цели обработки данных</h2>
                            <p className="text-muted-foreground mb-2">
                                Ваши данные используются для:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                <li>Связи с вами по вопросам сотрудничества</li>
                                <li>Предоставления услуг и выполнения договорных обязательств</li>
                                <li>Улучшения качества наших услуг</li>
                                <li>Отправки информационных и маркетинговых материалов (с вашего согласия)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. Защита данных</h2>
                            <p className="text-muted-foreground">
                                Мы применяем современные технические и организационные меры для защиты ваших персональных данных
                                от несанкционированного доступа, изменения, раскрытия или уничтожения.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Передача данных третьим лицам</h2>
                            <p className="text-muted-foreground">
                                Мы не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением случаев,
                                предусмотренных законодательством.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Ваши права</h2>
                            <p className="text-muted-foreground mb-2">
                                Вы имеете право:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                <li>Получать информацию о ваших персональных данных</li>
                                <li>Требовать исправления неточных данных</li>
                                <li>Требовать удаления ваших данных</li>
                                <li>Отозвать согласие на обработку данных</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. Контакты</h2>
                            <p className="text-muted-foreground">
                                По вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам по адресу:
                                hello@ugc-agency.com
                            </p>
                        </section>

                        <section>
                            <p className="text-sm text-muted-foreground">
                                Дата последнего обновления: {new Date().toLocaleDateString("ru-RU")}
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
