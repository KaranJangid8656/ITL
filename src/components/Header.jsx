import Link from 'next/link';

export default function Header() {
    return (
        <header className="absolute top-0 w-full z-50">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-[100px] py-8 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-6">
                    <div className="font-serif text-[42px] font-bold tracking-wide italic">I.T.L.</div>
                    <div className="text-[11px] tracking-[0.15em] uppercase leading-tight font-sans text-white/90 border-l border-white/20 pl-6 h-10 flex flex-col justify-center gap-0.5">
                        <span>Institute <i className="lowercase font-serif tracking-normal">for</i></span>
                        <span>Trusted Leadership</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-12 font-sans text-[15px] tracking-wide text-white/70">
                    <Link href="#" className="text-white font-medium hover:text-white/80 transition-colors">The Institute</Link>
                    <Link href="#" className="hover:text-white transition-colors">Our Approach</Link>
                    <Link href="#" className="hover:text-white transition-colors">Ecosystem</Link>
                    <Link href="#" className="hover:text-white transition-colors">Insights</Link>
                    <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
                </nav>
            </div>
        </header>
    );
}


