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
    category: "Health Innovation",
    icon: <RiHospitalLine />,
    title: "EFAA: Emergency First-Aid Assistant",
    description: "EFAA started from a simple question — what happens when someone collapses and nobody knows what to do? Many people walk away from emergencies not because they don't care, but because they are afraid and unsure. I'm building a tool that guides people step-by-step on what to do before medical help arrives. It also includes a learning section so users can prepare before emergencies happen. I'm building this with a team of medical students and we're focused on real impact.",
    status: "In Development"
  },
  {
    category: "Faith & Community",
    icon: <RiPulseLine />,
    title: "Jesus Connect",
    description: "Jesus Connect came from seeing how many people are afraid to open up about their struggles. Some are shy. Some fear judgment. The idea is to build a safe platform where users can choose to stay anonymous, select what area they need help in — finance, addiction, spiritual growth — and get matched with pastors or counselors who specialize in those areas. We also narrow it down by location. I believe this will help people find real support and direction. Currently in development.",
    status: "In Development"
  },
  {
    category: "AI Product",
    icon: <RiCodeLine />,
    title: "Cliva: AI Sales Assistant",
    description: "Cliva is a conversion-focused AI sales assistant built for store owners. It understands store products deeply and helps customers make better buying decisions. It’s not just a chatbot — it guides, upsells, cross-sells, and gives store owners clear insights into performance and customer behavior. The product is live and I'm currently looking for early users.",
    status: "Live"
  },
  {
    category: "Personal Growth",
    icon: <RiBookReadLine />,
    title: "Reading: The Psychology of Money",
    description: "This book changed how I see money. I understood that people spend based on what they've told themselves about money. Nobody is crazy — we all have money stories. I became more intentional about budgeting, cutting unnecessary costs, and thinking long-term.",
    status: "Completed"
  },
  {
    category: "Personal Growth",
    icon: <RiBookReadLine />,
    title: "Reading: Boundaries",
    description: "This book taught me to know what I am and what I am not. I learned to define my values clearly, state what I tolerate and what I don’t, respect people's decisions, and value my time more. I’ve seen real changes in my daily life because of this.",
    status: "Completed"
  },
  {
    category: "Leadership Development",
    icon: <RiBookReadLine />,
    title: "Currently Reading: Emotional Intelligence Habit",
    description: "I'm learning to understand my emotions instead of suppressing them. I’m working on not letting emotions control my actions while still acknowledging them. It’s helping me manage people better, lead my team well, and encourage others with maturity.",
    status: "Reading"
  },
  {
    category: "Discipline",
    icon: <RiPulseLine />,
    title: "100 Days Commitment Challenge",
    description: "I joined a 100-day commitment challenge focused on becoming a better version of myself. The discipline has been stretching, but I can see the difference already. My goal is to become a highly disciplined and principle-driven man.",
    status: "Ongoing"
  },
  {
    category: "Health Exposure",
    icon: <RiHospitalLine />,
    title: "Leadership Webinar – Nursing Association",
    description: "I attended a leadership webinar hosted by a nursing association. It was inspiring to be around health professionals. I’m deeply interested in health opportunities — not to treat patients directly, but to use technology to solve real problems in healthcare.",
    status: "Attended"
  },

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
          <h3 className="text-4xl md:text-5xl font-black text-white">My Growth <span className="text-white/30 italic">Journal.</span></h3>
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