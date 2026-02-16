'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RiPulseLine, RiBookReadLine, RiCodeLine, RiHospitalLine } from 'react-icons/ri'

gsap.registerPlugin(ScrollTrigger);

const journalEntries = [
  {
    category: "Professional Milestone",
    icon: <RiHospitalLine />,
    title: "UCH Ibadan: OBT System Architecture",
    description: "During my industrial training at University College Hospital, I engineered an Objective-Based Testing (OBT) platform, transitioning from manual testing to a digital-first examination system.",
    status: "Completed"
  },
  {
    category: "Current Build",
    icon: <RiPulseLine />,
    title: "Optimizing Cliva's Store Context",
    description: "Currently engineering the 'Store Context' component for Cliva (formerly Akira AI). Focusing on how the AI interprets Shopify store data to provide accurate sales assistance.",
    status: "Active"
  },
  {
    category: "Technical Pivot",
    icon: <RiCodeLine />,
    title: "Database Migration: PostgreSQL",
    description: "Refactoring the 90+ OBT backend. Migrating from file-based storage to PostgreSQL to handle scaling user sessions and complex relational exam data.",
    status: "In-Progress"
  }
];

const DevJournal = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".journal-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="journal" className="py-24 px-6 md:px-20 lg:px-32 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.5em] text-[#97694d] font-bold mb-4">Live Roadmap</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">The Dev <span className="text-white/30 italic">Journal.</span></h3>
          <p className="text-white/50 mt-4 max-w-xl text-lg">A real-time look at my professional trajectory—from institutional systems at UCH to modern AI platforms.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {journalEntries.map((entry, i) => (
            <div key={i} className="journal-card opacity-0 group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#97694d]/40 transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[#97694d]/10 rounded-xl text-[#97694d] text-2xl">
                  {entry.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#97694d] px-3 py-1 bg-[#97694d]/5 rounded-full border border-[#97694d]/20">
                  {entry.status}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2 block">{entry.category}</span>
              <h4 className="text-xl font-bold mb-4 text-white group-hover:text-[#97694d] transition-colors">{entry.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DevJournal;