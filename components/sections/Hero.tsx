"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Button from "@/components/Button";
import Reveal from "@/animations/Reveal";
import TextReveal from "@/animations/TextReveal";
import Magnetic from "@/components/Magnetic";
import HeroPortrait from "@/components/HeroPortrait";
import { PROFILE_DATA } from "@/data/config";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutExpo
      },
    },
  };

  // Smooth scroll click handlers
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-6 md:px-12 bg-mesh overflow-hidden"
    >
      {/* Dynamic light gradient nodes in background */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-accent-blue/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 pt-16">
        {/* Left Side: Greetings, Profile details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          {/* Availability Status Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
              Available for SDE Roles & Internships
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h2
              variants={itemVariants}
              className="text-sm font-sans font-bold uppercase tracking-[0.25em] text-foreground/50"
            >
              Hi, I'm
            </motion.h2>
            
            {/* Big Name Editorial Reveal */}
            <TextReveal
              text={PROFILE_DATA.name}
              as="h1"
              type="words"
              delay={0.5}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-foreground"
            />
            
            {/* Role Header */}
            <motion.h3
              variants={itemVariants}
              className="text-xl md:text-3xl font-display font-bold tracking-tight text-accent-blue"
            >
              {PROFILE_DATA.role}
            </motion.h3>
          </div>

          {/* Headline & Brief Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-foreground/60 max-w-xl leading-relaxed font-sans"
          >
            Engineering robust compliance pipelines and multi-agent AI frameworks at scale. Specializing in Retrieval-Augmented Generation (RAG) orchestration, concurrent database splits, and interactive GIS twins.
          </motion.p>

          {/* CTA Button Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 mt-2"
          >
            <Button
              href="#projects"
              onClick={handleScrollToProjects}
              variant="primary"
              size="md"
              magnetic
              icon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
            >
              View Projects
            </Button>
            
            <Button
              href={PROFILE_DATA.resumeUrl}
              variant="secondary"
              size="md"
              magnetic
              icon={<FileText className="h-4 w-4" />}
            >
              Download Resume
            </Button>

            <Button
              href="#contact"
              onClick={handleScrollToContact}
              variant="secondary"
              size="md"
              magnetic
              icon={<Mail className="h-4 w-4" />}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 mt-4 pt-6 border-t border-neutral-border w-full max-w-md"
          >
            <span className="text-[10px] uppercase font-sans font-bold tracking-wider text-foreground/40">
              Find me on
            </span>
            <div className="flex items-center gap-4">
              <Magnetic range={40} strength={0.3}>
                <a
                  href={PROFILE_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/60 hover:text-accent-blue transition-colors outline-none"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Magnetic>

              <Magnetic range={40} strength={0.3}>
                <a
                  href={PROFILE_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/60 hover:text-accent-blue transition-colors outline-none"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Magnetic>

              <Magnetic range={40} strength={0.3}>
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="p-2 text-foreground/60 hover:text-accent-blue transition-colors outline-none"
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Highlighting dynamic organic portrait */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <Reveal variant="zoom-in" delay={1.2} duration={1.0}>
            <HeroPortrait />
          </Reveal>
        </div>
      </div>

      {/* Pulsing Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 select-none"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center justify-center text-foreground/40 hover:text-accent-blue transition-colors cursor-pointer group"
          aria-label="Scroll Down to About Section"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] font-semibold">Scroll</span>
          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="mt-1"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
