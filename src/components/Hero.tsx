import { motion } from 'motion/react';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden section-padding">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold tracking-widest uppercase"
            >
              Available for work
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              I'm <span className="gradient-text">Bagus Batra</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white/80">
              Web Developer <span className="text-primary">&</span> UI Designer
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto lg:mx-0">
              Crafting high-performance, interactive web experiences with modern technologies. Let's build something extraordinary together.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary rounded-full font-bold text-white flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/80 transition-all"
              >
                View Projects <ArrowRight size={20} />
              </motion.button>
            </Link>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-white flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                Contact Me <MousePointer2 size={20} />
              </motion.button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 border-2 border-dashed border-accent/20 rounded-full"
            />

            {/* Profile Image Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-primary/40">
              <img
                src="https://picsum.photos/seed/bagus/800/800"
                alt="Bagus Batra"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  <span className="font-bold text-xl">3+</span>
                </div>
                <div className="text-xs font-bold text-white/70 uppercase tracking-wider">
                  Years <br /> Experience
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
