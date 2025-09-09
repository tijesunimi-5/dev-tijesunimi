// 'use client'
// import React from 'react'
// import { DiJavascript } from 'react-icons/di'
// import { FaJs, FaNodeJs, FaPython } from 'react-icons/fa'
// import { RiNextjsLine, RiTailwindCssLine } from 'react-icons/ri'
// import { SiHuggingface, SiMongodb, SiScikitlearn, SiTypescript } from 'react-icons/si'

// const ProjectSection = () => {
//   const projects = [
//     {
//       id: 1,
//       title: '90+ Online Based Test (OBT)',
//       headline: 'Empowering Academic Excellence',
//       description: '90+ OBT is an innovative exam preparation platform designed to help university aspirants and jambites achieve top scores. Collaborating with high-achieving UI studnets who scored 90+ in their exam, I built a dynamic web application that streamlines registration, grants secure access to mock exams, and delivers a seamless, timed OBT experience. Using Next.js and Node.js, I crafted an intuitive interface with real-time feedback and robust backend logic to manage user authentication and question delivery. This project reflects my passion for creating impactful educational tools that blend sleek design with reliable fuctionality.',
//       tech_stack: [<RiNextjsLine />, <RiTailwindCssLine />, <SiTypescript />, <SiMongodb />, <FaNodeJs />],
//       features: ['User registration', 'Admin-controlled access', 'Timed exams', 'Responsive UI', 'Embedded Calculator'],
//       image: '/UI_demo.png',
//       category: 'website'
//     },
//     {
//       id: 2,
//       title: 'MedTech',
//       headline: "AI-Powered Healthcare Innovation",
//       description: "MedTech is a cutting-edge platform leveraging AI to revolutionize healthcare accessibilty. I designed and built a web application that delivers predictive health insights, starting with mental health and diabetes detection models, using Python, Scikit-learn, and FastAPI. The responsive frontend, crafted with Next.js, Tailwind CSS, ensures an intuitive user experience, while the backend powers real-time predictions and health data management. MedTech aims to empower users with early risk detection and personalized care.",
//       tech_stack: [<FaPython />, <SiScikitlearn />, <RiNextjsLine />, <RiTailwindCssLine />, <SiTypescript />],
//       features: ['AI-driven health predictions', 'User-friendly interface'],
//       image: '/medtech.png',
//       category: 'smart website'
//     },
//     {
//       id: 3,
//       title: "Reader's assistant",
//       headline: "Empowering Confident Reading",
//       description: "Reader's Assistant is an innovative AI-powered platform designed to transform the reading experience for students. I built this tool to make reading accessible, comfortable and engaging, using text-to-speech, optical character recognition to convert both pdf and text image into plain text, also embedded a pretrain question and answer model to allow user paste texts and ask questions based on it.",
//       tech_stack: [<FaJs />, <SiHuggingface />, <RiNextjsLine />, <RiTailwindCssLine />],
//       features: ['Voice-driven Feedback', 'Responsive Design'],
//       image: '/readerass.png',
//       category: 'smart website'
//     },
//     {
//       id: 4,
//       title: "E-Mart",
//       headline: "AI-Enhanced E-Commerce",
//       description: "eMart is a smart e-commerce platform I built to push the boundaries of modern web development and AI-driven user engagement. I integrated scikit-learn based machine learning models to provide personalized product recommendations",
//       tech_stack: [<FaJs />, <RiNextjsLine />, <RiTailwindCssLine />, <SiScikitlearn />, <FaPython />],
//       features: ['ML-driven product suggestions'],
//       image: '/emart.png',
//       category: "smart website"
//     },
//     {
//       id: 5,
//       title: "Text Snap",
//       headline: "Creative Text-Image Web Tool",
//       description: "Text snap is a lightweight, browser-based tool that empower users to create stunning text-over-image designs without downloading any software. It leverages Quill.js for a rich text editor with sleek formatting options. allowing users to craft and style text effortlessly.",
//       tech_stack: [<RiNextjsLine />, <FaJs />, <RiTailwindCssLine />],
//       features: ['Rich text editor', 'Dynamic backgrounds', 'text-image blending, Responsive UI'],
//       image: "/textsnap.png",
//       category: 'website'
//     }
//   ]

//   return (
//     <section id='projects' className='mt-10 px-5 pb-20'>
//       <div>
//         <h1 className='text-[#FAA037] text-3xl'>Projects</h1>
//         <div className="tab flex gap-5 mt-4">
//           <div className="bg-[#a4795e] text-[#ffffff] py-1 px-3 rounded-2xl">Website</div>
//           <div className="bg-[#a4795e] text-[#ffffff] py-1 px-3 rounded-2xl">Smart Website</div>
//         </div>

//         <div className="results mt-8">
//           {projects.map((project) => (
//             <div key={project.id}>
//               {project.title}
//               <img src={project.image} alt={project.title} />
//               <ul className="flex gap-2">
//                 {project.tech_stack.map((icon, idx) => (
//                   <li key={idx}>{icon}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ProjectSection
'use client'
import React, { useState, useEffect } from 'react'
import type { ReactElement } from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaJs, FaNodeJs, FaPython } from 'react-icons/fa'
import { RiNextjsLine, RiTailwindCssLine } from 'react-icons/ri'
import { SiHuggingface, SiMongodb, SiScikitlearn, SiTypescript } from 'react-icons/si'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

        <div className="results mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection