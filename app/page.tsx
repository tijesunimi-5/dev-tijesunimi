'use client'
import { FaJs, FaReact, FaPython, FaNode, FaGithubSquare } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb, SiScikitlearn, SiTensorflow } from "react-icons/si";
import TabSection from "../components/TabSection";
import AboutSection from '../components/AboutSection'

export default function Home() {
  return (
    <section className="py-10 relative w-screen overflow-x-hidden">
      <TabSection />
      <div id="hero" className="hero-section px-6 pt-28">
        <div className="avatar rounded-full">
          <img src="/avatar1.png" alt="" />
        </div>

        <div className="content">
          <h1 className="text-4xl mt-5 font-bold">Idowu Tijesunimi</h1>
          <p className="pt-3 text-xl font-light">
            Hi, I'm Idowu Tijesunimi, a Fullstack Developer and a Machine Learning enthusiast based in Ibadan, Nigeria...
          </p>

          <div className="skills flex items-center mt-7 gap-3">
            <div className="bg-[#a4795e] py-1 px-3 rounded-2xl">
              Responsive Design
            </div>
            <div className="bg-[#a4795e] py-1 px-3 rounded-2xl">
              UI Development
            </div>
            <div className="bg-[#a4795e] py-1 px-2 rounded-2xl">
              +8
            </div>
          </div>

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
            {/* <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
              <SiMongodb />
            </div> */}
            <div className="bg-[#a4795e] text-2xl py-2 px-2 rounded-3xl">
              <FaNode />
            </div>
            {/* <SiScikitlearn className="bg-[#a4795e] py-1 px-2 rounded-2xl text-4xl" /> */}
            {/* <SiTensorflow className="bg-[#a4795e] py-1 px-2 rounded-2xl text-4xl" /> */}
            {/* <FaGithubSquare className="bg-[#a4795e] py-1 px-1 rounded-2xl text-4xl" /> */}
          </div>
        </div>
      </div>

      <AboutSection />
    </section>
  );
}
