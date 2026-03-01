import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Pathways() {
    return (
        <section className="relative min-h-screen bg-[#020b06] flex flex-col pt-32 pb-48 px-6 lg:px-12 xl:px-24 overflow-hidden z-10">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#011428] via-[#02182b] to-[#020b06] pointer-events-none"></div>

            {/* Subtle glow behind the cards */}
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-[#117a47] rounded-full blur-[150px] opacity-[0.15] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center">

                {/* Top Section - Headers and Text */}
                <div className="w-full text-center flex flex-col items-center mb-16 lg:mb-24">

                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-[8px] h-[8px] bg-white/90 rounded-sm inline-block"></span>
                        <span className="text-white/80 text-[12px] font-bold tracking-[0.16em] font-sans uppercase">
                            BUILT ON SOLID GROUND
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="font-serif text-[48px] md:text-[60px] lg:text-[72px] text-white leading-[1.1] mb-8 font-normal">
                        One Vision.<br className="hidden md:block" />
                        Four Pathways to Impact.
                    </h2>

                    {/* Paragraph */}
                    <p className="font-sans text-[18px] md:text-[20px] text-[#e5e7eb] leading-relaxed max-w-[800px] mx-auto font-light">
                        The Institute of Trusted Leadership operates through an integrated ecosystem of specialized divisions, each designed to address different aspects of leadership development and organizational transformation.
                    </p>
                </div>

                {/* Bottom Section - 4 Card Layout */}
                <div className="w-full flex flex-col lg:flex-row gap-6 h-auto lg:h-[600px]">

                    {/* Card 1 - Luca Promotional (Large, takes up ~60% width on desktop) */}
                    <div className="w-full lg:w-[55%] flex flex-col bg-[#051319] rounded-xl overflow-hidden border border-white/10 shadow-lg relative group">

                        {/* Blue Tab Header */}
                        <div className="absolute top-0 left-0 bg-[#0d47a1] px-6 py-2 rounded-br-xl text-white text-[10px] md:text-[12px] font-bold tracking-widest font-sans uppercase flex items-center gap-2 z-20">
                            <span className="w-[4px] h-[4px] bg-white rounded-sm inline-block"></span>
                            OPEN TO ALL
                        </div>

                        {/* Image Container */}
                        <div className="relative w-full h-[300px] lg:h-[60%] p-8 bg-[#0a1a24]">
                            <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/5 bg-white">
                                <Image
                                    src="https://res.cloudinary.com/dx9bvma03/image/upload/v1772347601/Screenshot_2026-03-01_121251_iykzuu.png"
                                    alt="Ride the Wave of Leadership with Luca"
                                    fill
                                    className="object-contain object-center scale-105 group-hover:scale-[1.08] transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="p-8 lg:p-10 flex flex-col justify-between flex-grow relative bg-[#051319]">
                            {/* Hover Arrow */}
                            <div className="absolute top-8 right-8 text-white/50 group-hover:text-white transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 transform duration-300">
                                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                            </div>

                            <div>
                                <h3 className="font-serif text-[28px] md:text-[36px] text-white tracking-wide mb-2">
                                    LUCA The Leader
                                </h3>
                                <p className="font-sans text-[18px] text-white/80 font-normal mb-4">
                                    Where Leadership Awareness Begins
                                </p>
                            </div>
                            <p className="font-sans text-[14px] md:text-[15px] text-[#9ca3af] leading-relaxed font-light">
                                Our flagship CSR initiative bringing trusted leadership awareness to communities, organizations, and emerging leaders. Start your journey with free resources, assessments, and community connection.
                            </p>
                        </div>
                    </div>

                    {/* Cards 2, 3, 4 - Narrow Vertical Cards */}
                    <div className="w-full lg:w-[45%] flex flex-col md:flex-row gap-6 h-[600px] lg:h-full">

                        {/* Card 2 */}
                        <div className="flex-1 bg-[#091515] rounded-xl overflow-hidden border border-white/5 shadow-lg relative cursor-pointer hover:bg-[#0c1e1e] transition-colors duration-300">
                            <div className="absolute top-0 left-0 w-full bg-[#0d3b66] px-4 py-3 text-white text-[10px] md:text-[11px] font-bold tracking-widest font-sans uppercase flex items-center gap-2">
                                <span className="w-[4px] h-[4px] bg-white rounded-sm inline-block flex-shrink-0"></span>
                                FOR<br />ORGANIZATIONS
                            </div>
                            {/* Vertical Text Container */}
                            <div className="absolute inset-0 pt-20 pb-10 flex items-center justify-center">
                                <div className="flex flex-col items-center" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                    <h3 className="font-serif text-[24px] md:text-[28px] text-white tracking-wider whitespace-nowrap mb-2">
                                        MARTINICH CONSULTING
                                    </h3>
                                    <p className="font-sans text-[16px] text-white/60 whitespace-nowrap font-light">
                                        Strategic Leadership Partnerships
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex-1 bg-[#091515] rounded-xl overflow-hidden border border-white/5 shadow-lg relative cursor-pointer hover:bg-[#0c1e1e] transition-colors duration-300">
                            <div className="absolute top-0 left-0 w-full bg-[#0d3b66] px-4 py-3 text-white text-[10px] md:text-[11px] font-bold tracking-widest font-sans uppercase flex items-center gap-2">
                                <span className="w-[4px] h-[4px] bg-white rounded-sm inline-block flex-shrink-0"></span>
                                FOR INDIVIDUALS<br />& TEAMS
                            </div>
                            {/* Vertical Text Container */}
                            <div className="absolute inset-0 pt-20 pb-10 flex items-center justify-center">
                                <div className="flex flex-col items-center" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                    <h3 className="font-serif text-[24px] md:text-[28px] text-white tracking-wider whitespace-nowrap mb-2 text-center">
                                        MARTINICH INSTITUTE
                                    </h3>
                                    <p className="font-sans text-[16px] text-white/60 whitespace-nowrap font-light">
                                        Learning That Transforms
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex-1 bg-[#091515] rounded-xl overflow-hidden border border-white/5 shadow-lg relative cursor-pointer hover:bg-[#0c1e1e] transition-colors duration-300">
                            <div className="absolute top-0 left-0 w-full bg-[#0d3b66] px-4 py-3 text-white text-[10px] md:text-[11px] font-bold tracking-widest font-sans uppercase flex items-center gap-2">
                                <span className="w-[4px] h-[4px] bg-white rounded-sm inline-block flex-shrink-0"></span>
                                FOR RESEARCH &<br />INNOVATION
                            </div>
                            {/* Vertical Text Container */}
                            <div className="absolute inset-0 pt-20 pb-10 flex items-center justify-center">
                                <div className="flex flex-col items-center" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                    <h3 className="font-serif text-[24px] md:text-[28px] text-white tracking-wider whitespace-nowrap mb-2">
                                        MARTINICH R&D
                                    </h3>
                                    <p className="font-sans text-[16px] text-white/60 whitespace-nowrap font-light">
                                        Innovation Meets Insight
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
