"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { getContent } from "@/app/actions/content";

export function TelegramWidget() {
    const [telegram, setTelegram] = useState("");

    useEffect(() => {
        getContent().then(data => {
            if (data?.contacts?.telegram) {
                // Remove @ if present for the link
                const username = data.contacts.telegram.replace("@", "");
                setTelegram(username);
            }
        });
    }, []);

    if (!telegram) return null;

    return (
        <a
            href={`https://t.me/${telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#229ED9] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all group"
            aria-label="Contact us on Telegram"
        >
            <MessageCircle size={32} fill="white" className="group-hover:rotate-12 transition-transform" />
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        </a>
    );
}

export function YandexMetrika() {
    const [id, setId] = useState("");

    useEffect(() => {
        getContent().then(data => {
            if (data?.site?.yandexMetrikaId) {
                setId(data.site.yandexMetrikaId);
            }
        });
    }, []);

    if (!id) return null;

    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(${id}, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
                `,
            }}
        />
    );
}
