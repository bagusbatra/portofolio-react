import { NAV_ITEMS } from "../constants";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
  navigateTo: (path: string) => void;
}

export default function Header({ activeSection, scrollToSection, navigateTo }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#0b1222]/80 backdrop-blur-md border-b border-white/10 transition-all py-4">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-14 lg:px-28 xl:px-40 2xl:px-48 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="h-8 w-8 bg-brand-accent rounded-sm flex items-center justify-center font-display font-black text-white text-[11px] tracking-tighter shadow-md">
            BB
          </div>
          <div>
            <p className="font-display font-medium text-[11px] tracking-tight text-white uppercase leading-none opacity-90">
              Bagus Batra
            </p>
            <span className="font-mono text-[8px] tracking-widest text-[#5d6880] uppercase mt-0.5 block">
              Digital Architecture
            </span>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-semibold font-mono">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={
                activeSection === item.id
                  ? "text-brand-accent transition-all cursor-pointer underline underline-offset-8 decoration-2"
                  : "opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-slate-350"
              }
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigateTo("/projects")}
            className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-slate-350"
          >
            Projects
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
  );
}
