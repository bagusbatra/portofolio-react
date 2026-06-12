import { ArrowRight } from "lucide-react";
import DinoGame from "../DinoGame";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="ecosystem" className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block">
            FULL STACK DEVELOPER • DIGITAL SOLUTION CONSULTANT • EDUCATOR
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.05]">
            I build digital solutions that solve <span className="text-[#0a5cff]">real-world</span> challenges.
          </h1>
          <p className="font-sans text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Specialized in constructing scalable ERP segments, custom School Information Systems (SIS), rural Village Portals, and resilient database APIs. Combining industry practices in Laravel and React with SAP integrations to bridge administrative deficits.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection("consultation-hub")}
              className="py-3 px-6 rounded-xl bg-brand-accent text-white font-mono text-[11px] tracking-wider uppercase font-semibold hover:bg-brand-accent/90 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-accent-glow"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="py-3 px-6 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-300 font-mono text-[11px] tracking-wider uppercase hover:bg-white/[0.05] transition-all cursor-pointer"
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
          <p className="font-display text-sm font-semibold text-white uppercase tracking-tight">
            Taking Consultations & Systems Designing
          </p>
          <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-4 text-[11px] font-mono text-slate-400">
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

      {/* Arcade Break */}
      <div className="pt-8">
        <DinoGame />
      </div>
    </section>
  );
}
