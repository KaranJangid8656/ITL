import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FooterScroll from "@/components/FooterScroll";
import NorthStar from "@/components/NorthStar";
import Founder from "@/components/Founder";
import Solution from "@/components/Solution";
import Methodology from "@/components/Methodology";
import Pathways from "@/components/Pathways";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white selection:bg-white/30">
      {/* Background overlay/texture for the slightly noisy dark feel */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col justify-center">
          <Hero />
        </div>
        <FooterScroll />
      </div>

      <NorthStar />
      <Founder />
      <Solution />
      <Methodology />
      <Pathways />
    </main>
  );
}

