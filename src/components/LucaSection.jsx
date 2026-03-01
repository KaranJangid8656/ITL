import Image from 'next/image';

export default function LucaSection() {
    return (
        <section className="w-full bg-white relative pt-16 pb-24 border-t border-white/20">
            {/* 
                We use the full screenshot provided by the user as the section content,
                since individual assets (character, hand-drawn annotations) were not provided.
                The background is set to white to match the image's background seamlessly.
            */}
            <div className="w-full max-w-[1440px] mx-auto relative px-4 md:px-8">
                <Image
                    src="https://res.cloudinary.com/dx9bvma03/image/upload/v1772347601/Screenshot_2026-03-01_121251_iykzuu.png"
                    alt="Ride the Wave of Leadership with Luca"
                    width={1440}
                    height={800}
                    className="w-full h-auto object-contain shadow-sm border border-black/5"
                    priority
                />
            </div>
        </section>
    );
}
