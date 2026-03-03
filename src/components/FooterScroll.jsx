import { ArrowDown } from 'lucide-react';

export default function FooterScroll() {
    return (
        <div className="w-full flex flex-col px-4 sm:px-6 pb-4 sm:pb-6 absolute bottom-0">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="mx-4 sm:mx-10 border-t border-white/20 mb-4"></div>
            </div>
            <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center text-white/80 font-serif px-4 sm:px-10">
                <span className="text-[13px] sm:text-[14px]">Scroll to Discover</span>
                <ArrowDown className="w-4 h-4" />
            </div>
        </div>
    );
}
