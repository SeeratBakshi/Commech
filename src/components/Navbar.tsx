"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Features", href: "#" },
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <header className="w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo on the Left */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group focus:outline-none">
              <div className="w-9 h-9 relative flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                {/* SVG Replica of the mockup logo */}
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-slate-900"
                >
                  <circle cx="50" cy="50" r="48" fill="currentColor" />
                  {/* Dynamic internal spiral/leaf shapes for design fidelity */}
                  <path
                    d="M50 16C31.22 16 16 31.22 16 50C16 68.78 31.22 84 50 84C68.78 84 84 68.78 84 50C84 41.5 80.5 33.8 74.8 28.2L66.3 36.7C69.8 40.2 72 44.8 72 50C72 62.1 62.1 72 50 72C37.9 72 28 62.1 28 50C28 37.9 37.9 28 50 28C55.2 28 59.8 30.2 63.3 33.7L71.8 25.2C66.2 19.5 58.5 16 50 16Z"
                    fill="white"
                  />
                  <circle cx="50" cy="50" r="14" fill="white" />
                  <path
                    d="M50 43C46.1 43 43 46.1 43 50C43 53.9 46.1 57 50 57C53.9 57 57 53.9 57 50L50 43Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 font-sans group-hover:text-slate-700 transition-colors">
                commrmech
              </span>
            </a>
          </div>

          {/* Middle Nav Links (Desktop) */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-slate-600 hover:text-slate-950 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Items (Desktop) */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#"
              className="text-[15px] font-medium text-slate-600 hover:text-slate-950 transition-colors duration-200"
            >
              Login
            </a>
            <a
              href="#"
              className="text-[15px] font-medium text-slate-600 hover:text-slate-950 transition-colors duration-200"
            >
              Signup
            </a>
            
            {/* CTA Button Wrapper to allow bottom glow */}
            <div className="button-glow-wrapper">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[14px] font-semibold text-white orange-gradient-btn z-10"
              >
                Request Demo
              </a>
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close Icon
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu (Hamburger) Icon
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2.5 rounded-lg text-[16px] font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-slate-200/60 my-4" />
          <div className="flex flex-col space-y-3 px-3">
            <a
              href="#"
              className="text-[16px] font-medium text-slate-700 hover:text-slate-950 py-1"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
            <a
              href="#"
              className="text-[16px] font-medium text-slate-700 hover:text-slate-950 py-1"
              onClick={() => setIsOpen(false)}
            >
              Signup
            </a>
            <a
              href="#"
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full text-[15px] font-semibold text-white orange-gradient-btn"
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
