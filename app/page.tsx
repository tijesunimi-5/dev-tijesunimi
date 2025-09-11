'use client'
import { FaJs, FaReact, FaPython, FaNode, FaGithubSquare, FaLinkedin, FaTwitter, FaInbox } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb, SiScikitlearn, SiTensorflow } from "react-icons/si";
import TabSection from "../components/TabSection";
import AboutSection from '../components/AboutSection'
import Link from "next/link";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useEffect} from 'react'
import ProjectSection from "@/components/ProjectSection";
import Skillset from "@/components/Skillset";
import ContactSection from "@/components/ContactSection";
import Projects from "@/components/Projects";

gsap.registerPlugin(ScrollTrigger)


export default function Home() {
  useEffect(() => {
    // Initial entrance animations
    gsap.fromTo(
      '.avatar',
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.content > *',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.2 }
    );

    gsap.fromTo(
      '.skills > div',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.5 }
    );

    gsap.fromTo(
      '.tech-stack > div',
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(1.7)', delay: 0.8 }
    );

    gsap.fromTo(
      '.lin',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out', delay: 1 }
    );

    gsap.fromTo(
      '.candle-img',
      { opacity: 0, rotation: 5 },
      { opacity: 1, rotation: 0, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 1.2 }
    );

    // Scroll-triggered fade effect for the entire hero section
    gsap.to('#hero', {
      opacity: 0,
      y: 50,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top', // Start fading when the top of the hero section hits the top of the viewport
        end: 'bottom top', // Fully faded when the bottom of the hero section hits the top of the viewport
        scrub: 1, // Smoothly animate with scroll
        toggleActions: 'play none none reverse', // Play on enter, reverse on scroll back
      },
    });

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-10 relative w-screen overflow-x-hidden">
      <TabSection />
      <div id="hero" className="hero-section h-[90vh] px-5 pt-28 md:px-10 md:h-[90vh] lg:flex lg:justify-between lg:items-center xl:px-32">
        <div className="col1">
          <div className="avatar rounded-full">
            <img src="/avatar1.png" alt="Idowu Tijesunimi avatar" />
          </div>

          <div className="content">
            <h1 className="text-4xl mt-5 font-bold">Idowu Tijesunimi</h1>
            <p className="pt-3 text-xl font-light md:w-[450px]">
              Hi, I'm Idowu Tijesunimi, a Fullstack Developer and a Machine Learning enthusiast based in Ibadan, Nigeria...
            </p>

            <div className="skills flex items-center mt-7 gap-3">
              <div className="bg-[#a4795e] py-1 px-3 rounded-2xl">Responsive Design</div>
              <div className="bg-[#a4795e] py-1 px-3 rounded-2xl">Interactive</div>
              <div className="bg-[#a4795e] py-1 px-3 rounded-2xl hidden md:block">UI Development</div>
              <div className="bg-[#a4795e] py-1 px-3 rounded-2xl hidden md:block">Accessibilty</div>
              <div className="bg-[#a4795e] py-1 px-2 rounded-2xl md:hidden">+8</div>
            </div>

            <div className="overflow-x-scroll md:overflow-x-hidden rounded-2xl scrollbar-hidden">
              <div className="tech-stack flex gap-3 items-center mt-5">
                <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
                  <FaJs />
                </div>
                <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
                  <BiLogoTypescript />
                </div>
                <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
                  <FaPython />
                </div>
                <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
                  <FaReact />
                </div>
                <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
                  <RiNextjsFill />
                </div>
                <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
                  <RiTailwindCssFill />
                </div>
                <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
                  <SiMongodb />
                </div>
                <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
                  <FaNode />
                </div>
                <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
                  <SiScikitlearn />
                </div>
                <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
                  <SiTensorflow />
                </div>
                <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
                  <FaGithubSquare />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative lg:mr-20">
          <div className="lin absolute top-[-120px] right-[80px] flex items-center">
            <img src="/Union.png" alt="bg for LinkedIn" className="w-[60px]" />
            <Link href="/">
              <img src="/linkedin.png" className="absolute text-2xl right-[18px] top-3" alt="LinkedIn" />
            </Link>
          </div>

          <img src="/Candle.png" alt="candle" className="candle-img" />

          <div className="lin absolute top-[-60px] right-[0px] flex justify-center items-center bg-[#a4795e] rounded-full z-20 w-[60px] h-[60px]">
            <Link href="/">
              <FaTwitter className="text-2xl text-white" />
            </Link>
          </div>

          <div className="lin absolute top-[-60px] left-[0px] flex justify-center items-center bg-[#a4795e] rounded-full z-20 w-[60px] h-[60px]">
            <Link href="/">
              <img src="/mail.png" className="w-[24px] text-white" alt="Email" />
            </Link>
          </div>
        </div>
      </div>

      <AboutSection />

      <ProjectSection />

      <Skillset />

      <ContactSection />

      <Projects />
    </section>
  );
}
