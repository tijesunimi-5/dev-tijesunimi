'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RiNextjsLine, RiTailwindCssLine, RiArrowRightLine, RiCloseLine, RiExternalLinkLine } from 'react-icons/ri'
import { SiMongodb, SiTypescript, SiScikitlearn, SiHuggingface } from 'react-icons/si'
import { FaNodeJs, FaPython, FaJs } from 'react-icons/fa'
import type { ReactElement } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: number
  title: string
  headline: string
  description: string
  tech_stack: ReactElement[]
  features: string[]
  image: string
  category: 'website' | 'smart website'
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: '90+ Online Based Test',
    headline: 'Empowering Academic Excellence',
    description:
      'A high-performance examination platform built for university aspirants preparing for UTME and Post-UTME. I designed and architected the backend to handle real-time timed mock exams, secure authentication, and structured result tracking — creating a reliable digital testing environment students can depend on.',
    tech_stack: [
      <RiNextjsLine key="n" />,
      <RiTailwindCssLine key="t" />,
      <SiTypescript key="ts" />,
      <SiMongodb key="m" />,
      <FaNodeJs key="nj" />,
    ],
    features: ['Real-time Timed Exams', 'Secure Auth', 'Admin Dashboard', 'Embedded Calculator'],
    image: '/newlanding.png',
    category: 'website',
    link: 'https://90-tutorials.vercel.app',
  },
  {
    id: 2,
    title: 'Cliva',
    headline: 'Conversion-focused AI sales assistant',
    description:
    'Cliva is an AI-powered assistant designed to help customers make smarter purchase decisions. It interprets product data, store structure, and user intent to reduce confusion and guide clearer buying choices. The focus is clarity over noise.',
    tech_stack: [
      <RiNextjsLine key="n" />,
      <RiTailwindCssLine key="t" />,
      <SiTypescript key="ts" />,
      <FaNodeJs key="nj" />,
    ],
    features: [
      'Store Context Intelligence',
      'AI Purchase Guidance',
      'Structured Product Insights',
    ],
    image: '/cliva.png',
    category: 'smart website',
    link: 'https://clivaai.vercel.app',
  },
  {
    id: 3,
    title: 'Emergency First-Aid Assistant (EFAA)',
    headline: 'Smart Health Awareness Assistant',
    description:
    'EFAA is a health platform designed to provide calm, step-by-step guidance when every second counts. It helps users understand daily health risks, provides step-by-step guidance during emergencies, and encourages early action through intelligent recommendations. Built around clarity, trust, and accessibility.',
    tech_stack: [
      <RiNextjsLine key="n" />,
      <RiTailwindCssLine key="t" />,
      <SiTypescript key="ts" />,
      // <FaPython key="p" />,
    ],
    features: [
      'Personalized Health Insights',
      'Preventive Education Flow',
      // 'AI-Assisted Awareness System',
    ],
    image: '/efaa.png',
    category: 'smart website',
    link: '#',
  },
  {
    id: 4,
    title: 'Jesus Connect',
    headline: 'Faith Meets Community & Purpose',
    description:
      'A digital platform built to connect believers for spiritual growth, counseling, and mentorship. Jesus Connect provides personalized faith journeys, and counselor dashboards — blending technology with human connection and purpose.',
    tech_stack: [
      <RiNextjsLine key="n" />,
      <RiTailwindCssLine key="t" />,
      <SiTypescript key="ts" />,
      <FaNodeJs key="nj" />,
    ],
    features: [
      'Counselor Dashboard',
      'Interactive Prayer Rooms',
      'User Faith Journey Profiles',
    ],
    image: '/jesusConnect.png',
    category: 'smart website',
    link: '#',
  },
  {
    id: 5,
    title: "RCCG York",
    headline: "Modern Church Web Platform",
    description:
      "Designed and developed a modern, responsive church website to streamline access to sermons, announcements, service information, and media content. Built with performance, clarity, and accessibility in mind — ensuring both members and first-time visitors can navigate seamlessly.",
    tech_stack: [
      <RiNextjsLine key="n" />,
      <RiTailwindCssLine key="t" />,
      <SiTypescript key="ts" />,
      <FaNodeJs key="nj" />,
      <SiMongodb key="m" />,
    ],
    features: [
      "Dynamic Sermon Uploads",
      "YouTube Integration",
      "Responsive UI/UX",
    ],
    image: "/rccgyork.png",
    category: "website",
    link: "http://rccgyork-6fih.vercel.app/",
  },
  {
    id: 6,
    title: 'MedTech AI',
    headline: 'AI-Powered Healthcare Innovation',
    description:
      'A health-focused AI platform built to explore early risk detection and awareness. I developed machine learning models using Scikit-learn to analyze health indicators and integrated them into a responsive Next.js frontend — combining predictive intelligence with accessible user experience.',
    tech_stack: [
      <FaPython key="p" />,
      <SiScikitlearn key="s" />,
      <RiNextjsLine key="n" />,
      <SiTypescript key="ts" />,
    ],
    features: ['Predictive ML Models', 'FastAPI Backend', 'Health Data Visualization'],
    image: '/medtech.png',
    category: 'smart website',
    link: 'https://med-techai.vercel.app',
  },
  {
    id: 7,
    title: "Reader's Assistant",
    headline: 'Interactive AI-Powered Learning',
    description:
      'An intelligent reading platform that transforms static PDFs and images into interactive study sessions. Leveraging OCR and pretrained language models, it allows users to query their materials through text or voice — turning passive reading into active learning.',
    tech_stack: [
      <SiHuggingface key="h" />,
      <RiNextjsLine key="n" />,
      <FaJs key="j" />,
      <RiTailwindCssLine key="t" />,
    ],
    features: ['OCR to Text', 'AI Q&A Model', 'Voice-driven Feedback'],
    image: '/readerass.png',
    category: 'smart website',
    link: 'https://reader-s-assistant-ai.vercel.app',
  }, 
  {
    id: 8,
    title: "eMart",
    headline: "E-commerce + Recommendation System",
    description:
      "An early exploration into building an e-commerce platform integrated with a basic machine learning recommendation engine. The project helped me understand user behavior modeling and product suggestion logic using Scikit-learn.",
    tech_stack: [
      <RiNextjsLine key="n" />,
      <FaNodeJs key="nj" />,
      <SiMongodb key="m" />,
      <FaPython key="p" />,
      <SiScikitlearn key="s" />,
    ],
    features: [
      "Product Recommendation Engine",
      "User Behavior Tracking",
      "Full-stack Architecture",
    ],
    image: "/emart.png",
    category: "smart website",
    link: "https://e-mart-rho.vercel.app",
  },
  {
    id: 9,
    title: "Text Snap",
    headline: "Lightweight Image & Text Tool",
    description:
      "A simple creative utility tool built to merge images and text using JavaScript Canvas APIs. Focused on frontend interaction design and rapid prototyping. One of my early hands-on experiments with browser rendering logic.",
    tech_stack: [
      <FaJs key="j" />,
      <RiTailwindCssLine key="t" />,
    ],
    features: [
      "Canvas Image Manipulation",
      "Text Overlay Engine",
      "Clean Minimal UI",
    ],
    image: "/textsnap.png",
    category: "website",
    link: "https://text-snap-neon.vercel.app",
  },
]


