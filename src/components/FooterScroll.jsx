import { ArrowDown } from 'lucide-react';

export default function FooterScroll() {
    return (
        <div className="w-full flex justify-between items-end px-6 pb-6 absolute bottom-0">
            <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center text-white/80 font-serif border-b border-white/20 pb-4">
                <span>Scroll to Discover</span>
                <ArrowDown className="w-4 h-4" />
            </div>
        </div>
    );
}
