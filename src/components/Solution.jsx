export default function Solution() {
    return (
        <section className="relative min-h-[120vh] bg-[#020905] flex flex-col justify-center py-32 px-6 overflow-hidden z-10 border-t border-white/5">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#06331e]/40 via-[#020b06] to-[#020905] pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[#117a47] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto w-full relative z-10 flex border-t border-white/10 pt-24 mb-16">

                {/* Top Section - Headers and Text */}
                <div className="w-full text-center flex flex-col items-center">

                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-[8px] h-[8px] bg-white rounded-sm inline-block"></span>
                        <span className="text-white/90 text-[12px] font-bold tracking-[0.16em] font-sans uppercase">
                            THE SOLUTION
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-white mb-8">
                        <span className="font-serif italic text-[50px] md:text-[60px] lg:text-[72px] text-white/80 font-light pr-4">This is</span>
                        <span className="font-serif text-[50px] md:text-[60px] lg:text-[72px] font-normal tracking-tight">Why We Exist</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="font-sans text-[20px] md:text-[22px] text-[#9ca3af] leading-relaxed max-w-[800px] mx-auto font-light">
                        Trust transforms everything engagement, innovation, performance, & culture.<br className="hidden md:block" />
                        The Institute of Trusted Leadership scales this impact through research-backed<br className="hidden md:block" />
                        methods, turning trusted leadership into the global standard.
                    </p>

                </div>
            </div>

            {/* Bottom Timeline Section */}
            <div className="max-w-[1200px] mx-auto w-full relative z-10 mt-20 md:mt-32">

                {/* Desktop Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative h-auto md:h-[500px]">

                    {/* Column 1 - ITL Approach */}
                    <div className="relative flex flex-col items-start md:items-center text-left md:text-center group pr-8 md:pr-0 self-end pb-12">
                        {/* Number Background */}
                        <div className="absolute left-[-2rem] md:left-1/2 md:-translate-x-[120%] top-[-2rem] md:top-[-1rem] text-[160px] leading-none font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-transparent -z-10 select-none">
                            1
                        </div>
                        <h3 className="font-serif text-[28px] text-white tracking-wide mb-4">
                            ITL APPROACH
                        </h3>
                        <p className="font-sans text-[16px] text-white/50 leading-relaxed font-light max-w-[280px]">
                            Evidence-based methodology combining research, training, and consulting to build trusted leaders.
                        </p>

                        {/* Vertical connection line */}
                        <div className="absolute bottom-[-3rem] md:bottom-[-3rem] left-0 md:left-1/2 md:-translate-x-1/2 w-[2px] h-[3rem] bg-gradient-to-t from-white to-transparent opacity-80"></div>
                    </div>

                    {/* Column 2 - Our Ecosystem (Offset vertically) */}
                    <div className="relative flex flex-col items-start md:items-center text-left md:text-center group pr-8 md:pr-0 self-start md:-translate-y-24 mb-16 md:mb-0">
                        {/* Number Background */}
                        <div className="absolute left-[-2rem] md:left-1/2 md:-translate-x-[140%] top-[-3rem] md:top-[-2rem] text-[180px] leading-none font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/5 -z-10 select-none">
                            2
                        </div>
                        <h3 className="font-serif text-[28px] text-white tracking-wide mb-4">
                            OUR ECOSYSTEM
                        </h3>
                        <p className="font-sans text-[16px] text-white/50 leading-relaxed font-light max-w-[280px]">
                            Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation.
                        </p>

                        {/* Vertical connection line. Since this is offset up, it needs a taller connecting line to the bottom timeline */}
                        <div className="absolute top-[100%] left-0 md:left-1/2 md:-translate-x-1/2 w-[2px] h-[calc(100%+6rem)] bg-gradient-to-t from-white via-white/40 to-transparent opacity-80 hidden md:block"></div>
                        <div className="absolute bottom-[-3rem] left-0 w-[2px] h-[3rem] bg-gradient-to-t from-white to-transparent opacity-80 md:hidden"></div>
                    </div>

                    {/* Column 3 - Global Impact */}
                    <div className="relative flex flex-col items-start md:items-center text-left md:text-center group pr-8 md:pr-0 self-end pb-12">
                        {/* Number Background */}
                        <div className="absolute left-[-2rem] md:left-1/2 md:-translate-x-[130%] top-[-2rem] md:top-[-1rem] text-[160px] leading-none font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-transparent -z-10 select-none">
                            3
                        </div>
                        <h3 className="font-serif text-[28px] text-white tracking-wide mb-4">
                            GLOBAL IMPACT
                        </h3>
                        <p className="font-sans text-[16px] text-white/50 leading-relaxed font-light max-w-[280px]">
                            UN SDG-aligned programs ensuring every initiative creates measurable social value.
                        </p>

                        {/* Vertical connection line */}
                        <div className="absolute bottom-[-3rem] md:bottom-[-3rem] left-0 md:left-1/2 md:-translate-x-1/2 w-[2px] h-[3rem] bg-gradient-to-t from-white to-transparent opacity-80"></div>
                    </div>

                </div>

                {/* Horizontal Dashed Base Line connecting them all */}
                <div className="w-[85%] mx-auto md:w-full h-1 mt-4 md:mt-0 border-t-4 border-dotted border-white/30 hidden md:block relative z-20"></div>

            </div>
        </section>
    );
}
