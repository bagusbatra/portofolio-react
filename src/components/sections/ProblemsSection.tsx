import { Code2, Workflow, GraduationCap } from "lucide-react";

export default function ProblemsSection() {
  return (
    <section id="problems" className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block font-bold">
          Core Competence Pillars
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Bespoke Digital Consulting & Delivery
        </h2>
        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
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
          <h3 className="font-display font-semibold text-base text-white">
            Creative Full Stack Engineering
          </h3>
          <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
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
          <h3 className="font-display font-semibold text-base text-white">
            Digital Solution Consultation
          </h3>
          <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
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
          <h3 className="font-display font-semibold text-base text-white">
            Technical IT Educator
          </h3>
          <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
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
  );
}
