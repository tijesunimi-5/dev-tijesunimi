'use client'
import React, { useState, useEffect } from 'react'

interface Display {
  id: number;
  title: string;
  text: string;
}

const contentData: Display[] = [
  {
    id: 1,
    title: "About Me",
    text: "I’m a passionate coder and innovator, blending Fullstack development with Machine Learning to build websites and AI solutions that stand out. Based in Ibadan, Nigeria, I’m driven by creativity, collaboration, and the thrill of solving complex problems. When I’m not coding, you’ll find me exploring new tech or dreaming up the next big idea. \n I’m all about creating solutions that spark joy and work flawlessly. I love teaming up, pushing boundaries, and proving that no problem is too big to crack!"
  },
  {
    id: 2,
    title: "Education",
    text: "Currently pursuing a Bachelor of Technology in Computer Science at Ladoke Akintola University, Ogbomosho, Oyo, Nigeria (4th year). My studies fuel my love for coding, algorithms, and cutting-edge tech, preparing me to tackle real-world challenges with a solid foundation."
  },
  {
    id: 3,
    title: 'Tech Stack',
    text: "I wield a versatile toolkit to craft seamless web experiences and intelligent systems: HTML, CSS, JavaScript, React, Next.js, GSAP for animations, MongoDB for databases, and Python for Machine Learning. My focus? Building responsive, user-friendly, and high-performance solutions."
  },
  {
    id: 4,
    title: "Experience",
    text: "Since diving into coding in 2022, I’ve been building dynamic websites and ML projects that push boundaries. From responsive e-commerce platforms to AI-driven prototypes, I’ve honed my skills through hands-on projects, freelance work, and a relentless drive to learn and improve."
  }
]

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<number>(1)
  
  const activeContent = contentData.find((item) => item.id === activeTab) || contentData[0]

  return (
    <div id='about' className='mt-20 px-5 pb-10'>
      <h1 className="text-[#FAA037] text-4xl font-bold">Get to know me</h1>
      <p className='mt-3'>
        Hey there! I'm a Fullstack developer and Machine Learning enthusiast who thrives on crafting websites that are as adaptive as they are eye-catching. With a knack for stunning visuals and a passion for solving tough challenges, I turn ideas into seamless, user-loving experiences.
      </p>

      <div className="hash mt-3 grid grid-cols-2 gap-3">
        <div className="bg-[#a4795e] text-[#FDE137] py-1 px-3 rounded-2xl">
          #StunningVisuals
        </div>
        <div className="bg-[#a4795e] text-[#FDE137] py-1 px-3 rounded-2xl">
          #CodeWizard
        </div>
        <div className="bg-[#a4795e] text-[#FDE137] py-1 px-3 rounded-2xl">
          #ProblemCrusher
        </div>
      </div>

      <div>
        <div className="about-card mt-10 overflow-x-scroll w-[320px]">
          <div className="tabs flex justify-between items-center w-[400px]">
            <div onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? "bg-[#FAA037] text-[#ffffff]" : "bg-[#a4795e] text-[#FAA037]"}  py-1 px-3 rounded-xl`}>
              Info
            </div>

            <div onClick={() => setActiveTab(2)} className={`${activeTab === 2 ? "bg-[#FAA037] text-[#ffffff]" : "bg-[#a4795e] text-[#FAA037]"}  py-1 px-3 rounded-xl`}>
              Education
            </div>

            <div onClick={() => setActiveTab(3)} className={`${activeTab === 3 ? "bg-[#FAA037] text-[#ffffff]" : "bg-[#a4795e] text-[#FAA037]"}  py-1 px-3 rounded-xl`}>
              Tech Stack
            </div>

            <div onClick={() => setActiveTab(4)} className={`${activeTab === 4 ? "bg-[#FAA037] text-[#ffffff]" : "bg-[#a4795e] text-[#FAA037]"}  py-1 px-3 rounded-xl`}>
              Experience
            </div>
          </div>
        </div>
        <div className="display-card">
          {
            activeContent && (
              <div className="mt-4 bg-[#A4795E] px-2 py-5 rounded">
                <h1 className="text-3xl text-[#FAA037] font-bold">{activeContent.title}</h1>
                <p className='mt-4'>{activeContent.text}</p>
              </div>
            )
          }
        </div>
      </div>

      
    </div>
  )
}

export default AboutSection