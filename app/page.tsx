"use client";

import React, { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Coding from "@/components/sections/Coding";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Loader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <div className="flex-1 flex flex-col w-full relative">
          <CustomCursor />
          <Navbar />
          <main className="flex-1 w-full flex flex-col">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Coding />
            <Skills />
            <Achievements />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
