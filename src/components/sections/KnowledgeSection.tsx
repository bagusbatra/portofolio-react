import { ArrowUpRight, BookOpen } from "lucide-react";
import { ARTICLES } from "../../data";

interface KnowledgeSectionProps {
  scrollToSection: (id: string) => void;
}

export default function KnowledgeSection({ scrollToSection }: KnowledgeSectionProps) {
  return (
    <section id="knowledge" className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.2em] block font-bold">
            PRACTICAL INSIGHTS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Articles & Technical Tutorials
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-400 max-w-2xl font-sans">
            As a technical educator, I believe in publishing engineering decisions. These brief resources discuss resolving database lockups, syncing corporate adapters, and regional software setups.
          </p>
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
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

              <h3 className="font-display font-medium text-sm text-white group-hover:text-brand-accent transition-colors mb-2 leading-snug">
                {art.title}
              </h3>

              <p className="text-[11px] text-slate-400 leading-relaxed font-sans mb-6 line-clamp-3">
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
  );
}
