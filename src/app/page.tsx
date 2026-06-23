import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#fafafa]">
      <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3.5 bg-[#f5f5f5]">
        <div className="flex items-center gap-2 sm:gap-4 w-auto md:w-1/3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-[10px] h-[10px] sm:w-[11.5px] sm:h-[11.5px] rounded-full bg-[#FF5F56] border border-black/10" />
            <div className="w-[10px] h-[10px] sm:w-[11.5px] sm:h-[11.5px] rounded-full bg-[#FFBD2E] border border-black/10" />
            <div className="w-[10px] h-[10px] sm:w-[11.5px] sm:h-[11.5px] rounded-full bg-[#27C93F] border border-black/10" />
          </div>
          <div className="hidden sm:flex items-center gap-3 text-slate-400">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="flex-1 max-w-[240px] sm:max-w-[400px] flex justify-center mx-2 sm:mx-0">
          <div className="w-full bg-white flex items-center justify-center py-1 sm:py-1.5 px-2 sm:px-3 rounded-md text-[11px] sm:text-[13px] font-medium text-slate-600 relative shadow-sm border border-black/[0.02]">
            <div className="absolute left-2 sm:left-2.5 opacity-50">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="tracking-wide">commmech</span>
            <div className="absolute right-2 sm:right-2.5 opacity-50">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-end gap-4 text-slate-400 w-auto md:w-1/3 pr-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="8" y="8" width="12" height="12" rx="2" />
            <path d="M16 8V6a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h2" />
          </svg>
        </div>
      </div>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <HeroSection />
      </main>
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none select-none">
        <Image src="/wave.png" alt="" width={1440} height={400} className="w-full h-auto opacity-90" priority />
      </div>
    </div>
  );
}
