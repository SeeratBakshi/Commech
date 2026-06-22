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
    <header className="w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo on the Left */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
              <div className="w-9 h-9 relative flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                {/* SVG Replica of the mockup logo - abstract P/swoosh mark with cutout */}
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-slate-950"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM18 8H12V24H16V17H18C21.866 17 25 13.866 25 10C25 6.134 21.866 8 18 8ZM16 13V11H18C18.552 11 19 11.448 19 12C19 12.552 18.552 13 18 13H16Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-xl font-medium tracking-tight text-slate-950 font-sans">
                commrmech
              </span>
            </a>
          </div>

          {/* Nav Links + CTA (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <nav className="flex space-x-6 lg:space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[14px] font-normal text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* CTA Button Wrapper to allow bottom glow */}
            <div className="button-glow-wrapper">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5.5 py-2.5 rounded-lg border border-orange-500/30 text-[14px] font-bold text-white orange-gradient-btn z-10"
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
              className="block px-3 py-2.5 rounded-lg text-[16px] font-normal text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
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
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg border border-orange-500/30 text-[15px] font-semibold text-white orange-gradient-btn"
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
