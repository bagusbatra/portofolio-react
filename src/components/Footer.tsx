export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 bg-[#0b1222] mt-16 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-14 lg:px-28 xl:px-40 2xl:px-48 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-bold">
            BAGUS BATRA PORTFOLIO PLATFORM • EST. 2026
          </span>
        </div>

        <div className="flex items-center gap-6 text-[11px] text-slate-500">
          <span className="font-mono text-[9px] text-[#5d6880] uppercase tracking-wider font-bold">
            COORDINATES: CENTRAL INDONESIA • GMT+7
          </span>
        </div>
      </div>
    </footer>
  );
}
