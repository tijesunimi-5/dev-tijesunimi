'use client'
import React, {useState, useEffect, useRef} from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaJs, FaNodeJs, FaPython } from 'react-icons/fa'
import { RiCloseLine, RiNextjsLine, RiTailwindCssLine, RiArrowRightLine } from 'react-icons/ri'
import { SiHuggingface, SiMongodb, SiScikitlearn, SiTypescript } from 'react-icons/si'
import type { ReactElement } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


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

const Projects = () => {
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

  // 🔑 Repeat projects for infinite effect
  const infiniteProjects = [...projects, ...projects, ...projects]
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(projects.length) // start in the middle copy

  // scroll tracking
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const { scrollLeft, clientWidth, scrollWidth } = container
      const newIndex = Math.round(scrollLeft / clientWidth)
      setActiveIndex(newIndex % projects.length)

      const maxScroll = scrollWidth - clientWidth

      // 🔁 Loop effect
      if (scrollLeft <= 0) {
        container.scrollLeft = projects.length * clientWidth
      } else if (scrollLeft >= maxScroll) {
        container.scrollLeft = projects.length * clientWidth - clientWidth
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })

    // jump to the middle on mount
    requestAnimationFrame(() => {
      container.scrollLeft = projects.length * container.clientWidth
    })

    return () => container.removeEventListener('scroll', handleScroll)
  }, [projects.length])

  return (
    <section className="h-screen w-full sticky top-0 lg:flex items-center justify-center hidden flex-col mt-20">
      <h1 className="text-[#FAA037] text-3xl font-bold">Projects</h1>
      <div
        ref={containerRef}
        className="flex overflow-x-scroll scrollbar-hidden snap-x snap-mandatory scroll-smooth h-full w-full rounded-2xl"
      >
        {/* {infiniteProjects.map((project, idx) => {
          const isActive = idx % projects.length === activeIndex
          return (
            <motion.div
              key={idx}
              className="relative flex-shrink-0 w-[80%] h-[80vh] snap-center flex items-center justify-center rounded-2xl"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              animate={{
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.5,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-black/60" />
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="relative z-10 max-w-3xl px-6 text-white"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-4xl font-bold">{project.title}</h2>
                    <p className="text-xl mt-2 text-indigo-300">
                      {project.headline}
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-3 mt-4 text-2xl">
                      {project.tech_stack.map((icon, i) => (
                        <span key={i}>{icon}</span>
                      ))}
                    </div>
                    <ul className="mt-4 space-y-1 text-sm text-gray-200">
                      {project.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-xl transition"
                    >
                      Visit Project
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })} */}
        {infiniteProjects.map((project, idx) => {
          const isActive = idx % projects.length === activeIndex
          return (
            <div
              key={idx}
              className="flex-shrink-0 w-full snap-center flex items-center justify-center"
            >
              <motion.div
                className="relative w-[80%] h-[80vh] flex items-center justify-center rounded-2xl"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                animate={{
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-black/60" />
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="relative z-10 max-w-3xl px-6 text-white"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 50, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-4xl font-bold">{project.title}</h2>
                      <p className="text-xl mt-2 text-indigo-300">{project.headline}</p>
                      <p className="mt-4 text-lg leading-relaxed">{project.description}</p>
                      <div className="flex gap-3 mt-4 text-2xl">
                        {project.tech_stack.map((icon, i) => (
                          <span key={i}>{icon}</span>
                        ))}
                      </div>
                      <ul className="mt-4 space-y-1 text-sm text-gray-200">
                        {project.features.map((feature, i) => (
                          <li key={i}>• {feature}</li>
                        ))}
                      </ul>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-xl transition"
                      >
                        Visit Project
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Projects