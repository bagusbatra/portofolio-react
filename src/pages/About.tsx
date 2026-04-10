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

        {/* CV SECTION */}
        <div className="mt-16 bg-white text-black rounded-2xl p-10">

          {/* HEADER */}
          <div className="flex items-center gap-6 mb-10">
            <img 
              src="/images/about.png" 
              className="w-24 h-24 rounded-full object-cover border"
            />

            <div>
              <h2 className="text-2xl font-bold">Bagus Batra</h2>
              <p className="text-gray-600 font-medium">Web Developer</p>
              <div className="text-sm text-gray-500 mt-1 flex gap-4">
                <span>bagusbatr@email.com</span>
                <span>Indonesia</span>
              </div>
            </div>
          </div>

          <hr className="mb-10" />

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT SIDE */}
            <div className="space-y-10">

              {/* SKILLS */}
              <div>
                <h3 className="font-bold tracking-wide mb-4">SKILLS</h3>

                {[
                  { name: "HTML & CSS", value: 95 },
                  { name: "JavaScript", value: 90 },
                  { name: "React", value: 85 },
                  { name: "PHP & MySQL", value: 88 },
                  { name: "Tailwind CSS", value: 92 },
                  { name: "MS Office", value: 95 },
                  { name: "Canva Design", value: 94 },
                ].map((skill, i) => (
                  <div key={i} className="mb-3">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                      <div 
                        className="h-2 bg-black rounded-full"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* SOCIAL MEDIA */}
              <div>
                <h3 className="font-bold tracking-wide mb-4">SOCIAL MEDIA</h3>

                <div className="space-y-3 text-sm">

                  <a 
                    href="https://github.com/username" 
                    target="_blank"
                    className="flex items-center justify-between hover:text-black transition"
                  >
                    <span>GitHub</span>
                    <span className="text-gray-500">github.com/bagusbatra</span>
                  </a>

                  <a 
                    href="https://linkedin.com/in/username" 
                    target="_blank"
                    className="flex items-center justify-between hover:text-black transition"
                  >
                    <span>LinkedIn</span>
                    <span className="text-gray-500">linkedin.com/in/bagusbatra</span>
                  </a>

                  <a 
                    href="https://instagram.com/username" 
                    target="_blank"
                    className="flex items-center justify-between hover:text-black transition"
                  >
                    <span>Instagram</span>
                    <span className="text-gray-500">@bagusbatra</span>
                  </a>

                  <a 
                    href="https://yourportfolio.com" 
                    target="_blank"
                    className="flex items-center justify-between hover:text-black transition"
                  >
                    <span>Portfolio</span>
                    <span className="text-gray-500">bagusbatra.com</span>
                  </a>

                </div>
              </div>

            </div>


            {/* RIGHT SIDE */}
            <div className="md:col-span-2 space-y-10">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap absolute -right-10 -bottom-10 w-64 h-64 text-white/5 -rotate-12" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg> */}

              {/* EDUCATION */}
              <div>
                <h3 className="font-bold tracking-wide mb-4">EDUCATION</h3>

                <div>
                  <div className="flex justify-between">
                    <p className="font-semibold">Politeknik Negeri Madiun</p>
                    <span className="text-sm text-gray-500">2020 - 2024</span>
                  </div>
                  <p className="text-sm text-gray-600"><b>Teknologi Informasi</b> - GPA 3.48/4.00</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Graduate of Information Technology with a strong foundation in web development. <br />
                    Focused on web development, system design, and software engineering. <br />
                    Committed to continuous learning and professional growth in technology.
                  </p>
                </div>
              </div>

              {/* EXPERIENCE */}
              <div>
                <h3 className="font-bold tracking-wide mb-4">EXPERIENCE</h3>

                <div className="mb-6">
                  <div className="flex justify-between">
                    <p className="font-semibold">Freelance Web Developer</p>
                    <span className="text-sm text-gray-500">2026 - Present</span>
                  </div>
                  <p className="text-sm text-gray-600">Self-employed</p>
                  <ul className="text-sm text-gray-500 mt-2 list-disc ml-5">
                    <li>Developed modern responsive websites</li>
                    <li>Built scalable CRUD systems with PHP & MySQL</li>
                    <li>Integrated Firebase for authentication & realtime features</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between">
                    <p className="font-semibold">Web Dev & Coding Python Mentor</p>
                    <span className="text-sm text-gray-500">2025 - Present</span>
                  </div>
                  <p className="text-sm text-gray-600">Elips Academy Surabaya</p>
                  <ul className="text-sm text-gray-500 mt-2 list-disc ml-5">
                    <li>Develop and deliver web and Python learning materials</li>
                    <li>Guide students in building real-world projects</li>
                    <li>Evaluate progress and improve learning outcomes</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between">
                    <p className="font-semibold">Intern Web Developer</p>
                    <span className="text-sm text-gray-500">2022</span>
                  </div>
                  <p className="text-sm text-gray-600">in PT. Otak Kanan, Graha Pena Surabaya</p>
                  <ul className="text-sm text-gray-500 mt-2 list-disc ml-5">
                    <li>Worked on frontend UI improvements</li>
                    <li>Collaborated with backend team</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;