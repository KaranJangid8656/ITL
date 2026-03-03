import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Founder() {
    return (
        <section className="relative min-h-[90vh] bg-[#020b06] z-10 flex flex-col">
            {/* 2x2 Grid Layout container */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 flex-grow">

                {/* Top Left Quadrant - Headline */}
                <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] flex flex-col justify-center px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-transparent to-[#052014]/30">
                    <div className="max-w-[500px] w-full lg:pt-16">
                        {/* Badge */}
                        <div className="flex items-center gap-2 mb-6 sm:mb-8 ml-1">
                            <span className="w-[8px] h-[8px] bg-white rounded-sm inline-block"></span>
                            <span className="text-white/90 text-[12px] font-bold tracking-[0.16em] font-sans uppercase">
                                MEET OUR FOUNDER
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[42px] lg:text-[52px] text-white leading-[1.05] tracking-tight">
                            Leslie Martinich
                        </h2>
                    </div>
                </div>

                {/* Top Right Quadrant - Image */}
                <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden group">
                    <Image
                        src="/founder.png"
                        alt="Leslie Martinich"
                        fill
                        className="object-cover object-center relative z-0"
                    />
                    {/* Dark gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020b06] via-[#020b06]/40 to-transparent z-10 w-1/2"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020b06] via-[#020b06]/20 to-transparent z-10 h-1/3 top-2/3"></div>
                    <div className="absolute inset-0 bg-[#08605c]/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
                </div>

                {/* Bottom Left Quadrant - Bio */}
                <div
                    className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] flex flex-col justify-center px-6 sm:px-10 lg:px-16 overflow-hidden"
                    style={{ background: 'radial-gradient(circle at 0% 100%, #08605c 0%, transparent 80%), radial-gradient(circle at 60% 0%, #08605c 0%, transparent 70%), #020b06' }}
                >
                    <div className="max-w-[500px] w-full py-10 sm:py-16">
                        <p className="font-sans text-[17px] sm:text-[19px] lg:text-[20px] text-[#e5e7eb] leading-relaxed font-normal mb-6 sm:mb-8 drop-shadow-md">
                            Leslie Martinich is a leadership expert with 20+ years of experience who founded the Institute of Trusted Leadership to address the global crisis of trust in organizations.
                        </p>
                        <p className="font-sans text-[17px] sm:text-[19px] lg:text-[20px] text-[#e5e7eb] leading-relaxed font-normal drop-shadow-md">
                            Through evidence-based, practical approaches, her work develops leaders, transforms cultures, and scales trusted leadership worldwide.
                        </p>
                    </div>
                </div>

                {/* Bottom Right Quadrant - CTA */}
                <div
                    className="relative min-h-[200px] sm:min-h-[300px] lg:min-h-[480px] flex items-start pt-10 sm:pt-16 px-4 sm:px-6 lg:px-10 overflow-hidden"
                    style={{ background: 'radial-gradient(circle at 100% 100%, #08605c 0%, transparent 80%), radial-gradient(circle at 20% 0%, #08605c 0%, transparent 70%), #020b06' }}
                >
                    <a href="#" className="flex items-center gap-2 sm:gap-3 group cursor-pointer w-fit">
                        <span className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] text-white tracking-wide group-hover:text-white/80 transition-colors">
                            Meet Leslie
                        </span>
                        <ArrowUpRight className="w-7 h-7 sm:w-9 sm:h-9 text-white font-light group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" strokeWidth={1} />
                    </a>
                </div>

            </div>

            {/* Bottom Number Navigation Section */}
            <div className="w-full flex items-center justify-center py-6 sm:py-8 bg-[#051810]">
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 w-max px-4">
                    {/* Item 01 */}
                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                        <span className="font-sans text-[18px] sm:text-[22px] md:text-[26px] font-semibold text-white">01</span>
                        <div className="h-0.5 w-[50px] sm:w-[100px] md:w-[150px] lg:w-[220px] border-b-[3px] border-dashed border-[#1774d6]/60"></div>
                    </div>
                    {/* Item 02 */}
                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8 opacity-60">
                        <span className="font-sans text-[18px] sm:text-[22px] md:text-[26px] font-normal text-white">02</span>
                        <div className="h-0.5 w-[50px] sm:w-[100px] md:w-[150px] lg:w-[220px] border-b-[3px] border-dashed border-white/20"></div>
                    </div>
                    {/* Item 03 */}
                    <div className="flex items-center opacity-60">
                        <span className="font-sans text-[18px] sm:text-[22px] md:text-[26px] font-normal text-white">03</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
