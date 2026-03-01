export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 px-6">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col justify-center">

                {/* Content Container */}
                <div className="w-full lg:px-[100px] z-10">

                    <div className="ml-[1cm]">
                        {/* Badge */}
                        <div className="flex items-center gap-2 mb-8 ml-1">
                            <span className="w-[6px] h-[6px] bg-white rounded-full inline-block"></span>
                            <span className="text-white/90 text-[13px] font-bold tracking-[0.15em] font-sans uppercase">
                                Built on solid ground
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="font-serif text-[2.45rem] md:text-[3.35rem] lg:text-[4.1rem] leading-[1.05] text-white max-w-5xl tracking-tight">
                            Building Leaders – <br />
                            <span className="italic text-gray-500 font-serif font-light mr-4 text-[2.3rem] md:text-[3.1rem] lg:text-[3.8rem]">the</span> World Can Trust.
                        </h1>
                    </div>

                    {/* Subtext area aligned right */}
                    <div className="flex justify-end mt-16 lg:mt-[120px]">
                        <p className="max-w-[700px] text-right text-base md:text-[18px] font-sans text-white/90 leading-relaxed font-light mr-[1cm]">
                            Where purpose meets people. Where organizations<br />
                            transform through trusted leadership, continuous<br />
                            learning, &amp; human responsibility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

