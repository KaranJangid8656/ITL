export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 px-6">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col justify-center">

                {/* Content Container */}
                <div className="w-full lg:px-[100px] z-10">

                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-8 ml-1">
                        <span className="w-[6px] h-[6px] bg-white rounded-full inline-block"></span>
                        <span className="text-white/90 text-[13px] font-bold tracking-[0.15em] font-sans uppercase">
                            Built on solid ground
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-serif text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] leading-[1.05] text-white max-w-5xl tracking-tight">
                        Building Leaders – <br />
                        <span className="italic text-white/80 font-serif font-light mr-4 text-[4.2rem] md:text-[5.5rem] lg:text-[7rem]">the</span> World Can Trust.
                    </h1>

                    {/* Subtext area aligned right */}
                    <div className="flex justify-end mt-16 lg:mt-[120px]">
                        <p className="max-w-[480px] text-right text-lg md:text-[22px] font-sans text-white/90 leading-snug font-normal translate-x-4">
                            Where purpose meets people. Where organizations transform through trusted leadership, continuous learning, & human responsibility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

