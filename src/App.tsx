import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Database, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  Users, 
  Globe, 
  Activity, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Terminal, 
  Send, 
  Check, 
  Mail, 
  Phone, 
  MessageSquare,
  Workflow,
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle
} from "lucide-react";
import { PROJECTS, SERVICES, ARTICLES, EXPERIENCE } from "./data";
import ProjectEcosystem from "./components/ProjectEcosystem";
import AITwinChat from "./components/AITwinChat";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("village-info-system");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Academic Portal (SIS)",
    message: ""
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real database dispatch or webhook notification and show feedback
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({
        name: "",
        email: "",
        company: "",
        projectType: "Academic Portal (SIS)",
        message: ""
      });
    }, 4000);
  };

  // Scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const selectedFeaturedProject = PROJECTS.find(p => p.id === activeTab) || PROJECTS[0];

  return (
    <div className="min-h-screen bg-brand-dark-base selection:bg-brand-accent selection:text-white relative">
      
      {/* 1. Subtle, high-end backgrounds */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-brand-accent/5 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[800px] left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Floating Header */}
      <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 transition-all py-4">
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="h-8 w-8 bg-brand-accent rounded-sm flex items-center justify-center font-display font-black text-white text-xs tracking-tighter shadow-md">
              BB
            </div>
            <div>
              <p className="font-display font-medium text-xs tracking-tight text-white uppercase leading-none opacity-90">
                Bagus Batra
              </p>
              <span className="font-mono text-[8px] tracking-widest text-[#5d6880] uppercase mt-0.5 block">
                Digital Architecture
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-semibold font-mono">
            <button 
              onClick={() => scrollToSection("ecosystem")} 
              className="text-brand-accent transition-all cursor-pointer underline underline-offset-8 decoration-2"
            >
              System Map
            </button>
            <button 
              onClick={() => scrollToSection("problems")} 
              className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-slate-350"
            >
              Expertise
            </button>
            <button 
              onClick={() => scrollToSection("work")} 
              className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-slate-350"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection("experience")} 
              className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-slate-350"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("knowledge")} 
              className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-slate-350"
            >
              Journal
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-slate-350"
            >
              Services
            </button>
          </nav>

          {/* CTA Right */}
          <div>
            <button 
              onClick={() => scrollToSection("consultation-hub")} 
              className="py-1.5 px-4 rounded-full bg-white text-black hover:bg-neutral-200 text-[11px] font-mono tracking-widest uppercase font-semibold transition-all cursor-pointer"
            >
              Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 space-y-32 py-16">
        
        {/* ==========================================
            HERO & ECOSYSTEM SECTION (Who I Am)
            ========================================== */}
        <section id="ecosystem" className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block">
                FULL STACK DEVELOPER • DIGITAL SOLUTION CONSULTANT • EDUCATOR
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                I build digital solutions that solve <span className="text-[#0a5cff]">real-world</span> challenges.
              </h1>
              <p className="font-sans text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                Specialized in constructing scalable ERP segments, custom School Information Systems (SIS), rural Village Portals, and resilient database APIs. Combining industry practices in Laravel and React with SAP integrations to bridge administrative deficits.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={() => scrollToSection("consultation-hub")}
                  className="py-3 px-6 rounded-xl bg-brand-accent text-white font-mono text-xs tracking-wider uppercase font-semibold hover:bg-brand-accent/90 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-accent-glow"
                >
                  Configure Solutions Blueprint
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => scrollToSection("work")}
                  className="py-3 px-6 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-300 font-mono text-xs tracking-wider uppercase hover:bg-white/[0.05] transition-all cursor-pointer"
                >
                  Read Case Studies
                </button>
              </div>
            </div>

            {/* Quick credibility visual specs sidebar */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 backdrop-blur-sm mt-4 lg:mt-0 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="font-mono text-[10px] text-brand-accent uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                AVAILABILITY & STATUS
              </div>
              <p className="font-display text-base font-semibold text-white uppercase tracking-tight">
                Taking Consultations & Systems Designing
              </p>
              <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
                <div>
                  <span className="block text-[#5d6880] text-[10px] uppercase">Core Backend</span>
                  <p className="text-slate-200 mt-1 font-medium">Laravel & PHP 8.x</p>
                </div>
                <div>
                  <span className="block text-[#5d6880] text-[10px] uppercase">Client Web</span>
                  <p className="text-slate-200 mt-1 font-medium">TypeScript & React</p>
                </div>
                <div>
                  <span className="block text-[#5d6880] text-[10px] uppercase">Relational DB</span>
                  <p className="text-slate-200 mt-1 font-medium">MySQL Normalization</p>
                </div>
                <div>
                  <span className="block text-[#5d6880] text-[10px] uppercase">Integrations</span>
                  <p className="text-slate-200 mt-1 font-medium">SAP ODBC, REST Gates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Project Ecosystem Element */}
          <div className="pt-8">
            <ProjectEcosystem />
          </div>
        </section>


        {/* ==========================================
            WHAT PROBLEMS I SOLVE
            ========================================== */}
        <section id="problems" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block font-bold">
              Core Competence Pillars
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Bespoke Digital Consulting & Delivery
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              I reject generic template deployments. I analyze operational voids in corporate bookkeeping, rural governance, and regional schools to formulate optimized, secure database environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Core Column 1: Full-Stack Dev */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:border-brand-accent/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-all pointer-events-none" />
              <div className="h-10 w-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">
                Creative Full Stack Engineering
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Developing responsive modular interfaces coupled with secure relational repositories. Writing heavily optimized Laravel routes, clean React controllers, and highly normalized SQL schemas.
              </p>
              <ul className="font-mono text-[10px] text-slate-400 space-y-1.5 pt-4 border-t border-white/15">
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-brand-accent rounded-sm" /> Clean REST APIs & JWT Auth</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-brand-accent rounded-sm" /> Custom SPA state controllers</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-brand-accent rounded-sm" /> Automated database migrations</li>
              </ul>
            </div>

            {/* Core Column 2: Digital Solution Consultant */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:border-brand-accent/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-all pointer-events-none" />
              <div className="h-10 w-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">
                Digital Solution Consultation
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Aligning technical stacks with business strategy. Formulating queue-backed middleware to synchronize transactions into legacy ERP structures (SAP) and removing manual data processing dependencies.
              </p>
              <ul className="font-mono text-[10px] text-slate-400 space-y-1.5 pt-4 border-t border-white/15">
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-brand-accent rounded-sm" /> Database normalizations & indexes</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-brand-accent rounded-sm" /> Decoupled queue synchronization</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-brand-accent rounded-sm" /> Operational latency audits</li>
              </ul>
            </div>

            {/* Core Column 3: Educator */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:border-brand-accent/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-all pointer-events-none" />
              <div className="h-10 w-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">
                Technical IT Educator
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Transferring architectural best practices into practical skill bootcamps. Empowering local developers, teams, and academic faculties to master modern paradigms, database hygiene, and clean deployment habits.
              </p>
              <ul className="font-mono text-[10px] text-slate-400 space-y-1.5 pt-4 border-t border-white/15">
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-brand-accent rounded-sm" /> Curriculum design for tech academies</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-brand-accent rounded-sm" /> Interactive query design labs</li>
                <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-brand-accent rounded-sm" /> Hands-on code reviews & refactors</li>
              </ul>
            </div>
          </div>
        </section>


        {/* ==========================================
            SELECTED WORKS SECTION (Deep Previews)
            ========================================== */}
        <section id="work" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block font-bold">
                CASE STUDY SHOWCASE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Selected Work & Solutions
              </h2>
            </div>
            
            {/* Horizontal project filter controls */}
            <div className="flex flex-wrap gap-2">
              {PROJECTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`py-2 px-4 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    activeTab === p.id 
                      ? "bg-brand-accent text-white font-medium shadow-md"
                      : "bg-[#050505] text-slate-400 hover:text-slate-200 border border-white/10"
                  }`}
                >
                  {p.title.split(" ")[0]}.. {p.category}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Interactive Case Study Frame */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeaturedProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Meta details & Specs */}
                <div className="lg:col-span-7 bg-brand-card/40 border border-brand-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8 backdrop-blur-md">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest bg-brand-accent/5 px-2.5 py-1 rounded">
                        {selectedFeaturedProject.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {selectedFeaturedProject.tech.join(" • ")}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                      {selectedFeaturedProject.title}
                    </h3>
                    <p className="text-sm font-mono text-[#5d6880] tracking-wide mb-6">
                      {selectedFeaturedProject.subtitle}
                    </p>

                    <div className="space-y-6">
                      {/* Problem Block */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                        <div className="md:col-span-3">
                          <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block font-bold">
                            PROBLEM:
                          </span>
                        </div>
                        <div className="md:col-span-9">
                          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                            {selectedFeaturedProject.problem}
                          </p>
                        </div>
                      </div>

                      {/* Solution Block */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                        <div className="md:col-span-3">
                          <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block font-bold">
                            SOLUTION:
                          </span>
                        </div>
                        <div className="md:col-span-9">
                          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                            {selectedFeaturedProject.solution}
                          </p>
                        </div>
                      </div>

                      {/* Impact Block */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                        <div className="md:col-span-3">
                          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
                            IMPACT:
                          </span>
                        </div>
                        <div className="md:col-span-9">
                          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                            {selectedFeaturedProject.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blueprint CTA Trigger */}
                  <div className="pt-6 border-t border-white/15 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-500">
                      Need a similar system built?
                    </span>
                    <button
                      onClick={() => scrollToSection("consultation-hub")}
                      className="font-mono text-xs text-brand-accent hover:text-white flex items-center gap-1.5 group transition-all"
                    >
                      Discuss project system architecture
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Visual Outcome Metrics Frame */}
                <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
                  
                  {/* Styled schematic mesh effect bg */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(10,92,255,0.08),transparent)] pointer-events-none" />

                  <div>
                    <span className="font-mono text-[10px] text-[#5d6880] uppercase tracking-widest block mb-4">
                      ✓ SOLVED OUTCOME METRICS
                    </span>
                    
                    <div className="space-y-6 pt-4">
                      {selectedFeaturedProject.outcomeStats.map((stat, sIdx) => (
                        <div key={sIdx} className="border-b border-white/[0.03] pb-4 last:border-0 last:pb-0">
                          <span className="text-[36px] sm:text-[44px] font-display font-bold text-white tracking-tight leading-none block">
                            {stat.value}
                          </span>
                          <span className="text-xs text-slate-400 font-sans tracking-wide mt-1 block">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schematic footer tag */}
                  <div className="border-t border-white/[0.04] pt-6 mt-8">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-brand-accent" />
                      <span className="font-mono text-[9px] tracking-wide text-[#5d6880]">
                        DEPLOYMENT STATUS: ACTIVE • PRODUCTION
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>


        {/* ==========================================
            EXPERIENCE SECTION (Storytelling & Credibility)
            ========================================== */}
        <section id="experience" className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
              <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest block">
                TIMEFRAME STORY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Engineering Value Over Time
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                I do not fill spacing with long lists of standard duties. This is a chronological record of technical transformations, developer educations, and system design optimizations.
              </p>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2 relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />
                <span className="font-mono text-[10px] text-[#5d6880] block uppercase font-bold">TOTAL PORTFOLIO STAT:</span>
                <p className="font-display text-2xl font-bold text-white uppercase tracking-tight">400+ Engineers Trained</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Bagus has directly mentored a generation of regional software developers into companies and districts in Indonesia.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              {EXPERIENCE.map((exp, eIdx) => (
                <div 
                  key={exp.id} 
                  className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 space-y-4 hover:border-brand-accent/30 transition-all duration-300 relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/15 pb-4">
                    <div>
                      <span className="font-mono text-[10px] text-white/60 bg-white/10 px-2.5 py-1 rounded-md uppercase tracking-wider font-semibold">
                        {exp.period}
                      </span>
                      <h3 className="font-display font-bold text-lg text-white mt-2 uppercase tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="font-sans text-xs text-brand-accent font-semibold">
                        {exp.organization}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <span className="font-mono text-[10px] text-brand-accent font-semibold bg-brand-accent/10 border border-brand-accent/25 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                        {exp.metric}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  <div className="pt-3">
                    <span className="text-[10px] font-mono text-[#5d6880] uppercase tracking-wider block mb-2">
                      Key Transformations & Outcomes:
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.highlights.map((high, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-300 font-sans flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                          <span>{high}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ==========================================
            KNOWLEDGE SHARING SECTION
            ========================================== */}
        <section id="knowledge" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block font-bold">
                PRACTICAL INSIGHTS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Articles & Technical Tutorials
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl font-sans">
                As a technical educator, I believe in publishing engineering decisions. These brief resources discuss resolving database lockups, syncing corporate adapters, and regional software setups.
              </p>
            </div>
            
            <div>
              <span className="inline-flex items-center gap-1.5 text-slate-400 font-mono text-xs uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-brand-accent" />
                3 Published Guides
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.map((art) => (
              <div 
                key={art.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brand-accent/40 transition-all duration-300 backdrop-blur-sm group"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#5d6880] mb-3 uppercase tracking-wider font-bold">
                    <span>{art.category.toUpperCase()}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-display font-medium text-base text-white group-hover:text-brand-accent transition-colors mb-2 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-6 line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="border-t border-white/15 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#5d6880]">{art.date}</span>
                  
                  {/* Simple Expand or discuss anchor */}
                  <button 
                    onClick={() => {
                      scrollToSection("consultation-hub");
                    }}
                    className="text-[11px] font-mono text-brand-accent hover:text-white flex items-center gap-1 cursor-pointer transition-colors uppercase tracking-wider font-semibold"
                  >
                    Discuss in twin chat
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ==========================================
            SERVICES SECTION (Consultative Design)
            ========================================== */}
        <section id="services" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block font-bold">
              SYSTEM DELIVERABLES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Consulting Models & Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              I operate purely on system customizers tailored around organizational size and legacy configurations. No abstract flat fees. Click any solution to start drafting your secure platform architecture brief.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((srv) => (
              <div 
                key={srv.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-accent/40 transition-all duration-300 backdrop-blur-md relative overflow-hidden group"
              >
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2 uppercase tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-mono text-brand-accent uppercase tracking-widest block mb-2 font-bold">
                        Common System Modules
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {srv.modules.map((m, mIdx) => (
                          <span key={mIdx} className="text-[10px] font-mono text-slate-350 bg-white/5 border border-white/5 px-2.5 py-1 rounded uppercase">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-[9px] font-mono text-[#5d6880] uppercase tracking-widest block font-bold">
                        Ideal Partner Scale
                      </span>
                      <p className="text-xs text-slate-300 font-sans mt-0.5">
                        {srv.idealFor}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/15 pt-6 mt-8 space-y-4">
                  <div className="text-[11px] font-sans leading-relaxed text-slate-400">
                    <span className="font-mono text-[9px] text-brand-accent uppercase tracking-widest block font-bold">Architectural Note:</span>
                    {srv.architectureHighlight}
                  </div>

                  <button
                    onClick={() => {
                      scrollToSection("consultation-hub");
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-brand-accent/10 border border-white/10 hover:border-brand-accent text-slate-300 hover:text-white font-mono text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer font-bold"
                  >
                    Select this model in Planner
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ==========================================
            CONTACT & INTELLIGENT HUB SECTION
            ========================================== */}
        <section id="consultation-hub" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block font-bold">
              ENGAGEMENT GATEWAY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Blueprint Consultation Terminal
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Formulate your project details inside the <strong>Blueprint Customizer</strong>, then synchronize it with our <strong>AI Twin Consultant</strong> to map immediate scopes. Let's start the design roadmap.
            </p>
          </div>

          {/* Interactive Core Panel: Configurator & Chat Twin */}
          <div className="p-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
            <AITwinChat />
          </div>

          {/* Manual Inquiry Dispatch Form Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Context/Coordinates Info */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest block mb-2">
                  DIRECT CONTACT INFO
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Let's Discuss Your Project
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  Ready to draft a system blueprint or request an audit of your relational database? Send details of your requirements directly. I review individual solutions designs personally and will reach out with an engineering schematic outline.
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:bagusbatr@gmail.com" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-brand-accent transition-all group">
                  <div className="p-2.5 bg-brand-accent/15 text-brand-accent rounded-lg">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#5d6880] uppercase block font-bold">Primary Workspace Email</span>
                    <span className="text-xs text-slate-200 font-semibold group-hover:text-brand-accent transition-colors">
                      bagusbatr@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="p-2.5 bg-brand-accent/15 text-brand-accent rounded-lg">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#5d6880] uppercase block font-bold">Regional Consultation Line</span>
                    <span className="text-xs text-slate-200 font-semibold">
                      Indonesia Region (GMT+7)
                    </span>
                  </div>
                </div>
              </div>

              <p className="font-mono text-[9px] text-[#5d6880] uppercase tracking-wider font-bold">
                © 2026 Bagus Batra. Structured with precision.
              </p>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <span className="font-mono text-[10px] text-[#5d6880] uppercase tracking-widest block mb-6 font-bold">
                SECURE SCOPE DISPATCH COMPONENT
              </span>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5 font-bold">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={contactForm.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Director of Academics"
                      className="w-full py-2.5 px-3 rounded-lg text-xs bg-[#050505] border border-white/10 focus:border-brand-accent text-white placeholder-slate-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5 font-bold">
                      Workspace Email
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={contactForm.email}
                      onChange={handleFormChange}
                      placeholder="e.g. domain@school.edu"
                      className="w-full py-2.5 px-3 rounded-lg text-xs bg-[#050505] border border-white/10 focus:border-brand-accent text-white placeholder-slate-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5 font-bold">
                      Company / School Title
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={contactForm.company}
                      onChange={handleFormChange}
                      placeholder="e.g. Merdeka Academy Group"
                      className="w-full py-2.5 px-3 rounded-lg text-xs bg-[#050505] border border-white/10 focus:border-brand-accent text-white placeholder-slate-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5 font-bold">
                      Desired Platform Module
                    </label>
                    <select
                      name="projectType"
                      value={contactForm.projectType}
                      onChange={handleFormChange}
                      className="w-full py-2.5 px-3 rounded-lg text-xs bg-[#050505] border border-white/10 focus:border-brand-accent text-white focus:outline-none"
                    >
                      <option value="Academic Portal (SIS)">Academic Portal (SIS)</option>
                      <option value="Village Civil Platform">Village Civil Platform</option>
                      <option value="Enterprise Custom ERP">Enterprise Custom ERP</option>
                      <option value="Database Auditing / REST Scaling">Database Auditing / REST Scaling</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5 font-bold">
                    Describe your system gaps or goals
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={handleFormChange}
                    placeholder="Briefly state current database structures, SAP integration requirements, offline limitations, or timeline parameters..."
                    className="w-full py-2.5 px-3 rounded-lg text-xs bg-[#050505] border border-white/10 focus:border-brand-accent text-white placeholder-slate-600 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <AnimatePresence mode="wait">
                    {formSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-3 px-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        <span>Thank you! Your solutions design brief is successfully logged. Bagus Batra will evaluate your schemas and contact you within 24 hours.</span>
                      </motion.div>
                    ) : (
                      <button
                        type="submit"
                        className="w-full py-3 px-4 rounded-xl bg-brand-accent hover:bg-brand-accent/95 text-white font-mono text-xs tracking-wider uppercase font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <Send className="w-4 h-4" />
                        Dispatch Solutions Proposal
                      </button>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* Futuristic footer rail */}
      <footer className="border-t border-white/10 py-8 bg-[#050505] mt-16 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-bold">
              BAGUS BATRA PORTFOLIO PLATFORM • EST. 2026
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span className="font-mono text-[9px] text-[#5d6880] uppercase tracking-wider font-bold">
              COORDINATES: CENTRAL INDONESIA • GMT+7
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
