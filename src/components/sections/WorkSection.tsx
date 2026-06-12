import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Terminal } from "lucide-react";
import { PROJECTS } from "../../data";

interface WorkSectionProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  scrollToSection: (id: string) => void;
  navigateTo: (path: string) => void;
}

export default function WorkSection({ activeTab, setActiveTab, scrollToSection, navigateTo }: WorkSectionProps) {
  const selectedFeaturedProject = PROJECTS.find((p) => p.id === activeTab) || PROJECTS[0];

  return (
    <section id="work" className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
        <div className="space-y-3">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block font-bold">
            CASE STUDY SHOWCASE
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Selected Work & Solutions
          </h2>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3">
          {/* Horizontal project filter controls */}
          <div className="flex flex-wrap gap-2">
            {PROJECTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`py-2 px-4 rounded-xl text-[11px] font-mono tracking-wider transition-all cursor-pointer ${
                  activeTab === p.id
                    ? "bg-brand-accent text-white font-medium shadow-md"
                    : "bg-[#0b1222] text-slate-400 hover:text-slate-200 border border-white/10"
                }`}
              >
                {p.title.split(" ")[0]}.. {p.category}
              </button>
            ))}
          </div>

          <button
            onClick={() => navigateTo("/projects")}
            className="font-mono text-[11px] text-brand-accent hover:text-white flex items-center gap-1.5 group transition-all cursor-pointer"
          >
            View all projects in interactive archive
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
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

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {selectedFeaturedProject.title}
                </h3>
                <p className="text-xs font-mono text-[#5d6880] tracking-wide mb-6">
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
                      <p className="text-[11px] sm:text-xs text-slate-300 font-sans leading-relaxed">
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
                      <p className="text-[11px] sm:text-xs text-slate-300 font-sans leading-relaxed">
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
                      <p className="text-[11px] sm:text-xs text-slate-300 font-sans leading-relaxed">
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
                  className="font-mono text-[11px] text-brand-accent hover:text-white flex items-center gap-1.5 group transition-all"
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
                      <span className="text-[28px] sm:text-[32px] font-display font-bold text-white tracking-tight leading-none block">
                        {stat.value}
                      </span>
                      <span className="text-[11px] text-slate-400 font-sans tracking-wide mt-1 block">
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
  );
}
