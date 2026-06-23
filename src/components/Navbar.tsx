"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Features", href: "#" },
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Login", href: "#" },
    { name: "Signup", href: "#" },
  ];

  return (
    <header className="fixed top-[54px] left-0 right-0 z-50 flex justify-center px-3 sm:px-4 md:px-5">
      <div className="w-full glass-card rounded-[20px] sm:rounded-[28px] shadow-[0_12px_36px_-12px_rgba(0,0,0,0.06)] border border-black/[0.04] transition-all duration-300">
        <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3.5">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center group focus:outline-none" aria-label="Home">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-[56px] md:h-[56px] relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="CommMech"
                  className="w-full h-full object-contain scale-[1.2] sm:scale-[1.3] md:scale-[1.5]"
                />
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] lg:text-[15px] font-semibold text-slate-900 hover:text-orange-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[14px] font-bold text-white orange-gradient-btn z-10"
            >
              Request Demo
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-950 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
          id="mobile-menu"
        >
          <div className="px-4 sm:px-6 pb-5 pt-2 space-y-1 border-t border-black/[0.04] bg-white/90 backdrop-blur-xl rounded-b-[20px] sm:rounded-b-[28px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2.5 rounded-lg text-[15px] font-semibold text-slate-800 hover:text-orange-500 hover:bg-black/[0.02] transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-black/[0.04] my-3" />
            <a
              href="#"
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full text-[14px] font-bold text-white orange-gradient-btn"
              onClick={() => setIsOpen(false)}
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
