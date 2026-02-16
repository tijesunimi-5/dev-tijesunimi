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
    category: "AI Product Development",
    icon: <RiPulseLine />,
    title: "Optimizing Cliva's Store Context",
    description: "Currently refining the “Store Context” intelligence layer in Cliva — focusing on how AI interprets product data, customer behavior, and store structure to assist with real purchase decisions. The goal is clarity, not noise..",
    status: "Active"
  },
  {
    category: "Technical Pivot",
    icon: <RiCodeLine />,
    title: "Database Migration: PostgreSQL",
    description: "Refactoring the 90+ OBT backend. Migrating from file-based storage to PostgreSQL to handle scaling user sessions and complex relational exam data.",
    status: "In-Progress"
  },
  {
    category: "Health Innovation",
    icon: <RiHospitalLine />,
    title: "MedTech: AI Health Prediction Systems",
    description: "Building and experimenting with AI-driven health prediction models focused on awareness and early risk detection. This phase strengthened my understanding of responsible AI usage in sensitive domains like healthcare.",
    status: "Evolving"
  },
  {
    category: "What I'm Studying",
    icon: <RiBookReadLine />,
    title: "Systems Thinking & Health Technology",
    description: "Studying systems thinking, prevention models, and how technology can improve healthcare accessibility. Books and long-form materials I consume shape how I approach product design and long-term impact.",
    status: "Ongoing"
  },
  {
    category: "Perspective Shift",
    icon: <RiBookReadLine />,
    title: "Global Health & Technology Case Studies",
    description: "Exploring documentaries and case studies on how technology reshapes healthcare systems worldwide. These insights influence how I design for clarity, scalability, and real-world constraints.",
    status: "Exploring"
  },
  {
    category: "Lessons Learned",
    icon: <RiCodeLine />,
    title: "What Building Has Taught Me",
    description: "Clean architecture beats quick hacks. Users value clarity over complexity. And long-term thinking always outperforms short-term hype. Every project reinforces these principles.",
    status: "Refined"
  },
  {
    category: "Product Evolution",
    icon: <RiPulseLine />,
    title: "Health-Focused Platform Exploration",
    description: "Currently exploring early-stage health-focused platforms centered around awareness, lifestyle guidance, and intelligent decision support. The focus is building tools that strengthen human decision-making.",
    status: "Research Phase"
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
          <h2 className="text-sm uppercase tracking-[0.5em] text-[#97694d] font-bold mb-4">Ongoing Roadmap</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">My Builder's <span className="text-white/30 italic">Journal.</span></h3>
          <p className="text-white/50 mt-4 max-w-xl text-lg">A living record of what I’m building, learning, studying, and experimenting with — from health systems to AI platforms and everything in between.</p>
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