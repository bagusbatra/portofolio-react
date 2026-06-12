import { ChevronRight } from "lucide-react";
import { SERVICES } from "../../data";

export default function ServicesSection() {
  return (
    <section id="services" className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block font-bold">
          SYSTEM DELIVERABLES
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Consulting Models & Solutions
        </h2>
        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
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
              <h3 className="font-display font-bold text-lg text-white mb-2 uppercase tracking-tight">
                {srv.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-350 leading-relaxed font-sans mb-6">
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
                  <p className="text-[11px] text-slate-300 font-sans mt-0.5">
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

              <a
                href="mailto:bagusbatr@gmail.com"
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-brand-accent/10 border border-white/10 hover:border-brand-accent text-slate-300 hover:text-white font-mono text-[11px] tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer font-bold"
              >
                Discuss this solution
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
