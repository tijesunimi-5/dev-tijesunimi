'use client'
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { RiHeartPulseLine, RiRocketLine, RiTeamLine } from 'react-icons/ri';

// Keep this empty if there are no active specific projects, 
// or populate it with your upcoming Health Webinar/Outreach.
interface Collaboration {
  title: string;
  description: string;
  stage: string;
  skills: string[];
  link: string;
}

const collaborations: Collaboration[] = [
  /* {
    title: "Health Awareness Webinar",
    description: "Collaborating with medical students to drive health literacy. Seeking speakers, organizers, and logistics volunteers.",
    stage: "Planning",
    skills: ["Public Health", "Organizing", "Content Creation"],
    link: "mailto:tijesunimiidowu16@gmail.com"
  } */
];

export default function Collaboration() {
  const sectionRef = useRef(null);

  const handleContact = (type: 'whatsapp' | 'email', projectName?: string) => {
    const subject = projectName ? `Collaboration on ${projectName}` : "General Partnership/Volunteering";
    const message = projectName
      ? `Hello Tijesunimi, I'm interested in collaborating on "${projectName}". I saw this on your portfolio and would love to chat.`
      : `Hello Tijesunimi, I'm interested in joining your future initiatives (Tech or Health). I'd love to volunteer my skills.`;

    if (type === 'whatsapp') {
      const url = `https://wa.me/2347018268171?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else {
      window.location.href = `mailto:tijesunimiidowu16@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    }
  };

  return (
    <section ref={sectionRef} id='collaborate' className="py-24 px-6 md:px-20 lg:px-32 relative">
      <div className="mb-16">
        <h2 className="text-sm uppercase tracking-[0.5em] text-[#97694d] font-bold mb-4">Open Initiatives</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white">Let’s Build <span className="text-white/30 italic">Impact.</span></h3>
        <p className="text-white/50 mt-4 max-w-2xl text-lg">
          I bridge the gap between technology and community health. Whether you are a developer or a health professional, there's a seat at the table.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {collaborations.length > 0 ? (
          collaborations.map((project, index) => (
            <div key={index} className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#97694d]/50 transition-all duration-500">
              {/* Project Card Logic as before */}
              <div className="flex justify-between mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#97694d] px-3 py-1 bg-[#97694d]/5 rounded-full border border-[#97694d]/20">Stage: {project.stage}</span>
              </div>
              <h4 className="text-2xl font-bold mb-3 text-white">{project.title}</h4>
              <p className="text-white/60 mb-6 text-sm">{project.description}</p>
              <button onClick={() => handleContact('whatsapp', project.title)} className="w-full py-4 bg-[#97694d] rounded-xl font-bold text-sm">Join Initiative</button>
            </div>
          ))
        ) : (
          /* EMPTY STATE / GENERAL CALL TO ACTION */
          <>
            {/* Health & Outreach Card */}
            <div className="group p-8 rounded-[2rem] bg-[#97694d]/5 border border-[#97694d]/20 hover:border-[#97694d] transition-all duration-500 shadow-[inset_0_0_20px_rgba(151,105,77,0.05)]">
              <div className="text-4xl text-[#97694d] mb-6"><RiHeartPulseLine className="animate-pulse" /></div>
              <h4 className="text-2xl font-bold mb-3 text-white">Health Outreach & Webinars</h4>
              <p className="text-white/60 mb-8 text-sm leading-relaxed">
                I am currently collaborating with medical students and healthcare professionals for an upcoming health awareness drive. If you're a medic or a volunteer looking to drive impact, let's connect.
              </p>
              <div className="flex gap-4">
                <button onClick={() => handleContact('whatsapp')} className="flex-1 py-4 bg-[#97694d] hover:bg-[#a4795e] text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all">WhatsApp Medic Team</button>
              </div>
            </div>

            {/* General System Collaboration Card */}
            <div className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500">
              <div className="text-4xl text-white/20 mb-6 group-hover:text-white/50 transition-colors"><RiTeamLine /></div>
              <h4 className="text-2xl font-bold mb-3 text-white">Future Systems & Tech</h4>
              <p className="text-white/60 mb-8 text-sm leading-relaxed">
                No active tech projects currently open for dev-collaboration, but I’m always conceptualizing new AI & SaaS tools. Drop an email to be the first to know when the next repo goes live.
              </p>
              <button onClick={() => handleContact('email')} className="w-full py-4 border border-white/10 hover:bg-white/5 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all">Send Email Interest</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}