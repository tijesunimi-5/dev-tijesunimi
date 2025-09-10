'use client'
import React, { useState, useEffect, useRef } from 'react'
import type { ReactElement } from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaJs, FaNodeJs, FaPython } from 'react-icons/fa'
import { RiCloseLine, RiNextjsLine, RiTailwindCssLine, RiArrowRightLine } from 'react-icons/ri'
import { SiHuggingface, SiMongodb, SiScikitlearn, SiTypescript } from 'react-icons/si'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

// Define the Project type
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

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({})
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1024); // mobile + tablet
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 🚀 Scroll Animations with GSAP
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 20%',
            scrub: true, // 🔥 ties animation to scroll
          },
        }
      )
    })
  }, [])


  const projects: Project[] = [
    {
      id: 1,
      title: '90+ Online Based Test (OBT)',
      headline: 'Empowering Academic Excellence',
      description:
        '90+ OBT is an innovative exam preparation platform designed to help university aspirants and jambites achieve top scores. Collaborating with high-achieving UI students who scored 90+ in their exam, I built a dynamic web application that streamlines registration, grants secure access to mock exams, and delivers a seamless, timed OBT experience. Using Next.js and Node.js, I crafted an intuitive interface with real-time feedback and robust backend logic to manage user authentication and question delivery. This project reflects my passion for creating impactful educational tools that blend sleek design with reliable functionality.',
      tech_stack: [
        <RiNextjsLine key="next" />,
        <RiTailwindCssLine key="tailwind" />,
        <SiTypescript key="ts" />,
        <SiMongodb key="mongo" />,
        <FaNodeJs key="node" />,
      ],
      features: ['User registration', 'Admin-controlled access', 'Timed exams', 'Responsive UI', 'Embedded Calculator'],
      image: '/UI_demo.png',
      category: 'website',
      link: 'https://90-tutorials.vercel.app',
    },
    {
      id: 2,
      title: 'MedTech',
      headline: 'AI-Powered Healthcare Innovation',
      description:
        'MedTech is a cutting-edge platform leveraging AI to revolutionize healthcare accessibility. I designed and built a web application that delivers predictive health insights, starting with mental health and diabetes detection models, using Python, Scikit-learn, and FastAPI. The responsive frontend, crafted with Next.js, Tailwind CSS, ensures an intuitive user experience, while the backend powers real-time predictions and health data management. MedTech aims to empower users with early risk detection and personalized care.',
      tech_stack: [
        <FaPython key="python" />,
        <SiScikitlearn key="sklearn" />,
        <RiNextjsLine key="next" />,
        <RiTailwindCssLine key="tailwind" />,
        <SiTypescript key="ts" />,
      ],
      features: ['AI-driven health predictions', 'User-friendly interface'],
      image: '/medtech.png',
      category: 'smart website',
      link: 'https://med-techai.vercel.app',
    },
    {
      id: 3,
      title: "Reader's assistant",
      headline: 'Empowering Confident Reading',
      description:
        "Reader's Assistant is an innovative AI-powered platform designed to transform the reading experience for students. I built this tool to make reading accessible, comfortable and engaging, using text-to-speech, optical character recognition to convert both pdf and text image into plain text, also embedded a pretrained question and answer model to allow user paste texts and ask questions based on it.",
      tech_stack: [
        <FaJs key="js" />,
        <SiHuggingface key="huggingface" />,
        <RiNextjsLine key="next" />,
        <RiTailwindCssLine key="tailwind" />,
      ],
      features: ['Voice-driven Feedback', 'Responsive Design'],
      image: '/readerass.png',
      category: 'smart website',
      link: 'https://reader-s-assistant-ai.vercel.app'
    },
    {
      id: 4,
      title: 'E-Mart',
      headline: 'AI-Enhanced E-Commerce',
      description:
        'eMart is a smart e-commerce platform I built to push the boundaries of modern web development and AI-driven user engagement. I integrated scikit-learn based machine learning models to provide personalized product recommendations.',
      tech_stack: [
        <FaJs key="js" />,
        <RiNextjsLine key="next" />,
        <RiTailwindCssLine key="tailwind" />,
        <SiScikitlearn key="sklearn" />,
        <FaPython key="python" />,
      ],
      features: ['ML-driven product suggestions'],
      image: '/emart.png',
      category: 'smart website',
      link: 'https://e-mart-rho.vercel.app',
    },
    {
      id: 5,
      title: 'Text Snap',
      headline: 'Creative Text-Image Web Tool',
      description:
        'Text snap is a lightweight, browser-based tool that empowers users to create stunning text-over-image designs without downloading any software. It leverages Quill.js for a rich text editor with sleek formatting options, allowing users to craft and style text effortlessly.',
      tech_stack: [
        <RiNextjsLine key="next" />,
        <FaJs key="js" />,
        <RiTailwindCssLine key="tailwind" />,
      ],
      features: ['Rich text editor', 'Dynamic backgrounds', 'Text-image blending', 'Responsive UI'],
      image: '/textsnap.png',
      category: 'website',
      link: 'https://text-snap-neon.vercel.app',
    },
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  const toggleDescription = (id: number) => {
    setExpandedProjects((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // Auto slide every 3s
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % filteredProjects?.length),
      7000
    );
    return () => resetTimeout();
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };
  // Handle swipe gestures
  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrent((prev) => (prev + 1) % filteredProjects?.length);
    } else {
      setCurrent((prev) => (prev - 1 + filteredProjects?.length) % filteredProjects?.length);
    }
  };

  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        },
      )
    })
  }, [filteredProjects])

  return (
    <section id="projects" className="mt-10 px-5 pb-20">
      <div>
        <h1 className="text-[#FAA037] text-3xl">Projects</h1>
        <div className="tab flex gap-5 mt-4 flex-wrap">
          <button
            onClick={() => setActiveCategory('all')}
            className={`py-1 px-3 rounded-2xl ${activeCategory === 'all' ? 'bg-[#FAA037] text-white' : 'bg-[#a4795e] text-[#ffffff]'
              }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory('website')}
            className={`py-1 px-3 rounded-2xl ${activeCategory === 'website' ? 'bg-[#FAA037] text-white' : 'bg-[#a4795e] text-[#ffffff]'
              }`}
          >
            Website
          </button>
          <button
            onClick={() => setActiveCategory('smart website')}
            className={`py-1 px-3 rounded-2xl ${activeCategory === 'smart website' ? 'bg-[#FAA037] text-white' : 'bg-[#a4795e] text-[#ffffff]'
              }`}
          >
            Smart Website
          </button>
        </div>
        {isMobile && (
          <p className="mt-4 text-sm text-white italic">
            Tap on a project image to see more details
          </p>
        )}


        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-[#a4795e] rounded-lg group cursor-pointer"
            >
              <div className="overflow-hidden rounded-tl-lg rounded-tr-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="mt-4 text-2xl font-semibold px-4">{project.title}</h3>
              <button
                onClick={() => setSelectedProject(project)}
                className="mt-2 px-4 text-[#FAA037] text-xl flex items-center gap-1 hover:gap-2 transition-all"
              >
                Know More
              </button>

              <div className="px-4 py-4 flex flex-wrap">
                {
                  project.features.map((feature, idx) => (
                    <span key={idx} className="inline-block bg-[#97694D] text-[#ffffff] text-sm px-2 py-1 m-1 rounded-full">
                      {feature}
                    </span>
                  ))
                }
              </div>
            </div>
          ))}
        </div>

        {/* Popup / Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)} // ✅ click outside closes
            >
              <motion.div
                className="bg-white rounded-2xl max-w-3xl w-full p-6 relative shadow-xl overflow-y-auto max-h-[90vh]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()} // 🚫 prevent closing when clicking inside modal
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500"
                >
                  <RiCloseLine />
                </button>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl"
                />

                <h2 className="text-2xl font-bold mt-4 text-[#FAA037]">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-700">{selectedProject.headline}</p>

                {/* Tech Stack */}
                <div className="flex gap-2 text-2xl mt-3 text-[#FDE137]">
                  {selectedProject.tech_stack.map((icon, idx) => (
                    <span key={idx}>{icon}</span>
                  ))}
                </div>

                {/* Features */}
                <ul className="mt-4 list-disc list-inside text-gray-800">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                {/* Description */}
                <p className="mt-4 text-gray-600">{selectedProject.description}</p>

                {/* Link */}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 bg-[#FAA037] text-white py-2 px-4 rounded text-center hover:bg-[#e08f2e]"
                >
                  Visit Site
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectSection


/*
 <div className="results mt-8 overflow-x-scroll rounded-xl scrollbar-hidden">
          <div className="flex gap-10 w-[1800px]">
            {filteredProjects.map((project) => (
              <Link href={project.link} key={project.id}>
                <motion.div className="img relative"
                  animate={{ x: `-${current * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  drag={isMobile ? "x" : false} // Only allow swipe on mobile/ipad
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => {
                    if (info.offset.x < -50) handleSwipe("left");
                    if (info.offset.x > 50) handleSwipe("right");
                  }}>
                  <img src={project.image} alt={project.title} className='w-[320px] h-[220px]' />
                  <div className="overlay top-0 left-0 w-full h-full"></div>
                  <div className='absolute top-0 text-white px-2'>
                  <h3 className='text-xl font-bold pt-3'>{project.title}</h3> 
<div className="bottom-0 flex gap-3 text-white px-3 py-1 rounded-2xl">
  {project.tech_stack.map((icon, idx) => (
    <span key={idx} className='text-2xl mr-2'>{icon}</span>
  ))}
</div>
                  </div >
                </motion.div >
              </Link >
              
            ))}

          </div >
  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
    {filteredProjects.map((_, i) => (
      <div
        key={i}
        onClick={() => setCurrent(i)}
        className={`w-3 h-3 rounded-full cursor-pointer ${current === i ? "bg-blue-600" : "bg-gray-300"
          }`}
      />
    ))}
  </div>
        </div >

---------------------------------------------------

{filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-[#a4795e] rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-[#FDE137]">{project.title}</h2>
                <p className="text-xl text-[#ffffff]">{project.headline}</p>
                <div className="flex gap-2 mt-2 text-2xl text-[#FDE137]">
                  {project.tech_stack.map((icon, idx) => (
                    <span key={idx}>{icon}</span>
                  ))}
                </div>
                <ul className="mt-2 list-disc list-inside text-xl">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button
                  onClick={() => toggleDescription(project.id)}
                  className="mt-4 text-xl text-[#FAA037] hover:underline"
                >
                  {expandedProjects[project.id] ? 'Hide Description' : 'Read Description'}
                </button>
                {expandedProjects[project.id] && (
                  <p className="mt-2 text-gray-700 text-sm">{project.description}</p>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 bg-[#FAA037] text-white py-2 px-4 rounded hover:bg-[#e08f2e] text-center"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))} */