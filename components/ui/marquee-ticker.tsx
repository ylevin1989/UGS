"use client";

import { motion } from "framer-motion";

interface MarqueeTickerProps {
    items: string[];
    direction?: "left" | "right";
    speed?: number;
}

export function MarqueeTicker({
    items,
    direction = "left",
    speed = 40,
}: MarqueeTickerProps) {
    return (
        <div className="relative flex overflow-x-hidden bg-primary/90 py-3 md:py-4 select-none border-y border-white/10 rotate-[-1deg] md:rotate-[-2deg] scale-[1.02] z-40 shadow-2xl">
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : 0 }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex whitespace-nowrap"
            >
                {/* Render items multiple times for seamless scrolling */}
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        {items.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <span className="text-black text-xl md:text-3xl font-black uppercase tracking-tighter mx-4 md:mx-8">
                                    {item}
                                </span>
                                <span className="text-black/30 text-2xl md:text-4xl mx-2">✦</span>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
