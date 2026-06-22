"use client";

import React, { useState } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center flex-1 px-6 sm:px-8 text-center pt-24 pb-36 md:pt-32 md:pb-48 relative z-10 max-w-5xl mx-auto">
      
      {/* Animated Headline Container */}
      <div className="animate-fade-in-up">
        <h1 className="text-[42px] sm:text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-[-0.03em] leading-[1.08] select-none text-gradient pb-4">
          Building the
          <br className="hidden sm:inline" />
          {" "}Future of Tech
        </h1>
      </div>

      {/* Animated Subtitle or spacing */}
      <div className="h-6 sm:h-8" />

      {/* Call to Action Container */}
      <div className="w-full max-w-2xl mx-auto animate-fade-in-up-delayed px-1 sm:px-0">
        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-full p-2 pl-6 sm:pl-7 flex items-center shadow-lg relative group transition-all duration-300 hover:shadow-xl hover:border-slate-200"
        >
          {/* Magnifying Glass Icon */}
          <svg
            className="w-6 h-6 text-slate-400 mr-3 flex-shrink-0 transition-colors group-focus-within:text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full bg-transparent border-none text-[17px] sm:text-[18px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 pr-2 min-w-0"
          />

          {/* Glowing CTA Button */}
          <div className="button-glow-wrapper flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-[15px] sm:text-[16px] font-bold text-white orange-gradient-btn focus:outline-none z-10 cursor-pointer whitespace-nowrap"
            >
              {isSubmitted ? "Thank you!" : "Request Demo"}
            </button>
          </div>
        </form>
        
        {/* Subtle helper text for interactive feedback */}
        <div className="h-6 mt-3 text-xs sm:text-[13px] text-slate-400/80 font-medium transition-opacity duration-300">
          {isSubmitted && (
            <span className="text-emerald-600 animate-pulse">
              ✓ Demo requested successfully. We will be in touch!
            </span>
          )}
        </div>
      </div>

      {/* Tailwind inline animation styles to support micro-interactions */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in-up-delayed {
          opacity: 0;
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
        }
      `}</style>
    </section>
  );
}
