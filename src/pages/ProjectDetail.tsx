import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, Code2 } from 'lucide-react';
import { projectService } from '../services/dataService';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (id) {
        const data = await projectService.getById(id);
        setProject(data);
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-bold">Project not found</h2>
        <Link to="/projects" className="text-primary hover:underline">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={20} /> Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Image & Basic Info */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
                <div className="flex flex-wrap gap-4">
                  {project.tech_stack.split(',').map((tech: string) => (
                    <span key={tech} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl text-primary text-sm font-bold">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white">Project Overview</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  {project.description}
                </p>
                <p className="text-white/60 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-8 rounded-3xl space-y-8 sticky top-32"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Year</span>
                    <p className="font-bold">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-accent">
                    <User size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Client</span>
                    <p className="font-bold">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-purple-500">
                    <Tag size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Category</span>
                    <p className="font-bold">{project.category}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <a 
                  href={project.demo_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-primary rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/80 transition-all"
                >
                  Live Demo <ExternalLink size={20} />
                </a>
                <a 
                  href={project.github_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  GitHub Repository <Github size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
