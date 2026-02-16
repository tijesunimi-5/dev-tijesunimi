'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaJs, FaPython } from 'react-icons/fa'
import { RiNextjsLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri'
import { SiScikitlearn, SiTypescript, SiMongodb, SiExpress, SiPostgresql } from 'react-icons/si'

gsap.registerPlugin(ScrollTrigger);

const skills = {
  frontend: [
    { name: 'React / Next.js', level: 'Advanced', icon: <RiNextjsLine />, rating: 85 },
    { name: 'TypeScript', level: 'Advanced', icon: <SiTypescript />, rating: 80 },
    { name: 'Tailwind CSS', level: 'Expert', icon: <RiTailwindCssLine />, rating: 90 },
    { name: 'GSAP / Motion', level: 'Intermediate', icon: <FaJs />, rating: 75 },
  ],
  backend: [
    { name: 'Node.js / Express', level: 'Building', icon: <SiExpress />, rating: 60 },
    { name: 'PostgreSQL', level: 'Learning', icon: <SiPostgresql />, rating: 55 },
    { name: 'MongoDB', level: 'Intermediate', icon: <SiMongodb />, rating: 70 },
  ],
  ai_data: [
    { name: 'Python (ML)', level: 'Core', icon: <FaPython />, rating: 75 },
    { name: 'NLP & Transformers', level: 'Learning', icon: <SiScikitlearn />, rating: 50 },
    { name: 'Predictive Modeling', level: 'In-Progress', icon: null, rating: 60 },
  ]
};

const Skillset = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Kill existing triggers to prevent duplicates on re-render
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // Set initial state explicitly to avoid "invisible" lock
      gsap.set(".skill-category", { opacity: 0, y: 30 });

      gsap.to(".skill-category", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Starts earlier to ensure user sees it
          toggleActions: "play none none none", // Ensures it stays visible once triggered
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id='skill' className="py-24 px-6 md:px-20 lg:px-32 bg-transparent relative overflow-hidden">
      {/* Ambient Glow behind the AI section */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-[#97694d]/10 blur-[120px] rounded-full -z-10" />

      <div className="mb-16">
        <h2 className="text-sm uppercase tracking-[0.5em] text-[#97694d] font-bold mb-4">Technical Arsenal</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white">
          Powering the <span className="text-white/30 italic">Architecture.</span>
        </h3>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Frontend Pillar */}
        <div className="skill-category lg:col-span-5 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 hover:border-[#97694d]/40 transition-all duration-500 shadow-2xl">
          <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#97694d]" /> Frontend Systems
          </h4>
          <div className="space-y-8">
            {skills.frontend.map((skill, i) => (
              <SkillItem key={i} {...skill} />
            ))}
          </div>
        </div>

        {/* Backend & AI Pillars */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="skill-category bg-white/5 border border-white/20 rounded-[2.5rem] p-10 flex-1 hover:border-[#97694d]/60 transition-all duration-500">
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#97694d]" /> Backend Infrastructure
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.backend.map((skill, i) => (
                <SkillItem key={i} {...skill} />
              ))}
            </div>
          </div>

          <div className="skill-category bg-white/5 border border-[#97694d]/40 rounded-[2.5rem] p-10 flex-1 hover:border-[#97694d] transition-all duration-500 shadow-[inset_0_0_20px_rgba(151,105,77,0.05)]">
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#97694d] animate-pulse" /> AI & Machine Learning
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.ai_data.map((skill, i) => (
                <SkillItem key={i} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SkillItem = ({ name, icon, level, rating }: any) => {
  const isLearning = level === 'Learning' || level === 'In-Progress';

  return (
    <div className="group cursor-default">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl text-[#97694d] group-hover:scale-110 transition-transform duration-300">
            {icon || <div className="w-6 h-6 border border-[#97694d]/40 rounded-sm" />}
          </span>
          <span className="font-bold text-white/80 text-sm tracking-wide uppercase group-hover:text-white transition-colors">
            {name}
          </span>
        </div>

        <span className={`text-[9px] px-2 py-0.5 rounded-full border border-[#97694d]/40 font-bold text-[#97694d] uppercase tracking-widest ${isLearning ? 'animate-pulse bg-[#97694d]/10' : ''}`}>
          {level}
        </span>
      </div>

      <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-[#97694d] transition-all duration-1000 ease-out shadow-[0_0_8px_#97694d]"
          style={{ width: `${rating}%` }}
        />
      </div>
    </div>
  );
};

export default Skillset;