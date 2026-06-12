import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  X,
  Database,
  Cpu,
  Globe,
  Users,
  HardDrive,
  ShieldCheck,
  Activity,
  BookOpen,
  Briefcase,
} from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

// Map each project's featuredImage tag to a representative schematic icon
const IMAGE_ICON_MAP: Record<string, any> = {
  village: Globe,
  school: Users,
  erp: HardDrive,
  audit: ShieldCheck,
  clinic: Activity,
  ecommerce: Briefcase,
  library: BookOpen,
  hr: Database,
  field: Cpu,
};

interface ProjectsPageProps {
  onBack: () => void;
  onConsult: () => void;
}

export default function ProjectsPage({ onBack, onConsult }: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(PROJECTS.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-brand-dark-base selection:bg-brand-accent selection:text-white relative">
      {/* Subtle backgrounds matching the main site */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-brand-accent/5 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-[400px] right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0 animate-drift-glow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none z-0 animate-drift-glow-slow" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0b1222]/80 backdrop-blur-md border-b border-white/10 transition-all py-4">
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
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

          <button
            onClick={onBack}
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-slate-300 hover:text-brand-accent transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-3 max-w-3xl">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block font-bold">
            FULL PROJECT ARCHIVE
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            All Delivered Solutions & Case Studies
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
            A library of systems engineered across education, government, enterprise, and commercial sectors. Click any card for a full architectural breakdown.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`py-2 px-4 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-accent text-white font-medium shadow-md"
                  : "bg-[#0b1222] text-slate-400 hover:text-slate-200 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Project Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = IMAGE_ICON_MAP[project.featuredImage] || Cpu;

            return (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group text-left bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 cursor-pointer transition-colors hover:border-brand-accent/40 hover:bg-white/[0.07] relative overflow-hidden"
              >
                <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-all pointer-events-none" />

                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest bg-brand-accent/5 px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-white tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#5d6880] tracking-wide">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-3">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/[0.04]">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[9px] font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-brand-accent font-mono text-[10px] uppercase tracking-widest group-hover:translate-x-0.5 transition-transform">
                  View Architecture
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0f1830] border border-white/10 rounded-2xl p-6 sm:p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest bg-brand-accent/5 px-2.5 py-1 rounded">
                  {selectedProject.category}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {selectedProject.tech.join(" • ")}
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-sm font-mono text-[#5d6880] tracking-wide mb-6">
                {selectedProject.subtitle}
              </p>

              <div className="space-y-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                  <div className="md:col-span-3">
                    <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block font-bold">
                      PROBLEM:
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                  <div className="md:col-span-3">
                    <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block font-bold">
                      SOLUTION:
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                  <div className="md:col-span-3">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
                      IMPACT:
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Outcome metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {selectedProject.outcomeStats.map((stat, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <span className="text-2xl font-display font-bold text-white tracking-tight leading-none block">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-400 font-sans tracking-wide mt-1 block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/15 flex items-center justify-between flex-wrap gap-4">
                <span className="font-mono text-[10px] text-slate-500">
                  Need a similar system built?
                </span>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onConsult();
                  }}
                  className="font-mono text-xs text-brand-accent hover:text-white flex items-center gap-1.5 group transition-all cursor-pointer"
                >
                  Discuss project system architecture
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
