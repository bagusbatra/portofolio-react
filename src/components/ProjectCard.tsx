import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  tech_stack: string;
  demo_link?: string;
  github_link?: string;
}

const ProjectCard = ({ id, title, description, thumbnail, category, tech_stack, demo_link, github_link }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden group"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex space-x-3">
            {demo_link && (
              <a href={demo_link} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-full text-white hover:bg-primary/80 transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
            {github_link && (
              <a href={github_link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors">
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-white/60 text-sm line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech_stack.split(',').map((tech) => (
            <span key={tech} className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded border border-white/10 text-white/70">
              {tech.trim()}
            </span>
          ))}
        </div>
        <Link
          to={`/projects/${id}`}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
        >
          View Details <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
