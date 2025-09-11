'use client'
import React from 'react'
import { DiJavascript, DiMongodb } from 'react-icons/di'
import { FaCss3, FaHtml5, FaNodeJs, FaPython } from 'react-icons/fa'
import { RiNextjsLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri'
import { SiScikitlearn, SiTypescript } from 'react-icons/si'

const Skillset = () => {
  const skills = [
    {
      name: 'HTML',
      level: 'Advanced',
      description: 'Proficient in creating semantic and accessible HTML structures.',
      rating: 90,
      icon: <FaHtml5 className='inline' />
    }, 
    {
      name: 'CSS',
      level: 'Advanced',
      description: 'Experienced in responsive design and visually appealing interface.',
      rating: 80,
      icon: <FaCss3 className='inline' />
    }, 
    {
      name: 'JavaScript',
      level: 'Intermediate',
      description: 'Skilled in writing clean and efficient JavaScript code.',
      rating: 78,
      icon: <DiJavascript className='inline' />
    },
    {
      name: 'React',
      level: 'Intermediate',
      description: 'Experienced in building dynamic user interfaces with React.',
      rating: 75,
      icon: <RiReactjsLine className='inline' />
    },
    {
      name: 'TypeScript',
      level: 'Intermediate',
      description: 'Proficient in using TypeScript for type-safe JavaScript development.',
      rating: 70,
      icon: <SiTypescript className='inline' />
    },
    {
      name: 'Next.js',
      level: 'Intermediate',
      description: 'Experienced in building server-rendered applications with Next.js.',
      rating: 82,
      icon: <RiNextjsLine className='inline' />
    },
    {
      name: 'Tailwind CSS',
      level: 'Intermediate',
      description: 'Skilled in using Tailwind CSS for utility-first styling.',
      rating: 85,
      icon: <RiTailwindCssLine className='inline' />
    },
    {
      name: 'Node.js',
      level: 'beginner',
      description: 'Familiar with building server-side applications using Node.js.',
      rating: 50,
      icon: <FaNodeJs className='inline' />
    },
    {
      name: "Express.js",
      level: 'beginner',
      description: 'Basic understanding of building web applications with Express.js.',
      rating: 50,
      icon: null
    },
    {
      name: 'MongoDB',
      level: 'intermediate',
      description: 'Familiar with NoSQL databases and basic CRUD operations in MongoDB.',
      icon: <DiMongodb className='inline' />
    },
    {
      name: 'Python',
      level: 'beginner',
      description: 'Basic knowledge of Python programming and scripting.',
      rating: 50,
      icon: <FaPython className='inline' />
    },
    {
      name: 'scikit-learn',
      level: 'beginner',
      description: 'Familiar with machine learning concepts and basic usage of scikit-learn library.',
      rating: 50,
      icon: <SiScikitlearn className='inline' />
    },
  ]
  return (
    <section className='skillset px-5'>
      <div>
        <h1 className='text-2xl font-bold tracking-wide'>Skill Sets</h1>

        <div className=" overflow-x-scroll gap-5 py-5 scrollbar-hidden">
          <div className="w-[3500px] flex gap-5">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card bg-[#a4795e] px-5 rounded-2xl flex flex-col gap-3 w-[300px]">
                <h1 className="skill-icon text-2xl font-bold text-[#ffffff] inline pt-2">
                  {skill.icon} - {skill.name}
                </h1>
                <hr className='border border-[#FAA037]' />
                <p className='text-lg'><b className='text-[#FDE137]'>Experience:</b> {skill.description}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Skillset
