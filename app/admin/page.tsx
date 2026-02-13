"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getContent, updateContent } from "@/app/actions/content";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Save } from "lucide-react";

export default function AdminPage() {
    const [content, setContent] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        async function load() {
            const data = await getContent();
            setContent(data);
            setLoading(false);
        }
        load();
    }, []);

    const handleSave = async () => {
        setSaving(true);
        const result = await updateContent(content);
        if (result.success) {
            toast.success("Контент обновлен!");
        } else {
            toast.error("Ошибка при сохранении");
        }
        setSaving(false);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container pt-32 pb-24">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="flex justify-between items-end border-b border-white/10 pb-8">
                        <div>
                            <h1 className="text-4xl font-black uppercase tracking-tighter">Админ-панель</h1>
                            <p className="text-muted-foreground">Управление контентом сайта</p>
                        </div>
                        <Button
                            onClick={handleSave}
                            disabled={saving}
                            className="bg-primary text-black font-black uppercase tracking-tight h-12 px-8 rounded-xl"
                        >
                            {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                            Сохранить изменения
                        </Button>
                    </div>

                    <div className="grid gap-8">
                        {/* Основные настройки */}
                        <Card className="p-8 glass space-y-6">
                            <h2 className="text-xl font-black uppercase tracking-tight text-primary">Основные настройки</h2>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Название сайта</label>
                                    <Input
                                        value={content.site.name}
                                        onChange={(e) => setContent({ ...content, site: { ...content.site, name: e.target.value } })}
                                        className="bg-white/5 border-white/10 rounded-xl h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Описание (SEO)</label>
                                    <Textarea
                                        value={content.site.description}
                                        onChange={(e) => setContent({ ...content, site: { ...content.site, description: e.target.value } })}
                                        className="bg-white/5 border-white/10 rounded-xl min-h-[100px]"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Номер телефона</label>
                                        <Input
                                            value={content.site.phone}
                                            onChange={(e) => setContent({ ...content, site: { ...content.site, phone: e.target.value } })}
                                            className="bg-white/5 border-white/10 rounded-xl h-12"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Яндекс Метрика ID</label>
                                        <Input
                                            value={content.site.yandexMetrikaId}
                                            onChange={(e) => setContent({ ...content, site: { ...content.site, yandexMetrikaId: e.target.value } })}
                                            placeholder="Напр. 12345678"
                                            className="bg-white/5 border-white/10 rounded-xl h-12"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Социальные сети */}
                        <Card className="p-8 glass space-y-6">
                            <h2 className="text-xl font-black uppercase tracking-tight text-primary">Социальные сети и мессенджеры</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Telegram (username)</label>
                                    <Input
                                        value={content.contacts.telegram}
                                        onChange={(e) => setContent({ ...content, contacts: { ...content.contacts, telegram: e.target.value } })}
                                        className="bg-white/5 border-white/10 rounded-xl h-12"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">WhatsApp (номер)</label>
                                    <Input
                                        value={content.contacts.whatsapp}
                                        onChange={(e) => setContent({ ...content, contacts: { ...content.contacts, whatsapp: e.target.value } })}
                                        className="bg-white/5 border-white/10 rounded-xl h-12"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Instagram (username)</label>
                                    <Input
                                        value={content.contacts.instagram}
                                        onChange={(e) => setContent({ ...content, contacts: { ...content.contacts, instagram: e.target.value } })}
                                        className="bg-white/5 border-white/10 rounded-xl h-12"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">VK (ID или ник)</label>
                                    <Input
                                        value={content.contacts.vk}
                                        onChange={(e) => setContent({ ...content, contacts: { ...content.contacts, vk: e.target.value } })}
                                        className="bg-white/5 border-white/10 rounded-xl h-12"
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
