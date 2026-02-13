"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { TrendingUp, Users, Eye, Zap } from "lucide-react";

export function StatsSection({ content }: { content: any }) {
    const statsData = content?.stats || [];
    const iconList = [Users, Eye, TrendingUp, Zap];

    const statsItems = statsData.map((stat: any, index: number) => ({
        ...stat,
        icon: iconList[index % iconList.length]
    }));

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] -z-10" />

            <div className="container">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
                        Real-time <span className="text-primary">Performance</span>
                    </h2>
                    <p className="text-muted-foreground text-sm uppercase tracking-[0.3em] font-bold">
                        Data-driven results from our ecosystem
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {statsItems.map((stat: any, index: number) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group p-5 md:p-8 rounded-3xl md:rounded-[2.5rem] glass hover:border-primary/20 hover:bg-white/[0.05] transition-all duration-500 shadow-2xl"
                            >
                                <div className="flex justify-between items-start mb-4 md:mb-6">
                                    <div className={`p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 ${stat.color} group-hover:scale-110 transition-transform`}>
                                        <Icon size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <div className="text-[8px] md:text-[10px] font-black tracking-widest text-primary/40 group-hover:text-primary transition-colors uppercase">
                                        LIVE
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="text-2xl md:text-5xl font-black text-white tracking-tighter">
                                        {stat.value}
                                    </div>
                                    <div className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>

                                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/5 flex items-center space-x-2 text-[8px] md:text-[10px] font-bold text-zinc-500">
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary" />
                                    <span className="truncate">{stat.trend}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
