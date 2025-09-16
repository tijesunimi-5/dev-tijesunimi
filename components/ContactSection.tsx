'use client'
import Link from 'next/link';
import React, {useState, useEffect} from 'react'
import { FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'

interface Contact {
  id: number;
  headline: string;
  words: string;
}

const ContactSection = () => {
  const writeUp: Contact[] = [{
    id: 1,
    headline: "Let's build something amazing together!",
    words: "Are you looking for a skilled full-stack developer to bring  your project to life? Need a creative problem solver to tackle complex challenges? I'd love to collaborate and help you achieve your goals."
  },
  {
    id: 2,
    headline: "Need a tech expert to take your project to the next level?",
    words: "Whether it's building a new app, revamping an existing website, or solving a tricky development problem, I'm here to help. Let's chat about how I can contribute to your success."
  },
  {
    id: 3,
    headline: "Ready to turn your ideas into reality?",
    words: "As a seasoned full-stack developer, I'd love to help you build, launch, and grow your digital presence. Whether you're a startup, entrepreneur, or establieshed business, let's explore how we can work together to achieve your goals."
  },
  {
    id: 4,
    headline: "Got a project in mind? Let's make it happen",
    words: "With expertise in full-stack development, I'm passionate about delivering high-quality solutions that meet your needs. Whether you need a developer, collaborator, or tech advisor, I'm her to help."
  }]

  const [randomWriteUp, setRandomWriteUp] = useState<null | Contact>(null)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * writeUp.length)
    setRandomWriteUp(writeUp[randomIndex])
  }, [])

  return (
    <section className='mx-5 pt-5 my-10' id='contact'>
      <h1 className='text-3xl font-bold'>Contact Me</h1>

      <div className="flex lg:flex-row flex-col pt-4 lg:justify-between">
        <div>

          <h1 className='lg:text-3xl text-2xl font-bold text-[#FAA037]'>
            {randomWriteUp ? randomWriteUp.headline : writeUp[0].headline}
          </h1>
          <p className='lg:w-[650px] text-xl mt-5'>{randomWriteUp ? randomWriteUp.words : writeUp[0].words}</p>
        </div>

        <div className='w-full bg-[#a4795e] mt-5 rounded flex items-center justify-center gap-10 py-5 px-5 shadow lg:w-[600px] lg:mr-10 lg:gap-16'>
          <Link href={'https://www.linkedin.com/in/idowu-tijesunimi-189492294'} className='bg-[#97694d] rounded w-[40px] h-[40px] flex items-center justify-center text-2xl lg:text-5xl lg:w-[80px] lg:h-[80px]'>
            <FaLinkedin />
          </Link>

          <Link href={"https://wa.me/+2347018268171?text=I'm%20interested%20in%20your%20service"} className='bg-[#97694d] rounded w-[40px] h-[40px] flex items-center justify-center text-2xl lg:text-5xl lg:w-[80px] lg:h-[80px]'>
            <FaWhatsapp />
          </Link>

          <Link href={'mailto:tijesunimiidowu16@gmail.com'} className='bg-[#97694d] rounded w-[40px] h-[40px] flex items-center justify-center text-2xl lg:text-5xl lg:w-[80px] lg:h-[80px]'>
            <MdEmail />
          </Link>
          
          <Link href={'https://x.com/codelight001'} className='bg-[#97694d] rounded w-[40px] h-[40px] flex items-center justify-center text-2xl lg:text-5xl lg:w-[80px] lg:h-[80px]'>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
