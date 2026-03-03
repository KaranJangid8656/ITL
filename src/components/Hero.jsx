export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[85vh] flex items-center pt-28 sm:pt-32 pb-20 px-6">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col justify-center">

                {/* Content Container */}
                <div className="w-full sm:px-6 lg:px-[100px] z-10">

                    <div className="ml-0 sm:ml-4 lg:ml-[1cm]">
                        {/* Badge */}
                        <div className="flex items-center gap-2 mb-6 sm:mb-8 ml-1">
                            <span className="w-[6px] h-[6px] bg-white rounded-full inline-block"></span>
                            <span className="text-white/90 text-[12px] sm:text-[13px] font-bold tracking-[0.15em] font-sans uppercase">
                                Built on solid ground
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="font-serif text-[2.1rem] sm:text-[2.8rem] md:text-[3.35rem] lg:text-[4.1rem] leading-[1.05] text-white max-w-5xl tracking-tight">
                            Building Leaders –{' '}
                            <br />
                            <span className="italic text-gray-500 font-serif font-light mr-2 sm:mr-4 text-[1.95rem] sm:text-[2.6rem] md:text-[3.1rem] lg:text-[3.8rem]">the</span>
                            World Can Trust.
                        </h1>
                    </div>

                    {/* Subtext area - right-aligned on large screens, left/center on mobile */}
                    <div className="flex justify-start sm:justify-end mt-10 sm:mt-16 lg:mt-[120px]">
                        <p className="max-w-full sm:max-w-[600px] lg:max-w-[700px] text-left sm:text-right text-[16px] sm:text-[17px] md:text-[18px] font-sans text-white/90 leading-relaxed font-light sm:mr-0 lg:mr-[1cm]">
                            Where purpose meets people.<br className="hidden sm:block" />
                            Where organizations transform through trusted leadership,<br className="hidden sm:block" />
                            continuous learning, &amp; human responsibility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
