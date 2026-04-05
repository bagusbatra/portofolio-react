import { motion } from 'motion/react';
import SectionTitle from '../components/SectionTitle';
import { User, Code, Brain, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="section-padding min-h-screen">
      <div className="max-w-5xl mx-auto">

        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about my journey, mindset, and approach in building modern web solutions." 
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10"
          >
            <img 
              src="/images/img_bg_2.jpg" 
              alt="About Me" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* RIGHT - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-white/70 leading-relaxed"
          >
            <p>
              Hello! I'm <span className="text-white font-bold">Bagus Batra</span>, a junior web developer who focuses on building modern, scalable, and well-structured web applications. I combine solid technical skills with AI-assisted workflows to deliver efficient and high-quality results without compromising craftsmanship.
            </p>

            <p>
              My journey started with a deep curiosity about how the web works, which gradually evolved into a strong commitment to continuous learning and professional growth. I stay adaptive to new technologies while maintaining clean coding standards and best practices.
            </p>

            <p>
              I value efficiency, clarity, and reliability in every project I handle. With a strong attention to detail and a structured workflow, I aim to deliver solutions that are not only functional but also maintainable and delivered on time.
            </p>
          </motion.div>

        </div>

        {/* HIGHLIGHT SECTION */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
            <User className="mx-auto mb-4 text-primary" size={28} />
            <h4 className="font-bold text-white mb-2">Professional Mindset</h4>
            <p className="text-white/50 text-sm">Focused on quality, consistency, and responsibility.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
            <Code className="mx-auto mb-4 text-primary" size={28} />
            <h4 className="font-bold text-white mb-2">Clean Code</h4>
            <p className="text-white/50 text-sm">Writing maintainable and scalable code structures.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
            <Brain className="mx-auto mb-4 text-primary" size={28} />
            <h4 className="font-bold text-white mb-2">AI-Assisted</h4>
            <p className="text-white/50 text-sm">Enhancing productivity with smart AI integration.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
            <Target className="mx-auto mb-4 text-primary" size={28} />
            <h4 className="font-bold text-white mb-2">On-Time Delivery</h4>
            <p className="text-white/50 text-sm">Efficient workflow with reliable deadlines.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;