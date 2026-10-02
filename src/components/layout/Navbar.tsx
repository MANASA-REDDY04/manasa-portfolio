"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full pointer-events-none">
      <div className="container mx-auto max-w-6xl px-4 h-24 flex items-center justify-between">
        <Link href="/" className={`font-mono font-black text-2xl tracking-tighter text-white pointer-events-auto hover:scale-105 transition-transform relative z-50 ${!isOpen ? 'mix-blend-difference' : ''}`}>
          KMR<span className="text-[var(--accent)]">.</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-white pointer-events-auto mix-blend-difference">
          <Link href="/#projects" className="relative group">
            <span className="relative z-10">Work</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
          </Link>
          <Link href="/#experience" className="relative group">
            <span className="relative z-10">Experience</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
          </Link>
          <Link href="/#contact" className="relative group">
            <span className="relative z-10">Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden pointer-events-auto text-white relative z-50 p-2 -mr-2 ${!isOpen ? 'mix-blend-difference' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 w-screen h-screen bg-[#050505] flex flex-col items-center justify-center pointer-events-auto z-40 md:hidden">
            <nav className="flex flex-col items-center gap-12 text-2xl font-black tracking-widest uppercase text-white">
              <Link href="/#projects" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors">
                Work
              </Link>
              <Link href="/#experience" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors">
                Experience
              </Link>
              <Link href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
