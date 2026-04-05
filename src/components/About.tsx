import { motion } from 'motion/react';
import { Download, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

const About = () => {
  const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PHP', 'MySQL', 'Framer Motion', 'Git'];
  const tools = ['VS Code', 'Figma', 'Postman', 'Docker', 'Vercel', 'Netlify'];

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
                Hello! I'm <span className="text-white font-bold">Bagus Batra</span>, a dedicated Web Developer based in Indonesia. I specialize in building robust and scalable web applications that deliver exceptional user experiences.
              </p>
              <p>
                My journey in tech started with a curiosity for how things work on the internet, which led me to pursue a degree in Computer Science. Since then, I've been constantly learning and evolving with the ever-changing landscape of web technologies.
              </p>
              <p>
                I thrive on solving complex problems and turning creative ideas into functional reality. Whether it's a sleek frontend interface or a complex backend architecture, I approach every project with the same level of enthusiasm and attention to detail.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
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
              <div className="space-y-4">
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-white flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <Download size={20} /> Download CV
            </motion.button>
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
                  <span className="text-primary text-sm font-bold">2023 - Present</span>
                  <h5 className="text-lg font-bold">Senior Web Developer</h5>
                  <p className="text-white/50 text-sm">Tech Solutions Inc.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-white/10 space-y-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white/20 rounded-full" />
                  <span className="text-white/40 text-sm font-bold">2021 - 2023</span>
                  <h5 className="text-lg font-bold">Frontend Developer</h5>
                  <p className="text-white/50 text-sm">Creative Agency</p>
                </div>
                <div className="relative pl-8 border-l-2 border-white/10 space-y-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white/20 rounded-full" />
                  <span className="text-white/40 text-sm font-bold">2019 - 2021</span>
                  <h5 className="text-lg font-bold">Junior Developer</h5>
                  <p className="text-white/50 text-sm">Startup Hub</p>
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
