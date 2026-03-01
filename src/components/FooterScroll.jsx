import { ArrowDown } from 'lucide-react';

export default function FooterScroll() {
    return (
        <div className="w-full flex flex-col px-6 pb-6 absolute bottom-0">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="mx-[2.5cm] border-t border-white/20 mb-4"></div>
            </div>
            <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center text-white/80 font-serif">
                <span className="ml-[4cm]">Scroll to Discover</span>
                <ArrowDown className="w-4 h-4 mr-[3cm]" />
            </div>
        </div>
    );
}
