export default function Methodology() {
    return (
        <section className="relative min-h-[140vh] bg-[#020b06] flex flex-col pt-32 pb-48 px-6 overflow-hidden z-10 border-t border-white/5">
            {/* Background Gradients - Transitioning from dark green to dark navy blue */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020b06] via-[#041118] to-[#011428] pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col">

                {/* Top Section - Headers and Text */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-32">

                    {/* Left Column: Badge & Headline */}
                    <div className="w-full lg:w-1/2">
                        {/* Badge */}
                        <div className="flex items-center gap-2 mb-8">
                            <span className="w-[8px] h-[8px] bg-white/90 rounded-sm inline-block"></span>
                            <span className="text-white/80 text-[12px] font-bold tracking-[0.16em] font-sans uppercase">
                                OUR METHODOLOGY
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="font-serif text-[48px] md:text-[60px] lg:text-[72px] text-white leading-[1.05] tracking-tight">
                            How We Transform<br className="hidden md:block" /> Leadership
                        </h2>
                    </div>

                    {/* Right Column: Paragraph */}
                    <div className="w-full lg:w-1/2 lg:pt-16">
                        <p className="font-sans text-[20px] md:text-[22px] text-[#e5e7eb] leading-relaxed font-normal">
                            Trusted leadership isn't built on theory alone. Our<br className="hidden md:block" />
                            integrated approach combines rigorous research, practical<br className="hidden md:block" />
                            training to create lasting organizational change.
                        </p>
                    </div>

                </div>

                {/* Bottom Section - Vertical Bar Graph Layout */}
                <div className="w-full flex justify-between relative mt-16 h-[700px]">

                    {/* Column 1: Research & Insights */}
                    <div className="relative w-[30%] flex flex-col justify-end h-full">
                        {/* Dark Bar Background */}
                        <div className="absolute bottom-0 left-0 w-full lg:w-[120px] h-full bg-[#000000]/60 -z-10 rounded-t-md"></div>

                        <div className="absolute top-[10%] left-0 lg:left-[140px] w-[280px]">
                            <h3 className="font-serif text-[32px] md:text-[36px] text-white tracking-wide mb-6 leading-tight">
                                Research & Insights
                            </h3>
                            <ul className="space-y-2">
                                <li className="font-sans text-[15px] text-white/80 font-light flex items-center gap-3">
                                    <span className="w-1 h-1 bg-white/80 rounded-full inline-block"></span>
                                    Evidence-based leadership models
                                </li>
                                <li className="font-sans text-[15px] text-white/80 font-light flex items-center gap-3">
                                    <span className="w-1 h-1 bg-white/80 rounded-full inline-block"></span>
                                    Continuous innovation
                                </li>
                                <li className="font-sans text-[15px] text-white/80 font-light flex items-center gap-3">
                                    <span className="w-1 h-1 bg-white/80 rounded-full inline-block"></span>
                                    Data-driven understanding
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Training & Development */}
                    <div className="relative w-[30%] flex flex-col justify-end h-full">
                        {/* Dark Bar Background (Shorter) */}
                        <div className="absolute bottom-0 left-0 w-full lg:w-[120px] h-[75%] bg-[#000000]/50 -z-10 rounded-t-md"></div>

                        <div className="absolute top-[35%] left-0 lg:left-[140px] w-[280px]">
                            <h3 className="font-serif text-[32px] md:text-[36px] text-white tracking-wide mb-6 leading-tight">
                                Training & Development
                            </h3>
                            <ul className="space-y-2">
                                <li className="font-sans text-[15px] text-white/80 font-light flex items-center gap-3">
                                    <span className="w-1 h-1 bg-white/80 rounded-full inline-block"></span>
                                    Practical skill-building
                                </li>
                                <li className="font-sans text-[15px] text-white/80 font-light flex items-center gap-3">
                                    <span className="w-1 h-1 bg-white/80 rounded-full inline-block"></span>
                                    Certification programs
                                </li>
                                <li className="font-sans text-[15px] text-white/80 font-light flex items-center gap-3">
                                    <span className="w-1 h-1 bg-white/80 rounded-full inline-block"></span>
                                    Organizational transformation
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Consulting & Implementation */}
                    <div className="relative w-[30%] flex flex-col justify-end h-full">
                        {/* Dark Bar Background (Shortest) */}
                        <div className="absolute bottom-0 left-0 w-full lg:w-[120px] h-[45%] bg-[#000000]/40 -z-10 rounded-t-md"></div>

                        <div className="absolute top-[60%] left-0 lg:left-[140px] w-[280px]">
                            <h3 className="font-serif text-[32px] md:text-[36px] text-white tracking-wide mb-6 leading-tight">
                                Consulting &<br /> Implementation
                            </h3>
                            <ul className="space-y-2">
                                <li className="font-sans text-[15px] text-white/80 font-light flex items-center gap-3">
                                    <span className="w-1 h-1 bg-white/80 rounded-full inline-block"></span>
                                    Strategic partnership
                                </li>
                                <li className="font-sans text-[15px] text-white/80 font-light flex items-center gap-3">
                                    <span className="w-1 h-1 bg-white/80 rounded-full inline-block"></span>
                                    Custom solutions
                                </li>
                                <li className="font-sans text-[15px] text-white/80 font-light flex items-center gap-3">
                                    <span className="w-1 h-1 bg-white/80 rounded-full inline-block"></span>
                                    Measurable impact
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
