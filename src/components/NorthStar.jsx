import { Eye, Target, Trophy } from 'lucide-react';

export default function NorthStar() {
    return (
        <section className="relative min-h-[90vh] flex items-center py-20 px-6 overflow-hidden mt-12 z-10">
            {/* Teal background for top left area */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0a7d75] via-transparent to-transparent opacity-30 pointer-events-none"></div>
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center pl-8 lg:pl-[120px]">

                {/* Left Side - Interactive Graphic */}
                <div className="relative w-full max-w-[480px] aspect-square mx-auto lg:mx-0 flex flex-col justify-center translate-y-8 ml-[-20px]">

                    {/* Dashed Outer Ring */}
                    <div className="absolute inset-10 rounded-full border border-white/20 border-dashed pointer-events-none" />

                    {/* Center Graphic (3-pointed star) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <svg width="180" height="180" viewBox="0 0 100 100" className="z-20 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                            {/* Adjusted 3-point star approximation */}
                            <path d="M50 15 Q50 50 15 65 Q50 55 85 65 Q50 50 50 15 Z" fill="white" />
                        </svg>
                    </div>

                    {/* Orbital Nodes - Positioned absolute on the ring */}

                    {/* Top Node (Eye / Active) */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[90px] rounded-full bg-[#1774d6] flex items-center justify-center shadow-[0_0_35px_rgba(23,116,214,0.5)] z-30 transition-transform hover:scale-[1.05] cursor-pointer">
                        <Eye className="w-9 h-9 text-white" strokeWidth={2} />
                    </div>

                    {/* Bottom Left Node (Target / Inactive) */}
                    <div className="absolute bottom-[20%] left-[-2rem] w-[95px] h-[95px] rounded-full bg-[#495b50] flex items-center justify-center transition-all hover:bg-[#5a6c61] hover:scale-[1.05] cursor-pointer z-30 border-2 border-transparent shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                        <Target className="w-9 h-9 text-white/90" strokeWidth={1.5} />
                    </div>

                    {/* Bottom Right Node (Trophy / Inactive) */}
                    <div className="absolute bottom-[20%] right-[-2rem] w-[95px] h-[95px] rounded-full bg-[#495b50] flex items-center justify-center transition-all hover:bg-[#5a6c61] hover:scale-[1.05] cursor-pointer z-30 border-2 border-transparent shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                        <Trophy className="w-9 h-9 text-white/90" strokeWidth={1.5} />
                    </div>

                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col max-w-[500px] lg:ml-8">

                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-8 ml-1">
                        <span className="w-[8px] h-[8px] bg-white rounded-sm inline-block"></span>
                        <span className="text-white/90 text-[12px] font-bold tracking-[0.16em] font-sans uppercase">
                            WHAT DRIVES US
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="font-serif text-[44px] md:text-[54px] lg:text-[68px] text-white leading-[1.05] mb-8 tracking-tight">
                        Our North Star
                    </h2>

                    {/* Subheadline (Vision) */}
                    <h3 className="font-serif italic text-[42px] text-white mb-6 tracking-wide">
                        Vision
                    </h3>

                    {/* Paragraph Text */}
                    <p className="font-sans text-[21px] text-[#9ca3af] leading-normal font-normal mb-14 drop-shadow-md">
                        A world in which organizations are led by trust and committed to the continuous development of people and purpose.
                    </p>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-6">
                        <span className="font-sans text-[14px] font-medium text-white/90 tracking-widest w-8">1/3</span>
                        <div className="h-[3px] w-[140px] bg-white/20 relative overflow-hidden rounded-full">
                            <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-[#1774d6] rounded-full"></div>
                        </div>
                    </div>

                </div>

            </div>
            {/* Black gradient shade at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
        </section>
    );
}
