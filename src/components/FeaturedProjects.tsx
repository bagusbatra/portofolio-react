import { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectService } from '../services/dataService';

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await projectService.getAll();
      setProjects(data.slice(0, 3)); // Show top 3
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionTitle title="Featured Projects" subtitle="A selection of my recent work and personal experiments." align="left" />
          <Link to="/projects">
            <motion.button
              whileHover={{ x: 5 }}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-bold text-white flex items-center gap-2 hover:bg-white/10 transition-all mb-16 md:mb-0"
            >
              All Projects <ArrowRight size={20} />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
