import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GridMeshWave from "@/components/GridMeshWave";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#fafafa]">

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <HeroSection />
      </main>

      {/* Dynamic 3D Grid Wave at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <GridMeshWave className="w-full h-[220px] sm:h-[280px] md:h-[350px]" />
      </div>
    </div>
  );
}
