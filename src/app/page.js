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
      {/* Static Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'var(--color-background)',
          backgroundImage: `
               radial-gradient(circle at 10% 80%, var(--color-accent-blue) 0%, transparent 25%),
               radial-gradient(circle at 90% 40%, var(--color-accent-blue) 0%, transparent 20%),
               radial-gradient(circle at 80% 60%, var(--color-accent-green) 0%, transparent 50%),
               radial-gradient(circle at 50% 100%, var(--color-accent-teal) 0%, transparent 60%)
             `
        }}>
      </div>
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

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

