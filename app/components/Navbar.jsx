"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/Logo-Build-Flow.png"
            alt="BuildFlow Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl font-bold text-white">BuildFlow</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-300">
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#footer" className="hover:text-white transition">Contact</a>

          <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
            Get Started
          </button>
        </div>

        {/* Mobile Button */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4 text-gray-300 animate-fade-in">
          <a href="#hero" className="block hover:text-white">Home</a>
          <a href="#features" className="block hover:text-white">Features</a>
          <a href="#testimonials" className="block hover:text-white">Testimonials</a>
          <a href="#pricing" className="block hover:text-white">Pricing</a>
          <a href="#footer" className="block hover:text-white">Contact</a>

          <button className="w-full px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
