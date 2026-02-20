'use client'
import React from 'react';

import DevJournal from '@/components/Journal';
import TabSection from "../components/TabSection";
import Hero from '@/components/Hero';
import AboutSection from '../components/AboutSection';
import Projects from "@/components/Projects";
import Collaboration from '@/components/Collaboration';
import ContactSection from "@/components/ContactSection";
import Skillset from '@/components/Skillset';
import Visionary from '@/components/Visionary';

export default function Home() {
  return (
    <main className="relative w-full bg-[#0a0a0a]">
      {/* Navigation */}
      <TabSection />

      {/* 1. Positioning */}
      <Hero />

      {/* 2. Identity & Story */}
      <AboutSection />

      <Visionary />

      

      {/* 4. Proof of Systems */}
      <Projects />

      {/* 5. Future & Outreach */}
      <Collaboration />

      {/* 6. Technical Arsenal */}
      <Skillset />

      {/* 3. Momentum (The "Blog" feel you wanted) */}
      <DevJournal />

      {/* 7. Closing & Connection */}
      <ContactSection />

      {/* Helpers */}
      {/* <ScrollToTop /> */}
    </main>
  );
}