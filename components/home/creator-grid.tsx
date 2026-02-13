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

export function CreatorGrid() {
    return (
        <div className="relative w-full h-[600px] hidden lg:block select-none pointer-events-none">
            <div className="absolute inset-0 grid grid-cols-2 gap-6 pointer-events-none">
                {/* Left Column */}
                <div className="space-y-6 pt-20">
                    {CREATORS.slice(0, 3).map((creator, i) => (
                        <motion.div
                            key={creator.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: creator.delay, duration: 1 }}
                            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] bg-zinc-900"
                        >
                            <Image
                                src={creator.img}
                                alt={creator.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border-white/10">
                                @{creator.name.toLowerCase()}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {CREATORS.slice(3, 6).map((creator, i) => (
                        <motion.div
                            key={creator.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: creator.delay, duration: 1 }}
                            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] bg-zinc-900"
                        >
                            <Image
                                src={creator.img}
                                alt={creator.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border-white/10">
                                @{creator.name.toLowerCase()}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating Status Badges */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-12 z-30 glass px-6 py-4 rounded-3xl border-primary/20 shadow-2xl shadow-primary/5 min-w-[180px]"
            >
                <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="text-xs font-black uppercase tracking-widest text-primary">Live Now</div>
                </div>
                <div className="mt-1 text-sm font-bold opacity-80">Campaign: Viral Glow</div>
            </motion.div>
        </div>
    );
}
