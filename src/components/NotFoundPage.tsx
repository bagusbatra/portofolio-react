interface NotFoundPageProps {
  onBack: () => void;
}

export default function NotFoundPage({ onBack }: NotFoundPageProps) {
  return (
    <div className="min-h-screen bg-brand-dark-base selection:bg-brand-accent selection:text-white relative flex items-center justify-center">
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-brand-accent/5 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-[400px] right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0 animate-drift-glow" />

      <div className="relative z-10 text-center px-8 max-w-lg">
        <span className="font-mono text-[64px] font-black text-brand-accent/30 leading-none tracking-tighter block mb-4">
          404
        </span>
        <h1 className="font-display text-xl font-bold text-white tracking-tight mb-3">
          Page Not Found
        </h1>
        <p className="text-xs text-slate-400 font-sans leading-relaxed mb-8">
          The route you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={onBack}
          className="py-2.5 px-8 rounded-full bg-brand-accent text-white text-[11px] font-mono tracking-widest uppercase font-semibold hover:bg-blue-600 transition-all cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
