'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 w-full z-50">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[160px] py-6 sm:py-8 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="font-serif text-[32px] sm:text-[42px] font-bold tracking-wide italic">I.T.L.</div>
                    <div className="text-[11px] sm:text-[13px] tracking-wide leading-tight font-sans text-white/90 border-l border-white/20 pl-4 sm:pl-6 h-9 sm:h-10 flex flex-col justify-center gap-0.5">
                        <span>Institute <i className="lowercase font-serif tracking-normal">for</i></span>
                        <span>Trusted Leadership</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 lg:gap-12 font-sans text-[14px] lg:text-[15px] tracking-wide text-white/70">
                    <Link href="#" className="text-white font-medium hover:text-white/80 transition-colors">The Institute</Link>
                    <Link href="#" className="hover:text-white transition-colors">Our Approach</Link>
                    <Link href="#" className="hover:text-white transition-colors">Ecosystem</Link>
                    <Link href="#" className="hover:text-white transition-colors">Insights</Link>
                    <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white/80 hover:text-white transition-colors p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Divider line */}
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
                <div className="mx-4 sm:mx-10 border-b border-white/10"></div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm border-t border-white/10 z-50">
                    <nav className="flex flex-col px-6 py-4 gap-4 font-sans text-[15px] tracking-wide text-white/70">
                        <Link href="#" className="text-white font-medium py-2 border-b border-white/10" onClick={() => setMenuOpen(false)}>The Institute</Link>
                        <Link href="#" className="hover:text-white transition-colors py-2 border-b border-white/10" onClick={() => setMenuOpen(false)}>Our Approach</Link>
                        <Link href="#" className="hover:text-white transition-colors py-2 border-b border-white/10" onClick={() => setMenuOpen(false)}>Ecosystem</Link>
                        <Link href="#" className="hover:text-white transition-colors py-2 border-b border-white/10" onClick={() => setMenuOpen(false)}>Insights</Link>
                        <Link href="#" className="hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
