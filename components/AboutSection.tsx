'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Display {
  id: number;
  title: string;
  label: string;
  text: string;
}

const contentData: Display[] = [
  {
    id: 1,
    title: 'Why I Build',
    label: 'Mission',
    text: 'I’m based in Ibadan, Nigeria, and I build products that combine intelligence with usability. Over time, I’ve developed a strong interest in health technology — especially tools that improve awareness, prevention, and decision- making. Whether in education, e - commerce, or healthcare, my goal is simple: build systems that make real impact in people’s lives.',
  },
  {
    id: 2,
    title: 'Education',
    label: 'Education',
    text: 'I’m currently completing a Bachelor of Technology in Computer Science at Ladoke Akintola University. My academic training strengthened my understanding of algorithms, data structures, and machine learning — foundations I now apply in product development and health- focused AI systems.',
  },
  {
    id: 3,
    title: 'How I Build',
    label: 'Engineering',
    text: 'I work primarily with Next.js, TypeScript, Node.js, and PostgreSQL to build scalable applications. For AI- driven features, I use Python and Scikit - learn to design intelligent systems — including health - related prediction and awareness tools. For motion and experience, I rely on GSAP to create smooth, intentional interactions. Every tool I use is chosen for clarity, performance, and long - term maintainability.',
  },
  {
    id: 4,
    title: 'Health & Product Experience',
    label: 'Experience',
    text: 'Since 2022, I’ve evolved from writing code to building mission-driven products. Through MedTech initiatives, I’ve worked on AI- powered health prediction systems and public awareness campaigns designed to make medical information more accessible and relatable. I’ve also explored early - stage health - focused platforms aimed at guiding users toward better lifestyle and decision habits. Beyond healthcare, I’ve built intelligent e - commerce assistants and educational tools — always with the same mindset: technology should serve people, not confuse them.',
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const displayCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance reveal for the entire section
      gsap.from(".about-reveal", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Content switch animation
  useEffect(() => {
    gsap.fromTo(
      displayCardRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
    );
  }, [activeTab]);

  const activeContent = contentData.find((item) => item.id === activeTab) || contentData[0];

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 md:px-20 lg:px-32 relative overflow-hidden">
      {/* Background Ambient Element */}
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-[#97694d]/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">

        {/* Story Column */}
        <div className="lg:col-span-6">
          <h2 className="about-reveal text-sm uppercase tracking-[0.5em] text-[#97694d] font-bold mb-6">
            About Me
          </h2>
          <h3 className="about-reveal text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            Product Thinking. <br />
            <span className="text-white/30">System Building.</span>
          </h3>
          <p className="about-reveal text-lg md:text-xl text-white/60 leading-relaxed mb-10">
            I don’t just build websites. I build systems people can rely on.
            My work sits at the intersection of clean design, solid backend architecture, practical AI, and health-focused innovation.
            Every project starts with one question — what problem are we really solving, and who does it truly help?
          </p>

          <div className="about-reveal flex flex-wrap gap-4">
            {['#AIProducts', '#FullstackDeveloper', '#BuildingWithPurpose'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest text-[#97694d]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Tabbed Info Column */}
        <div className="lg:col-span-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          <div className="flex flex-wrap gap-4 mb-12">
            {contentData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === item.id
                    ? 'bg-[#97694d] text-white shadow-lg shadow-[#97694d]/20'
                    : 'bg-white/5 text-white/40 hover:bg-white/10'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div ref={displayCardRef} className="min-h-[250px]">
            <h4 className="text-3xl font-black text-white mb-6">
              {activeContent.title}
            </h4>
            <p className="text-lg text-white/60 leading-relaxed">
              {activeContent.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;