export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section id="projects" className="relative bg-[#0a0a0a]">
      {/* 💻 DESKTOP: Horizontal Cinematic Scroll */}
      <div ref={targetRef} className="hidden lg:block h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden px-10">
          <div className="absolute top-20 left-20 z-10">
            <h2 className="text-sm uppercase tracking-[0.5em] text-[#97694d] font-bold mb-2">Portfolio</h2>
            <h3 className="text-6xl font-black text-white">Built Systems.</h3>
          </div>

          <motion.div style={{ x }} className="flex gap-20 mt-20">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="group relative flex-shrink-0 w-[800px] h-[500px] rounded-3xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />

                <div className="absolute bottom-0 left-0 p-12 z-20 w-full">
                  <span className="text-xs uppercase tracking-widest text-[#97694d] font-bold mb-2 block">{project.category}</span>
                  <h4 className="text-4xl font-black text-white mb-4">{project.title}</h4>
                  <p className="text-white/60 line-clamp-2 max-w-xl mb-6">{project.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-2xl text-white/40">
                      {project.tech_stack}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-6 py-3 bg-[#97694d] rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#a4795e] transition-all"
                    >
                      Case Study <RiArrowRightLine />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 📱 MOBILE: Clean Vertical Stack */}
      <div className="lg:hidden px-6 py-20 space-y-12">
        <div className="mb-10">
          <h2 className="text-xs uppercase tracking-[0.4em] text-[#97694d] font-bold mb-2">Featured Work</h2>
          <h3 className="text-4xl font-black text-white">Systems & Products.</h3>
        </div>

        {projects.map((project) => (
          <div key={project.id} className="project-card-mobile group">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-white/50 text-sm line-clamp-3 mb-6">{project.description}</p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-4 border border-[#97694d]/30 text-[#97694d] rounded-xl font-bold flex justify-center items-center gap-2"
                >
                  View Details <RiArrowRightLine />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🖼️ CASE STUDY MODAL (Premium Implementation) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setSelectedProject(null)} />

            <motion.div
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              className="relative w-full max-w-6xl bg-[#121212] rounded-[2rem] overflow-hidden border border-white/10 flex flex-col lg:flex-row h-full lg:h-[80vh] shadow-2xl"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-50 p-3 bg-black/50 rounded-full text-white hover:bg-white/10 transition-all text-2xl">
                <RiCloseLine />
              </button>

              <div className="lg:w-1/2 h-64 lg:h-full relative">
                <img src={selectedProject.image} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#121212] to-transparent hidden lg:block" />
              </div>

              <div className="lg:w-1/2 p-8 lg:p-16 overflow-y-auto custom-scrollbar">
                <span className="text-[#97694d] uppercase tracking-[0.3em] font-bold text-xs">{selectedProject.category}</span>
                <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-6">{selectedProject.title}</h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">{selectedProject.description}</p>

                <div className="mb-10">
                  <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Core Capabilities</h5>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.features.map(f => (
                      <span key={f} className="px-4 py-2 bg-white/5 rounded-lg border border-white/5 text-sm text-white/80">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  {selectedProject.link === "#" ? 
                    <a href='#' target="_blank" className="flex-1 py-5 bg-[#97694d] rounded-2xl flex justify-center items-center gap-3 font-bold hover:bg-[#a4795e] transition-all">
                     In Progress 
                    </a> : 
                    <a href={selectedProject.link} target="_blank" className="flex-1 py-5 bg-[#97694d] rounded-2xl flex justify-center items-center gap-3 font-bold hover:bg-[#a4795e] transition-all">
                      Visit Project <RiExternalLinkLine />
                    </a>}
                  <div className="flex gap-4 items-center justify-center text-3xl text-white/30">
                    {selectedProject.tech_stack}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}