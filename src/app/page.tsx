import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GridMeshWave from "@/components/GridMeshWave";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#f8fafc]">
      {/* Background soft ambient gradient blobs to add depth and visual polish */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-rose-100/20 rounded-full blur-[100px] pointer-events-none -z-10" />

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
