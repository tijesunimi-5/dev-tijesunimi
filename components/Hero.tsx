import React from 'react'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 pt-20 overflow-hidden">
      <div className="hero-glow-bg absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 z-10">
          <span className="hero-tag block text-xs md:text-sm uppercase tracking-[0.4em] text-brand font-bold mb-6">
            Fullstack Developer • AI Product Builder
          </span>

          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">
            I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-white/80">Digital Products</span> <br />
            That Actually Matter.
          </h1>

          <p className="hero-description text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">
            I turn complex ideas into clean, usable products — combining AI, solid backend systems, and thoughtful frontend design.
            Building from Nigeria, shipping for the world.
          </p>

          <div className="hero-buttons flex flex-wrap gap-6">
            <a href='#projects' className="px-10 py-4 bg-brand hover:bg-brand-accent transition-all duration-300 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl shadow-brand/20">
              Explore My Work
            </a>
            <a href='#collaborate' className="px-10 py-4 border border-white/10 hover:bg-white/5 transition-all duration-300 rounded-full font-bold text-sm uppercase tracking-widest backdrop-blur-sm">
              Let's Build Together
            </a>
          </div>
        </div>

        {/* Visual Architecture Side */}
        <div className="lg:col-span-5 relative hidden lg:flex justify-center">
          <div className="hero-visual relative">
            <img src="/Candle.png" alt="Builder Metaphor" className="w-[320px] filter drop-shadow-[0_35px_35px_rgba(151,105,77,0.3)]" />

            {/* Floating Social Icons as Nodes */}
            <div className="floating-node absolute -top-10 -right-8 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
              <Link href="https://linkedin.com/in/idowu-tijesunimi-189492294"><FaLinkedin className="text-3xl text-brand" /></Link>
            </div>
            <div className="floating-node absolute bottom-20 -left-12 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
              <RiNextjsFill className="text-3xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
