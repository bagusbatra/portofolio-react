import { Check } from "lucide-react";
import { EXPERIENCE } from "../../data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest block">
            TIMEFRAME STORY
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Engineering Value Over Time
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
            I do not fill spacing with long lists of standard duties. This is a chronological record of technical transformations, developer educations, and system design optimizations.
          </p>

          <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2 relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />
            <span className="font-mono text-[10px] text-[#5d6880] block uppercase font-bold">TOTAL PORTFOLIO STAT:</span>
            <p className="font-display text-xl font-bold text-white uppercase tracking-tight">400+ Engineers Trained</p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Bagus has directly mentored a generation of regional software developers into companies and districts in Indonesia.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 space-y-4 hover:border-brand-accent/30 transition-all duration-300 relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/15 pb-4">
                <div>
                  <span className="font-mono text-[10px] text-white/60 bg-white/10 px-2.5 py-1 rounded-md uppercase tracking-wider font-semibold">
                    {exp.period}
                  </span>
                  <h3 className="font-display font-bold text-base text-white mt-2 uppercase tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="font-sans text-[11px] text-brand-accent font-semibold">
                    {exp.organization}
                  </p>
                </div>

                <div className="text-right">
                  <span className="font-mono text-[10px] text-brand-accent font-semibold bg-brand-accent/10 border border-brand-accent/25 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                    {exp.metric}
                  </span>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-350 leading-relaxed font-sans">
                {exp.description}
              </p>

              <div className="pt-3">
                <span className="text-[10px] font-mono text-[#5d6880] uppercase tracking-wider block mb-2">
                  Key Transformations & Outcomes:
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.highlights.map((high, hIdx) => (
                    <li key={hIdx} className="text-[11px] text-slate-300 font-sans flex items-start gap-2">
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
  );
}
