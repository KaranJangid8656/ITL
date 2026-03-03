'use client';

import { Eye, Target, Trophy } from 'lucide-react';
import { useState } from 'react';

const slides = [
    {
        icon: Eye,
        label: 'Vision',
        subtitle: 'Vision',
        text: 'A world in which organizations are led by trust and committed to the continuous development of people and purpose.',
    },
    {
        icon: Target,
        label: 'Mission',
        subtitle: 'Mission',
        text: 'To equip leaders and organizations with the evidence-based tools, frameworks, and communities they need to build lasting cultures of trust — at every level, across every sector.',
    },
    {
        icon: Trophy,
        label: 'Values',
        subtitle: 'Values',
        text: 'Integrity over convenience. People over processes. Courage to lead with honesty, humility, and a relentless commitment to those we serve and the world we share.',
    },
];

export default function NorthStar() {
    const [active, setActive] = useState(0);
    const slide = slides[active];

    return (
        <section id="northstar" className="relative min-h-screen flex items-center py-16 sm:py-20 px-6 overflow-hidden mt-6 sm:mt-12 z-10">
            {/* Teal background for top left area */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0a7d75] via-transparent to-transparent opacity-30 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-32 items-center px-4 sm:px-8 lg:pl-[120px] lg:pr-8">

                {/* Left Side - Interactive Graphic */}
                <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] aspect-square mx-auto flex flex-col justify-center">

                    {/* Dashed Outer Ring */}
                    <div className="absolute inset-10 rounded-full border border-white/20 border-dashed pointer-events-none" />

                    {/* Center Graphic (3-pointed star) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <svg width="140" height="140" viewBox="0 0 100 100" className="sm:w-[180px] sm:h-[180px] z-20 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                            <path d="M50 15 Q50 50 15 65 Q50 55 85 65 Q50 50 50 15 Z" fill="white" />
                        </svg>
                    </div>

                    {/* Top Node (Eye) */}
                    <button
                        onClick={() => setActive(0)}
                        className={`absolute top-2 left-1/2 -translate-x-1/2 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-full flex items-center justify-center z-30 transition-all duration-300 cursor-pointer focus:outline-none
                            ${active === 0
                                ? 'bg-[#1774d6] shadow-[0_0_35px_rgba(23,116,214,0.6)] scale-105'
                                : 'bg-[#495b50] hover:bg-[#5a6c61] hover:scale-[1.05] shadow-[0_4px_15px_rgba(0,0,0,0.2)]'
                            }`}
                    >
                        <Eye className="w-7 h-7 sm:w-9 sm:h-9 text-white" strokeWidth={2} />
                    </button>

                    {/* Bottom Left Node (Target) */}
                    <button
                        onClick={() => setActive(1)}
                        className={`absolute bottom-[20%] left-[-1rem] sm:left-[-2rem] w-[74px] h-[74px] sm:w-[95px] sm:h-[95px] rounded-full flex items-center justify-center z-30 transition-all duration-300 cursor-pointer focus:outline-none border-2 border-transparent
                            ${active === 1
                                ? 'bg-[#1774d6] shadow-[0_0_35px_rgba(23,116,214,0.6)] scale-105'
                                : 'bg-[#495b50] hover:bg-[#5a6c61] hover:scale-[1.05] shadow-[0_4px_15px_rgba(0,0,0,0.2)]'
                            }`}
                    >
                        <Target className="w-7 h-7 sm:w-9 sm:h-9 text-white/90" strokeWidth={1.5} />
                    </button>

                    {/* Bottom Right Node (Trophy) */}
                    <button
                        onClick={() => setActive(2)}
                        className={`absolute bottom-[20%] right-[-1rem] sm:right-[-2rem] w-[74px] h-[74px] sm:w-[95px] sm:h-[95px] rounded-full flex items-center justify-center z-30 transition-all duration-300 cursor-pointer focus:outline-none border-2 border-transparent
                            ${active === 2
                                ? 'bg-[#1774d6] shadow-[0_0_35px_rgba(23,116,214,0.6)] scale-105'
                                : 'bg-[#495b50] hover:bg-[#5a6c61] hover:scale-[1.05] shadow-[0_4px_15px_rgba(0,0,0,0.2)]'
                            }`}
                    >
                        <Trophy className="w-7 h-7 sm:w-9 sm:h-9 text-white/90" strokeWidth={1.5} />
                    </button>

                </div>

                {/* Right Side - Content (animates on change) */}
                <div key={active} className="flex flex-col max-w-full lg:max-w-[500px] lg:ml-8 text-center lg:text-left items-center lg:items-start animate-fadeIn">

                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-6 sm:mb-8 ml-1">
                        <span className="w-[8px] h-[8px] bg-white rounded-sm inline-block"></span>
                        <span className="text-white/90 text-[12px] font-bold tracking-[0.16em] font-sans uppercase">
                            WHAT DRIVES US
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[54px] lg:text-[68px] text-white leading-[1.05] mb-6 sm:mb-8 tracking-tight">
                        Our North Star
                    </h2>

                    {/* Subheadline */}
                    <h3 className="font-serif italic text-[32px] sm:text-[42px] text-white mb-4 sm:mb-6 tracking-wide">
                        {slide.subtitle}
                    </h3>

                    {/* Paragraph Text */}
                    <p className="font-sans text-[17px] sm:text-[19px] lg:text-[21px] text-[#9ca3af] leading-normal font-normal mb-10 sm:mb-14 drop-shadow-md">
                        {slide.text}
                    </p>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-6">
                        <span className="font-sans text-[14px] font-medium text-white/90 tracking-widest w-8">
                            {active + 1}/3
                        </span>
                        <div className="h-[3px] w-[120px] sm:w-[140px] bg-white/20 relative overflow-hidden rounded-full">
                            <div
                                className="absolute top-0 left-0 bottom-0 bg-[#1774d6] rounded-full transition-all duration-500"
                                style={{ width: `${((active + 1) / 3) * 100}%` }}
                            ></div>
                        </div>
                        {/* Dot indicators */}
                        <div className="flex items-center gap-2">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`rounded-full transition-all duration-300 focus:outline-none ${i === active
                                            ? 'w-4 h-2 bg-[#1774d6]'
                                            : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
            {/* Black gradient shade at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease both;
                }
            `}</style>
        </section>
    );
}
