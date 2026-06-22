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
    { name: "Login", href: "#" },
    { name: "Signup", href: "#" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-5xl glass-card rounded-[28px] shadow-[0_12px_36px_-12px_rgba(0,0,0,0.06)] border border-black/[0.04] transition-all duration-300">
        <div className="flex items-center justify-between h-16 pl-5 pr-2">
          
          {/* Logo on the Left */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center group focus:outline-none" aria-label="Home">
              <div className="w-10 h-10 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                {/* High-Fidelity Exact SVG Replica of the target logo */}
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-black"
                >
                  <circle cx="50" cy="50" r="48" fill="currentColor" />
                  {/* Left Arc */}
                  <path d="M 30 30 C 20 40, 20 60, 30 70 C 25 60, 25 40, 30 30 Z" fill="white" />
                  {/* Right Arc */}
                  <path d="M 70 30 C 80 40, 80 60, 70 70 C 75 60, 75 40, 70 30 Z" fill="white" />
                  {/* Central Lens */}
                  <path d="M 50 18 C 36 38, 36 62, 50 82 C 64 62, 64 38, 50 18 Z" fill="white" />
                  {/* Center Dot */}
                  <circle cx="50" cy="50" r="7.5" fill="currentColor" />
                </svg>
              </div>
            </a>
          </div>

          {/* Links in the Center (Desktop) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
          
          {/* CTA Button on the Right (Desktop) */}
          <div className="hidden md:block button-glow-wrapper">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[14px] font-bold text-white orange-gradient-btn z-10"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="flex md:hidden items-center pr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-950 focus:outline-none transition-colors"
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
                  strokeWidth="1.8"
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
                  strokeWidth="1.8"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu (Expandable inside floating card) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          id="mobile-menu"
        >
          <div className="px-6 pb-6 pt-2 space-y-1 border-t border-black/[0.04]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-[15px] font-semibold text-slate-800 hover:text-orange-500 hover:bg-black/[0.02] transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-black/[0.04] my-3" />
            <div className="button-glow-wrapper pt-1">
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
      </div>
    </header>
  );
}
