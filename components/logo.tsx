import React from 'react';

interface LogoProps {
    className?: string;
    iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
    return (
        <div className={`flex items-center space-x-2.5 ${className}`}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 160 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
            >
                <defs>
                    <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <pattern id="dot-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
                        <circle cx="4" cy="4" r="1.2" fill="#D9F99D" opacity="0.4" />
                    </pattern>
                </defs>

                <g transform="translate(10, 10)">
                    {/* Shadow Pattern */}
                    <path
                        d="M10,80 Q30,100 50,80 T90,60 T130,40"
                        stroke="url(#dot-pattern)"
                        strokeWidth="5"
                        fill="none"
                        opacity="0.2"
                    />

                    {/* Precise Ribbon Arrow */}
                    <path
                        d="M10,80 L40,110 L70,60 L100,90 L140,10 L120,10 L90,70 L60,40 L30,90 L10,70 Z"
                        stroke="#D9F99D"
                        strokeWidth="4"
                        fill="none"
                        filter="url(#neon-glow)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Inner Lines for depth */}
                    <path
                        d="M140,10 L120,10 L90,70 L60,40 L30,90 L10,70"
                        stroke="#D9F99D"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.6"
                    />

                    {/* Solid Glow Tip */}
                    <path
                        d="M140,10 L120,10 L125,25 Z"
                        fill="#D9F99D"
                        filter="url(#neon-glow)"
                    />
                </g>
            </svg>

            {!iconOnly && (
                <div className="flex flex-col leading-[0.9]">
                    <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">
                        HYPER<span className="text-[#D9F99D]">LIFT</span>
                    </span>
                    <span className="text-[7px] md:text-[8px] font-black tracking-[0.4em] text-zinc-500 uppercase">
                        UGC PERFORMANCE
                    </span>
                </div>
            )}
        </div>
    );
};
