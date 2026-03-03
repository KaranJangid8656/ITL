export default function Methodology() {
    return (
        <section id="methodology" className="relative bg-[#020b06] flex flex-col pt-20 sm:pt-32 pb-24 sm:pb-48 px-6 overflow-hidden z-10">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020b06] via-[#041118] to-[#011428] pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col">

                {/* Top Section - Headers and Text */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-24 mb-16 sm:mb-24 lg:mb-32">

                    {/* Left Column: Badge & Headline */}
                    <div className="w-full lg:w-1/2">
                        {/* Badge */}
                        <div className="flex items-center gap-2 mb-6 sm:mb-8">
                            <span className="w-[8px] h-[8px] bg-white/90 rounded-sm inline-block"></span>
                            <span className="text-white/80 text-[12px] font-bold tracking-[0.16em] font-sans uppercase">
                                OUR METHODOLOGY
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="font-serif text-[38px] sm:text-[52px] md:text-[60px] lg:text-[72px] text-white leading-[1.05] tracking-tight">
                            How We Transform<br className="hidden sm:block" /> Leadership
                        </h2>
                    </div>

                    {/* Right Column: Paragraph */}
                    <div className="w-full lg:w-1/2 lg:pt-16">
                        <p className="font-sans text-[17px] sm:text-[19px] md:text-[22px] text-[#e5e7eb] leading-relaxed font-normal">
                            Trusted leadership isn't built on theory alone. Our integrated approach combines rigorous research, practical training to create lasting organizational change.
                        </p>
                    </div>

                </div>

                {/* Bottom Section - Methodology Cards (responsive stacked on mobile, bar chart on desktop) */}
                {/* Mobile: stacked cards */}
                <div className="lg:hidden flex flex-col gap-8">
                    {[
                        {
                            title: 'Research & Insights',
                            items: ['Evidence-based leadership models', 'Continuous innovation', 'Data-driven understanding'],
                        },
                        {
                            title: 'Training & Development',
                            items: ['Practical skill-building', 'Certification programs', 'Organizational transformation'],
                        },
                        {
                            title: 'Consulting & Implementation',
                            items: ['Strategic partnership', 'Custom solutions', 'Measurable impact'],
                        },
                    ].map((col, i) => (
                        <div key={i} className="bg-black/40 rounded-xl p-6 sm:p-8 border border-white/5">
                            <h3 className="font-serif text-[26px] sm:text-[30px] text-white tracking-wide mb-5 leading-tight">
                                {col.title}
                            </h3>
                            <ul className="space-y-3">
                                {col.items.map((item, j) => (
                                    <li key={j} className="font-sans text-[15px] text-white/80 font-light flex items-center gap-3">
                                        <span className="w-1 h-1 bg-white/80 rounded-full inline-block flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Desktop: Vertical Bar Graph Layout */}
                <div className="hidden lg:flex w-full justify-between relative mt-16 h-[700px]">

                    {/* Column 1: Research & Insights */}
                    <div className="relative w-[30%] flex flex-col justify-end h-full">
                        {/* Dark Bar Background */}
                        <div className="absolute bottom-0 left-0 w-full lg:w-[120px] h-full bg-[#000000]/60 -z-10 rounded-t-md"></div>

                        <div className="absolute top-[10%] left-0 lg:left-[140px] w-[280px]">
                            <h3 className="font-serif text-[32px] md:text-[36px] text-white tracking-wide mb-6 leading-tight">
                                Research &amp; Insights
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
                                Training &amp; Development
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
                                Consulting &amp;<br /> Implementation
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
