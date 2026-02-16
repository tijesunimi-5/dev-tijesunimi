'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdArrowOutward } from 'react-icons/md'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 md:px-20 lg:px-32 relative overflow-hidden">
      {/* Background Gradient Element */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-[#97694d]/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-16">

        {/* Positioning Column */}
        <div className="lg:w-3/5 text-center lg:text-left">
          <h2 className="contact-reveal text-sm uppercase tracking-[0.5em] text-[#97694d] font-bold mb-6">
            Final Step
          </h2>
          <h3 className="contact-reveal text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            Ready to Build the <br />
            <span className="text-white/30 italic">Next Big System?</span>
          </h3>
          <p className="contact-reveal text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Whether you are a founder looking for a technical partner or an established team seeking an AI-focused architect, I am ready to deploy. I bridge the gap between complex engineering and premium product design.
          </p>
        </div>

        {/* Interaction Dock */}
        <div className="contact-reveal lg:w-2/5 w-full flex flex-col gap-4">
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl">
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest text-center">Direct Channels</h4>

            <div className="grid grid-cols-2 gap-4">
              <ContactLink
                href="https://www.linkedin.com/in/idowu-tijesunimi-189492294"
                icon={<FaLinkedin />}
                label="LinkedIn"
              />
              <ContactLink
                href="https://wa.me/+2347018268171?text=Hello%20Tijesunimi,%20I'm%20interested%20in%20discussing%20a%20project."
                icon={<FaWhatsapp />}
                label="WhatsApp"
              />
              <ContactLink
                href="mailto:tijesunimiidowu16@gmail.com"
                icon={<MdEmail />}
                label="Email"
              />
              <ContactLink
                href="https://x.com/codelight001"
                icon={<FaTwitter />}
                label="Twitter"
              />
            </div>

            <Link
              href="mailto:tijesunimiidowu16@gmail.com"
              className="mt-8 w-full py-5 bg-[#97694d] hover:bg-[#a4795e] text-white rounded-2xl flex items-center justify-center gap-3 font-black transition-all group"
            >
              START A PROJECT <MdArrowOutward className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Signature */}
      <footer className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
        <p className="text-xs tracking-widest uppercase font-bold text-white">
          © {new Date().getFullYear()} Idowu Tijesunimi • AI Product Builder
        </p>
        <p className="text-xs tracking-widest uppercase font-bold text-white">
          Engineered in Ibadan, Nigeria
        </p>
      </footer>
    </section>
  )
}

const ContactLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <Link
    href={href}
    target="_blank"
    className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-[#97694d]/40 hover:bg-[#97694d]/5 transition-all group"
  >
    <span className="text-3xl text-white/40 group-hover:text-[#97694d] group-hover:scale-110 transition-all mb-2">
      {icon}
    </span>
    <span className="text-[10px] font-bold text-white/20 group-hover:text-white/60 tracking-widest uppercase transition-all">
      {label}
    </span>
  </Link>
);

export default ContactSection;