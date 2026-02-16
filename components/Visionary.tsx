'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Visionary = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the image and text with a synchronized movement
      gsap.from(".vision-image", {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      gsap.from(".vision-text", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-20 lg:px-32 relative overflow-hidden bg-black">
      {/* Background Accent */}
      <div className="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] bg-[#97694d]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Editorial Image */}
        <div className="lg:w-1/2 relative group">
          <div className="vision-image relative z-10 rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/5] lg:aspect-square shadow-2xl">
            <img
              src="/dev_teelight.png" // Using your provided profile image
              alt="Idowu Tijesunimi"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
          </div>
          {/* Architectural Glow behind image */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#97694d]/30 rounded-[2rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
        </div>

        {/* The Quote Column */}
        <div className="lg:w-1/2">
          <span className="vision-text block text-sm uppercase tracking-[0.5em] text-[#97694d] font-bold mb-8">
            The Perspective
          </span>

          <h2 className="vision-text text-3xl md:text-4xl lg:text-6xl font-serif italic text-white leading-tight mb-10">
            "The future doesn’t belong to those who code the most.
 
            <span className="text-[#97694d]"> It belongs to those who understand what truly needs to be built.</span>"
          </h2>

          <div className="vision-text">
            <h4 className="text-xl font-bold text-white mb-2">Idowu Tijesunimi</h4>
            <p className="text-white/40 uppercase tracking-widest text-xs font-black">
              Founder & Systems Architect • Ibadan, Nigeria
            </p>
          </div>

          <p className="vision-text mt-12 text-white/60 leading-relaxed max-w-lg">
            I’m deeply interested in the future of health, AI, and intelligent systems.
My work is centered around one principle — build technology that makes people stronger, not dependent.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Visionary;