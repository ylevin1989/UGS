"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CREATORS = [
    { id: 1, name: "Anna", img: "/creator_filming_phone_1770949347410.png", delay: 0 },
    { id: 2, name: "Mark", img: "/case_study_viral_video_1770949503401.png", delay: 0.1 },
    { id: 3, name: "Sarah", img: "/ugc_hero_dark_tech_1770949327468.png", delay: 0.2 },
    { id: 4, name: "David", img: "/creator_filming_phone_1770949347410.png", delay: 0.3 },
    { id: 5, name: "Elena", img: "/case_study_viral_video_1770949503401.png", delay: 0.4 },
    { id: 6, name: "Boris", img: "/ugc_hero_dark_tech_1770949327468.png", delay: 0.5 },
];

export function CreatorGrid({ content }: { content: any }) {
    const gridData = content?.homeImages?.grid || CREATORS;

    // Ensure we have at least 6 items
    const creators = [...gridData, ...CREATORS].slice(0, 6);
    return (
        <div className="relative w-full min-h-[400px] lg:h-[600px] select-none pointer-events-none mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 md:gap-6 pointer-events-none">
                {/* Left Column */}
                <div className="space-y-4 md:space-y-6 lg:pt-20">
                    {creators.slice(0, 3).map((creator: any, i: number) => (
                        <motion.div
                            key={creator.id || i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (i * 0.1), duration: 1 }}
                            className="relative aspect-[4/5] rounded-2xl md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] bg-zinc-900"
                        >
                            <Image
                                src={creator.img}
                                alt={creator.name}
                                fill
                                className="object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 glass px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl lg:rounded-2xl text-[8px] lg:text-[10px] font-black uppercase tracking-widest border-white/10 text-white">
                                @{creator.name.toLowerCase()}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="space-y-4 md:space-y-6">
                    {creators.slice(3, 6).map((creator: any, i: number) => (
                        <motion.div
                            key={creator.id || i + 3}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (i * 0.1) + 0.3, duration: 1 }}
                            className="relative aspect-[4/5] rounded-2xl md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] bg-zinc-900"
                        >
                            <Image
                                src={creator.img}
                                alt={creator.name}
                                fill
                                className="object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 glass px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl lg:rounded-2xl text-[8px] lg:text-[10px] font-black uppercase tracking-widest border-white/10 text-white">
                                @{creator.name.toLowerCase()}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating Status Badges - Hidden on small mobile */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-6 lg:-left-12 z-30 glass px-4 py-2 lg:px-6 lg:py-4 rounded-2xl lg:rounded-3xl border-primary/20 shadow-2xl shadow-primary/5 min-w-[140px] lg:min-w-[180px] hidden sm:block"
            >
                <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-primary animate-pulse" />
                    <div className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-primary">Live Now</div>
                </div>
                <div className="mt-1 text-xs lg:text-sm font-bold opacity-80 text-white">Viral Glow Campaign</div>
            </motion.div>
        </div>
    );
}
