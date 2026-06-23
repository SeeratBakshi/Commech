"use client";

import { useState, useCallback } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (email.trim()) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setEmail("");
      }
    },
    [email]
  );

  return (
    <section className="flex flex-col items-center justify-center flex-1 px-4 sm:px-6 md:px-8 text-center pt-24 sm:pt-28 md:pt-[145px] pb-10 sm:pb-16 relative z-10 max-w-5xl mx-auto w-full">
      <div className="animate-fade-in-up">
        <h1 className="text-[42px] sm:text-[48px] md:text-7xl lg:text-8xl xl:text-[110px] font-semibold tracking-[-0.035em] leading-[1.08] sm:leading-[1.04] select-none pb-2 sm:pb-4 text-center">
          <span className="text-gradient-building">Building</span>{" "}
          <span className="text-black">the</span>
          <br />
          {" "}
          <span className="text-gradient-future">Future</span>{" "}
          <span className="text-black">of</span>{" "}
          <span className="text-gradient-tech">Tech</span>
        </h1>
      </div>

      <div className="h-8 sm:h-2 md:h-3" />

      <div className="w-full max-w-[570px] mx-auto animate-fade-in-up-delayed px-0 sm:px-1">
        <form
          onSubmit={handleSubmit}
          className="email-form-container rounded-2xl sm:rounded-full p-2 sm:p-2.5 pl-4 sm:pl-7 flex items-center relative group transition-all duration-300"
        >
          <svg
            className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-slate-600 mr-2 sm:mr-3.5 flex-shrink-0 transition-colors group-focus-within:text-slate-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            aria-label="Email address"
            className="w-full bg-transparent border-none text-[15px] sm:text-[17px] md:text-[18px] text-slate-800 placeholder-slate-600 font-medium focus:outline-none focus:ring-0 pr-2 min-w-0 py-3 sm:py-4"
          />

          <div className="flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-full text-[14px] sm:text-[16px] md:text-[17px] font-semibold text-white orange-gradient-btn focus:outline-none z-10 cursor-pointer whitespace-nowrap"
            >
              {isSubmitted ? "Thank you!" : "Request Demo"}
            </button>
          </div>
        </form>

        <div
          className="h-6 mt-2 sm:mt-3 text-xs sm:text-[13px] text-slate-400/80 font-medium transition-opacity duration-300"
          aria-live="polite"
        >
          {isSubmitted && (
            <span className="text-emerald-600 animate-pulse">
              ✓ Demo requested successfully. We will be in touch!
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
