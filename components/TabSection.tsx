'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const TabSection = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We use a slight delay and force opacity to ensure visibility
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current,
        {
          y: -30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.5,
          ease: "power4.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    // Removed pointer-events-none to test visibility; added h-fit
    <header className="fixed top-0 left-0 right-0 w-full z-[100] flex justify-center pt-8 px-4 h-fit">
      <nav
        ref={navRef}
        style={{ opacity: 0 }} // Prevents flash of unstyled content before GSAP kicks in
        className="flex items-center gap-1 p-1.5 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#97694d]/50"
      >
        <NavLink href="#hero" label="Home" />
        <NavLink href="#about" label="Identity" />
        <NavLink href="#journal" label="Journal" />
        <NavLink href="#projects" label="Systems" />
        <NavLink href="#collaborate" label="Collab" />
        <NavLink href="#skill" label="Skill" />
        <NavLink href="#contact" label="Connect" />


        {/* Status Indicator */}
        <div className="hidden md:flex items-center gap-2 pl-4 pr-5 border-l border-white/10 ml-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#97694d] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#97694d]"></span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.2em] font-black text-white/50">
            Available
          </span>
        </div>
      </nav>
    </header>
  )
}

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-bold text-white/60 hover:text-white transition-all duration-300 relative group"
  >
    <span className="relative z-10">{label}</span>
    {/* Background hover pill */}
    <span className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    {/* Architectural Underline */}
    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#97694d] transition-all duration-300 group-hover:w-1/3" />
  </Link>
)

export default TabSection