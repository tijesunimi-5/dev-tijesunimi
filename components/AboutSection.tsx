'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Display {
  id: number;
  title: string;
  text: string;
}

const contentData: Display[] = [
  {
    id: 1,
    title: 'About Me',
    text: "I’m a passionate coder and innovator, blending Fullstack development with Machine Learning to build websites and AI solutions that stand out. Based in Ibadan, Nigeria, I’m driven by creativity, collaboration, and the thrill of solving complex problems. When I’m not coding, you’ll find me exploring new tech or dreaming up the next big idea. \n I’m all about creating solutions that spark joy and work flawlessly. I love teaming up, pushing boundaries, and proving that no problem is too big to crack!",
  },
  {
    id: 2,
    title: 'Education',
    text: 'Currently pursuing a Bachelor of Technology in Computer Science at Ladoke Akintola University, Ogbomosho, Oyo, Nigeria (4th year). My studies fuel my love for coding, algorithms, and cutting-edge tech, preparing me to tackle real-world challenges with a solid foundation.',
  },
  {
    id: 3,
    title: 'Tech Stack',
    text: 'I wield a versatile toolkit to craft seamless web experiences and intelligent systems: HTML, CSS, JavaScript, React, Next.js, GSAP for animations, MongoDB for databases, and Python for Machine Learning. My focus? Building responsive, user-friendly, and high-performance solutions.',
  },
  {
    id: 4,
    title: 'Experience',
    text: 'Since diving into coding in 2022, I’ve been building dynamic websites and ML projects that push boundaries. From responsive e-commerce platforms to AI-driven prototypes, I’ve honed my skills through hands-on projects, freelance work, and a relentless drive to learn and improve.',
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const activeContent = contentData.find((item) => item.id === activeTab) || contentData[0];

  // Refs to target elements for GSAP animations
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const col1Ref = useRef<HTMLDivElement | null>(null);
  const tabDisplayRef = useRef<HTMLDivElement | null>(null);
  const displayCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animation timeline for sliding effects on scroll in and out
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
    });

    // Slide in col1 children (title, paragraph, hashtags)
    if (col1Ref.current) {
      tl.fromTo(
        col1Ref.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, ease: 'power3.out' }
      );
    }

    // Slide in tabDisplay (tabs)
    tl.fromTo(
      tabDisplayRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, ease: 'power3.out' },
      '-=0.8'
    );

    // Section-level slide-out when scrolling away
    gsap.fromTo(
      '#about',
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -50, // Slide up when leaving
        ease: 'power2.in',
        scrollTrigger: {
          trigger: '#about',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // Fade in animation for the content card when activeTab changes (independent of scroll)
    gsap.fromTo(
      displayCardRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [activeTab]);

  return (
    <section ref={sectionRef} id="about" className="section h-screen px-5 pb-10 md:px-10 lg:flex lg:justify-between lg:items-start">
      <div ref={col1Ref} className="col1">
        <h1 className="text-[#FAA037] text-4xl font-bold">Get to know me</h1>
        <p className="mt-3 md:text-xl lg:w-[400px] xl:w-[700px]">
          Hey there! I'm a Fullstack developer and Machine Learning enthusiast who thrives on crafting websites that are as adaptive as they are eye-catching. With a knack for stunning visuals and a passion for solving tough challenges, I turn ideas into seamless, user-loving experiences.
        </p>

        <div className="hash mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 w-[480px]">
          <div className="bg-[#a4795e] text-[#FDE137] py-1 px-3 rounded-2xl">#StunningVisuals</div>
          <div className="bg-[#a4795e] text-[#FDE137] py-1 px-3 rounded-2xl">#CodeWizard</div>
          <div className="bg-[#a4795e] text-[#FDE137] py-1 px-3 rounded-2xl">#ProblemCrusher</div>
        </div>
      </div>

      <div ref={tabDisplayRef}>
        <div className="about-card mt-10 overflow-x-scroll w-[320px] md:w-[500px] md:overflow-x-hidden lg:w-[400px] lg:mt-0 xl:w-[600px]">
          <div className="tabs flex justify-between items-center w-[400px] md:w-full">
            <div
              onClick={() => setActiveTab(1)}
              className={`${activeTab === 1 ? 'bg-[#FAA037] text-[#ffffff]' : 'bg-[#a4795e] text-[#FAA037]'} py-1 px-3 rounded-xl cursor-pointer`}
            >
              Info
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className={`${activeTab === 2 ? 'bg-[#FAA037] text-[#ffffff]' : 'bg-[#a4795e] text-[#FAA037]'} py-1 px-3 rounded-xl cursor-pointer`}
            >
              Education
            </div>
            <div
              onClick={() => setActiveTab(3)}
              className={`${activeTab === 3 ? 'bg-[#FAA037] text-[#ffffff]' : 'bg-[#a4795e] text-[#FAA037]'} py-1 px-3 rounded-xl cursor-pointer`}
            >
              Tech Stack
            </div>
            <div
              onClick={() => setActiveTab(4)}
              className={`${activeTab === 4 ? 'bg-[#FAA037] text-[#ffffff]' : 'bg-[#a4795e] text-[#FAA037]'} py-1 px-3 rounded-xl cursor-pointer`}
            >
              Experience
            </div>
          </div>
        </div>
        <div ref={displayCardRef} className="display-card mt-8">
          {activeContent && (
            <div className="mt-4 bg-[#A4795e] px-5 py-5 rounded-xl md:w-[600px] lg:w-[400px] xl:w-[600px]">
              <h1 className="text-3xl text-[#FAA037] font-bold">{activeContent.title}</h1>
              <p className="mt-4 md:text-xl">{activeContent.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;