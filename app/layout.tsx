import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["UGC", "performance marketing", "TikTok", "Reels", "Shorts", "блогеры", "креаторы", "реклама"],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
};

import { TelegramWidget, YandexMetrika } from "@/components/social-widgets";
import { Toaster } from "sonner";
import { getContent } from "@/app/actions/content";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contentResult = await getContent();
  const content = contentResult?.data;
  const lang = contentResult?.lang || "ru";

  return (
    <html lang={lang} className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <div className="relative min-h-screen overflow-x-hidden">
          {children}
        </div>
        <TelegramWidget telegram={content?.contacts?.telegram} />
        <YandexMetrika id={content?.site?.yandexMetrikaId} />
        <Toaster theme="dark" position="top-center" />
      </body>
    </html>
  );
}
