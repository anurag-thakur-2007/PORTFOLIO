"use client";

import React from "react";
import { ArrowLeft, Printer, Download, Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PROFILE_DATA } from "@/data/config";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans antialiased py-12 px-4 md:px-8 print:p-0 print:bg-white print:text-black">
      {/* Navigation & Actions Panel (hidden during print) */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-semibold text-foreground/60 hover:text-accent-blue transition-colors group cursor-none"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-accent-blue text-white rounded-xl shadow-premium hover:bg-accent-blue-hover transition-colors outline-none cursor-none"
          >
            <Printer className="h-4 w-4" />
            <span>Print or Save PDF</span>
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-neutral-card border border-neutral-border rounded-3xl p-8 md:p-12 shadow-premium relative print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
        {/* Header Section */}
        <header className="border-b border-neutral-border pb-6 text-center print:border-black/10">
          <h1 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-foreground print:text-black">
            {PROFILE_DATA.name}
          </h1>
          <p className="text-sm font-semibold tracking-wide uppercase text-accent-blue mt-1 print:text-black print:opacity-75">
            {PROFILE_DATA.role}
          </p>
          
          {/* Contact Details row */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-foreground/70 mt-4 print:text-black/80">
            <span className="flex items-center gap-1">
              <Phone className="h-3.5 w-3.5 text-accent-blue shrink-0 print:hidden" />
              <span>{PROFILE_DATA.phone}</span>
            </span>
            <span className="text-foreground/35 print:text-black/30">&bull;</span>
            <span className="flex items-center gap-1">
              <Mail className="h-3.5 w-3.5 text-accent-blue shrink-0 print:hidden" />
              <a href={`mailto:${PROFILE_DATA.email}`} className="hover:underline">{PROFILE_DATA.email}</a>
            </span>
            <span className="text-foreground/35 print:text-black/30">&bull;</span>
            <span className="flex items-center gap-1">
              <LinkedinIcon className="h-3.5 w-3.5 text-accent-blue shrink-0 print:hidden" />
              <a href={PROFILE_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </span>
            <span className="text-foreground/35 print:text-black/30">&bull;</span>
            <span className="flex items-center gap-1">
              <GithubIcon className="h-3.5 w-3.5 text-accent-blue shrink-0 print:hidden" />
              <a href={PROFILE_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            </span>
            <span className="text-foreground/35 print:text-black/30">&bull;</span>
            <a href={PROFILE_DATA.socials.leetcode} target="_blank" rel="noopener noreferrer" className="hover:underline">LeetCode</a>
            <span className="text-foreground/35 print:text-black/30">&bull;</span>
            <a href={PROFILE_DATA.socials.codeforces} target="_blank" rel="noopener noreferrer" className="hover:underline">Codeforces</a>
          </div>
        </header>

        {/* Content Body Grid */}
        <div className="mt-8 space-y-8 text-xs text-foreground/80 print:text-black/90">
          
          {/* EDUCATION */}
          <section className="space-y-3">
            <h2 className="text-sm font-display font-extrabold uppercase tracking-wider text-accent-blue border-b border-neutral-border pb-1 print:text-black print:border-black/10">
              Education
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-bold text-foreground print:text-black block text-sm">VIT Bhopal University</span>
                  <span className="italic">B.Tech in Computer Science Engineering</span>
                </div>
                <div className="sm:text-right text-xs">
                  <span className="block font-semibold">Aug 2024 – May 2028</span>
                  <span className="text-accent-blue font-bold print:text-black">CGPA: {PROFILE_DATA.cgpa}/10</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1 border-t border-dashed border-neutral-border/50 print:border-black/5">
                <div>
                  <span className="font-semibold text-foreground print:text-black">K.D. Intermediate College, Deoria</span>
                  <span className="block text-foreground/60 print:text-black/75">Class XII &bull; Score: 82.4%</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground print:text-black">Sri Sai Inter College, Barabanki</span>
                  <span className="block text-foreground/60 print:text-black/75">Class X &bull; Score: 92.33%</span>
                </div>
              </div>
            </div>
          </section>

          {/* TECHNICAL SKILLS */}
          <section className="space-y-3">
            <h2 className="text-sm font-display font-extrabold uppercase tracking-wider text-accent-blue border-b border-neutral-border pb-1 print:text-black print:border-black/10">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <div>
                <span className="font-bold text-foreground print:text-black block mb-0.5">Languages & Foundations</span>
                <span className="block mb-1"><strong className="text-foreground print:text-black">Languages:</strong> Python, Java, C++, JavaScript, SQL</span>
                <span className="block"><strong className="text-foreground print:text-black">Core CS:</strong> Data Structures & Algorithms (DSA), OOP, DBMS, Operating Systems, Computer Networks, Prob & Stats, Problem Solving</span>
              </div>
              <div>
                <span className="font-bold text-foreground print:text-black block mb-0.5">Web, AI, & DevOps</span>
                <span className="block mb-1"><strong className="text-foreground print:text-black">Web & Backend:</strong> React, Node.js, Express.js, FastAPI, Flask, REST APIs, MongoDB, Tailwind CSS</span>
                <span className="block mb-1"><strong className="text-foreground print:text-black">Machine Learning & GenAI:</strong> ML, Deep Learning, NLP, RAG, LangChain, LangGraph, Vector Databases</span>
                <span className="block"><strong className="text-foreground print:text-black">Tools & DevOps:</strong> Cloud Computing, Git, GitHub, Docker, Jenkins, CI/CD, Agile, Maven, Graphite, Nagios</span>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="space-y-4">
            <h2 className="text-sm font-display font-extrabold uppercase tracking-wider text-accent-blue border-b border-neutral-border pb-1 print:text-black print:border-black/10">
              Experience
            </h2>
            <div className="space-y-6">
              {/* Infosys */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-foreground print:text-black block text-sm">AI/ML Intern</span>
                    <span className="italic text-foreground/70 print:text-black/85">Infosys Springboard (Remote)</span>
                  </div>
                  <div className="sm:text-right text-xs">
                    <span className="block font-semibold">Nov 2025 – Present</span>
                  </div>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-foreground/70 print:text-black/75">
                  <li>Built a RAG-powered legal contract analyzer using LangChain and Pinecone, achieving 90% accuracy in automated clause extraction and risk assessment.</li>
                  <li>Designed a multi-agent workflow with Legal, Finance, Compliance, and Operations agents using LangGraph to automate contract review workflows.</li>
                  <li>Developed a Streamlit-based interface delivering contract risk-scoring, analysis reports, and reviewer dashboards.</li>
                  <li>Reduced query latency by 60% and improved inference throughput by 3x through optimized retrieval, caching, and model quantization.</li>
                </ul>
              </div>

              {/* Clubs */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-foreground print:text-black block text-sm">Event Management Lead & Content Team Co-Lead</span>
                    <span className="italic text-foreground/70 print:text-black/85">VITKULT & Startup Club, VIT Bhopal University</span>
                  </div>
                  <div className="sm:text-right text-xs">
                    <span className="block font-semibold">Mar 2025 – Present</span>
                  </div>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-foreground/70 print:text-black/75">
                  <li>Led end-to-end event planning as Event Management Lead at VITKULT and content strategy as Co-Lead at Startup Club, VIT Bhopal.</li>
                  <li>Organized 6+ technical and cultural events across VITKULT, VITronix, and Startup Club, engaging 500+ participants and cross-functional teams.</li>
                  <li>Collaborated with cross-functional student teams to coordinate scheduling, promotions, and on-ground logistics, strengthening leadership and stakeholder communication skills.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="space-y-4">
            <h2 className="text-sm font-display font-extrabold uppercase tracking-wider text-accent-blue border-b border-neutral-border pb-1 print:text-black print:border-black/10">
              Projects
            </h2>
            <div className="space-y-4">
              {/* Health Buddy */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-bold text-foreground print:text-black block text-sm">
                    Health Buddy – AI-Powered Rural Healthcare Chatbot
                  </span>
                  <span className="font-semibold text-xs text-accent-blue print:text-black font-mono">2025</span>
                </div>
                <p className="italic text-[10px] text-foreground/60 print:text-black/70">
                  Python | Flask | TensorFlow | Scikit-learn | JavaScript | WhatsApp API | Google Speech Recognition
                </p>
                <ul className="list-disc pl-4 space-y-1 text-foreground/70 print:text-black/75">
                  <li>Built an AI-powered healthcare assistant delivering multilingual (Hindi/English) symptom analysis, mental wellness guidance, and doctor recommendations using Flask, TensorFlow, and Scikit-learn.</li>
                  <li>Developed a machine learning symptom-checker module using TensorFlow and Scikit-learn, achieving up to 90% prediction accuracy on trained datasets.</li>
                  <li>Integrated WhatsApp Business API and Google Speech Recognition for voice-based accessibility, and deployed the full-stack application on Vercel for public use.</li>
                </ul>
              </div>

              {/* RideBasket */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-bold text-foreground print:text-black block text-sm">
                    RideBasket – Ride-Sharing Platform for VIT Bhopal Students
                  </span>
                  <span className="font-semibold text-xs text-accent-blue print:text-black font-mono">June 2026</span>
                </div>
                <p className="italic text-[10px] text-foreground/60 print:text-black/70">
                  React | Node.js | Express.js | MongoDB | JWT | Tailwind CSS
                </p>
                <ul className="list-disc pl-4 space-y-1 text-foreground/70 print:text-black/75">
                  <li>Designed RESTful APIs for ride creation, booking, filtering, and cancellation within a full-stack MERN platform enabling students to split travel costs.</li>
                  <li>Secured endpoints with JWT-based authentication and bcrypt password hashing, implementing protected, role-based routes for organizers and passengers.</li>
                  <li>Optimized MongoDB schema and query design for fast search and filtering by pickup point, destination, date, and cab type; deployed via Vercel, Render, and MongoDB Atlas.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS & ACHIEVEMENTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Certifications */}
            <section className="space-y-2">
              <h2 className="text-sm font-display font-extrabold uppercase tracking-wider text-accent-blue border-b border-neutral-border pb-1 print:text-black print:border-black/10">
                Certifications
              </h2>
              <ul className="list-disc pl-4 space-y-1 text-foreground/70 print:text-black/75">
                <li>Oracle Certified Foundations Associate – Java, Oracle University (Jul 2026)</li>
                <li>Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate, Oracle (May 2026)</li>
                <li>DevOps, Agile and Design Thinking, IBM Career Education Program (Jul 2026)</li>
                <li>Generative AI Unleashing, Infosys Springboard (Oct 2025)</li>
                <li>Artificial Intelligence Primer Certification, Infosys Springboard (Oct 2025)</li>
                <li>AcWoC'25 Open Source Program — Android Club, VIT Bhopal University (Participation)</li>
              </ul>
            </section>

            {/* Achievements */}
            <section className="space-y-2">
              <h2 className="text-sm font-display font-extrabold uppercase tracking-wider text-accent-blue border-b border-neutral-border pb-1 print:text-black print:border-black/10">
                Achievements
              </h2>
              <ul className="list-disc pl-4 space-y-1 text-foreground/70 print:text-black/75">
                <li>NPTEL Marketing Analytics (IIT Kharagpur) – Top 1% (Score: 99%)</li>
                <li>NPTEL Cloud Computing (IIT Kharagpur) – Elite + Silver</li>
                <li>Smart India Hackathon 2025 – Qualified Internal Round</li>
                <li>Solved 100+ LeetCode problems (Rating: 1450) and actively participated in Codeforces contests (Rating: {PROFILE_DATA.codeforcesRating})</li>
              </ul>
            </section>

          </div>

        </div>
      </div>
    </div>
  );
}
