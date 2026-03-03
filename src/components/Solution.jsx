export default function Solution() {
    return (
        <section className="relative min-h-screen bg-[#020905] flex flex-col justify-center py-20 sm:py-32 px-6 overflow-hidden z-10">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#06331e]/40 via-[#020b06] to-[#020905] pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[#117a47] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto w-full relative z-10 flex pt-12 sm:pt-24 mb-8 sm:mb-16">

                {/* Top Section - Headers and Text */}
                <div className="w-full text-center flex flex-col items-center">

                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-6 sm:mb-8">
                        <span className="w-[8px] h-[8px] bg-white rounded-sm inline-block"></span>
                        <span className="text-white/90 text-[12px] font-bold tracking-[0.16em] font-sans uppercase">
                            THE SOLUTION
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-white mb-6 sm:mb-8 px-2">
                        <span className="font-serif italic text-[36px] sm:text-[52px] md:text-[60px] lg:text-[72px] text-white/80 font-light pr-2 sm:pr-4">This is</span>
                        <span className="font-serif text-[36px] sm:text-[52px] md:text-[60px] lg:text-[72px] font-normal tracking-tight">Why We Exist</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="font-sans text-[16px] sm:text-[19px] md:text-[22px] text-[#9ca3af] leading-relaxed max-w-[800px] mx-auto font-light px-2">
                        Trust transforms everything — engagement, innovation, performance, &amp; culture.
                        The Institute of Trusted Leadership scales this impact through research-backed
                        methods, turning trusted leadership into the global standard.
                    </p>

                </div>
            </div>

            {/* Bottom Timeline Section */}
            <div className="max-w-[1200px] mx-auto w-full relative z-10 mt-12 sm:mt-20 md:mt-32 px-2">

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 md:gap-4 relative h-auto md:h-[500px]">

                    {/* Column 1 - ITL Approach */}
                    <div className="relative flex flex-col items-start md:items-center text-left md:text-center group pr-8 md:pr-0 self-end pb-12">
                        {/* Number Background */}
                        <div className="absolute left-0 md:left-auto md:right-[calc(50%+180px)] top-[-3rem] md:top-[-1rem] text-[120px] sm:text-[160px] leading-none font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 z-0 select-none pointer-events-none">
                            1
                        </div>
                        <h3 className="font-serif text-[24px] sm:text-[28px] text-white tracking-wide mb-4">
                            ITL APPROACH
                        </h3>
                        <p className="font-sans text-[15px] sm:text-[16px] text-white/50 leading-relaxed font-light max-w-[280px]">
                            Evidence-based methodology combining research, training, and consulting to build trusted leaders.
                        </p>

                        {/* Vertical connection line */}
                        <div className="absolute bottom-[-3rem] left-0 md:left-1/2 md:-translate-x-1/2 w-[2px] h-[3rem] bg-gradient-to-t from-white to-transparent opacity-80"></div>
                    </div>

                    {/* Column 2 - Our Ecosystem */}
                    <div className="relative flex flex-col items-start md:items-center text-left md:text-center group pr-8 md:pr-0 self-start md:-translate-y-24 mb-16 md:mb-0">
                        {/* Number Background */}
                        <div className="absolute left-0 md:left-auto md:right-[calc(50%+180px)] top-[-3.5rem] md:top-[-2rem] text-[140px] sm:text-[180px] leading-none font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 z-0 select-none pointer-events-none">
                            2
                        </div>
                        <h3 className="font-serif text-[24px] sm:text-[28px] text-white tracking-wide mb-4">
                            OUR ECOSYSTEM
                        </h3>
                        <p className="font-sans text-[15px] sm:text-[16px] text-white/50 leading-relaxed font-light max-w-[280px]">
                            Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation.
                        </p>

                        {/* Vertical connection line */}
                        <div className="absolute top-[100%] left-0 md:left-1/2 md:-translate-x-1/2 w-[2px] h-[calc(100%+6rem)] bg-gradient-to-t from-white via-white/40 to-transparent opacity-80 hidden md:block"></div>
                        <div className="absolute bottom-[-3rem] left-0 w-[2px] h-[3rem] bg-gradient-to-t from-white to-transparent opacity-80 md:hidden"></div>
                    </div>

                    {/* Column 3 - Global Impact */}
                    <div className="relative flex flex-col items-start md:items-center text-left md:text-center group pr-8 md:pr-0 self-end pb-12">
                        {/* Number Background */}
                        <div className="absolute left-0 md:left-auto md:right-[calc(50%+180px)] top-[-3rem] md:top-[-1rem] text-[120px] sm:text-[160px] leading-none font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 z-0 select-none pointer-events-none">
                            3
                        </div>
                        <h3 className="font-serif text-[24px] sm:text-[28px] text-white tracking-wide mb-4">
                            GLOBAL IMPACT
                        </h3>
                        <p className="font-sans text-[15px] sm:text-[16px] text-white/50 leading-relaxed font-light max-w-[280px]">
                            UN SDG-aligned programs ensuring every initiative creates measurable social value.
                        </p>

                        {/* Vertical connection line */}
                        <div className="absolute bottom-[-3rem] left-0 md:left-1/2 md:-translate-x-1/2 w-[2px] h-[3rem] bg-gradient-to-t from-white to-transparent opacity-80"></div>
                    </div>

                </div>

                {/* Horizontal Dashed Base Line */}
                <div className="w-[85%] mx-auto md:w-full h-1 mt-4 md:mt-0 border-t-4 border-dotted border-white/30 hidden md:block relative z-20"></div>

            </div>
        </section>
    );
}
