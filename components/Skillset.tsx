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
      level: 'Advanced',
      description: 'Skilled in writing clean and efficient JavaScript code.',
      rating: 70,
      icon: <DiJavascript className='inline' />
    },
    {
      name: 'React',
      level: 'Intermediate',
      description: 'Experienced in building dynamic user interfaces with React.',
      rating: 65,
      icon: <RiReactjsLine className='inline' />
    },
    {
      name: 'TypeScript',
      level: 'Intermediate',
      description: 'Proficient in using TypeScript for type-safe JavaScript development.',
      rating: 62,
      icon: <SiTypescript className='inline' />
    },
    {
      name: 'Next.js',
      level: 'Intermediate',
      description: 'Experienced in building server-rendered applications with Next.js.',
      rating: 67,
      icon: <RiNextjsLine className='inline' />
    },
    {
      name: 'Tailwind CSS',
      level: 'Advanced',
      description: 'Skilled in using Tailwind CSS for utility-first styling.',
      rating: 69,
      icon: <RiTailwindCssLine className='inline' />
    },
    {
      name: 'Node.js',
      level: 'Beginner',
      description: 'Familiar with building server-side applications using Node.js.',
      rating: 40,
      icon: <FaNodeJs className='inline' />
    },
    {
      name: "Express.js",
      level: 'Beginner',
      description: 'Basic understanding of building web applications with Express.js.',
      rating: 40,
      icon: null
    },
    {
      name: 'MongoDB',
      level: 'Intermediate',
      description: 'Familiar with NoSQL databases and basic CRUD operations in MongoDB.',
      icon: <DiMongodb className='inline' />,
      rating: 61,
    },
    {
      name: 'Python',
      level: 'Beginner',
      description: 'Basic knowledge of Python programming and scripting.',
      rating: 40,
      icon: <FaPython className='inline' />
    },
    {
      name: 'scikit-learn',
      level: 'Beginner',
      description: 'Familiar with machine learning concepts and basic usage of scikit-learn library.',
      rating: 40,
      icon: <SiScikitlearn className='inline' />
    },
  ]
  return (
    <section className='skillset px-5'>
      <div>
        <h1 className='text-2xl font-bold tracking-wide'>Skill Sets</h1>

        <div className=" overflow-x-scroll gap-5 py-5 scrollbar-hidden">
          <div className="w-[3900px] flex gap-5">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card bg-[#a4795e] px-5 rounded-2xl flex flex-col gap-3 w-[300px] lg:w-[350px] pb-2">
                <h1 className="skill-icon text-2xl font-bold text-[#ffffff] inline pt-2">
                  {skill.icon} - {skill.name}
                </h1>
                <p className='mt-[-13px]'>{skill.level}</p>
                <hr className='border border-[#FAA037] mt-[-7px]' />
                <p className='text-lg'><b className='text-[#FDE137]'>
                  Experience:</b> {skill.description}
                </p>
                <div className="rating rounded-2xl h-2 w-full bg-[#FAA037] relative overflow-hidden">
                  <div style={{ width: `${skill.rating}%` }} className={`absolute left-0  bg-white rounded-2xl top-0 bottom-0`}></div>
                </div>
                {skill.rating}%
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skillset
