import { motion } from 'motion/react';
import { Download, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

const About = () => {
  const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MySQL', 'HTML','CSS','Javascript', 'PHP','MySQL', 'Git', 'Python'];
  const tools = ['VS Code', 'Figma', 'Postman', 'Canva', 'Capcut', 'MS Office'];

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About Me" subtitle="A brief look into my professional journey and technical expertise." align="left" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-white/70 text-lg leading-relaxed"
            >
              <p>
                Hello! I'm <span className="text-white font-bold">Bagus Batra</span>, a junior web developer from Indonesia who is passionate about building modern, efficient, and well-structured web applications. I focus on delivering high-quality results with a strong commitment to performance, clarity, and user experience.
              </p>

              <p>
                I continuously refine my skills by combining solid development fundamentals with AI-assisted workflows, allowing me to work more efficiently while maintaining full control over the logic, structure, and quality of every project I build.
              </p>

              <p>
                I value precision, clean architecture, and timely delivery. Every project I take on is approached with a problem-solving mindset, ensuring that solutions are not only functional, but also optimized, scalable, and professionally executed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-4 md:col-span-2">
                <h4 className="text-xl font-bold flex items-center gap-2">
                  <Award className="text-primary" size={24} /> Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm hover:border-primary/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 md:col-span-1">
                <h4 className="text-xl font-bold flex items-center gap-2">
                  <Briefcase className="text-accent" size={24} /> Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm hover:border-accent/50 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-white flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <Download size={20} /> Download CV
            </motion.button> */}
          </div>

          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl space-y-8"
            >
              <h4 className="text-2xl font-bold">Experience</h4>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-primary/30 space-y-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50" />
                  <span className="text-primary text-sm font-bold">Jan 2025 - Present</span>
                  <h5 className="text-lg font-bold">Web Dev & Coding Python Mentor</h5>
                  <p className="text-white/50 text-sm">Elips Academy Surabaya</p>
                </div>
                <div className="relative pl-8 border-l-2 border-white/10 space-y-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white/20 rounded-full" />
                  <span className="text-white/40 text-sm font-bold">Apr 2026 - Present</span>
                  <h5 className="text-lg font-bold">Junior Web Developer</h5>
                  <p className="text-white/50 text-sm">Freelance</p>
                </div>
                <div className="relative pl-8 border-l-2 border-white/10 space-y-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white/20 rounded-full" />
                  <span className="text-white/40 text-sm font-bold">Jun 2022 - Nov 2022</span>
                  <h5 className="text-lg font-bold">Full Stack Developer Intern</h5>
                  <p className="text-white/50 text-sm">PT. Otak Kanan, Graha Pena Surabaya</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
