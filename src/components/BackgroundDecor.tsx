export default function BackgroundDecor() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-brand-accent/5 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0 animate-drift-glow" />
      <div className="absolute bottom-[800px] left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none z-0 animate-drift-glow-slow" />
    </>
  );
}
