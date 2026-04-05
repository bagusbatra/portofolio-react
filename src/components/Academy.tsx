import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionTitle from './SectionTitle';
import { GraduationCap, Calendar, MapPin, Award, ChevronDown } from 'lucide-react';

const Academy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const education = [
    {
      school: 'Universitas Indonesia',
      major: 'Teknik Informatika',
      year: '2019 - 2023',
      gpa: '3.85 / 4.00',
      desc: 'Focused on software engineering, algorithms, and web technologies. Graduated with Cum Laude honors.',
      cert: 'Certified Web Developer'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="academy" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Education"
          subtitle="My academic background and certifications."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-3xl overflow-hidden group cursor-pointer"
              >
                {/* HEADER (selalu tampil) */}
                <div
                  onClick={() => toggleAccordion(index)}
                  className="p-6 md:p-8 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {item.school}
                    </h3>
                    <p className="text-white/60">{item.major}</p>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </div>

                {/* CONTENT (accordion) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 md:px-8 pb-8"
                    >
                      <div className="relative pt-6 border-t border-white/10">
                        {/* Background Icon */}
                        <GraduationCap className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 -rotate-12" />

                        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                          <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shrink-0">
                            <GraduationCap size={40} />
                          </div>

                          <div className="space-y-6">
                            <div className="space-y-2">
                              <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-primary uppercase tracking-widest">
                                <span className="flex items-center gap-1">
                                  <Calendar size={14} /> {item.year}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin size={14} /> Depok, Indonesia
                                </span>
                              </div>
                              <h4 className="text-xl text-white/80 font-semibold">
                                {item.major}
                              </h4>
                            </div>

                            <p className="text-white/50 leading-relaxed text-lg">
                              {item.desc}
                            </p>

                            <div className="flex flex-wrap gap-6">
                              <div className="space-y-1">
                                <span className="text-xs font-bold text-white/30 uppercase tracking-wider">
                                  GPA
                                </span>
                                <div className="text-xl font-bold text-accent">
                                  {item.gpa}
                                </div>
                              </div>

                              <div className="space-y-1">
                                <span className="text-xs font-bold text-white/30 uppercase tracking-wider">
                                  Certification
                                </span>
                                <div className="flex items-center gap-2 text-xl font-bold text-white/80">
                                  <Award className="text-primary" size={20} />
                                  {item.cert}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Academy;