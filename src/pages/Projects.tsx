import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'motion/react';
import { Search, Filter, LayoutGrid, List } from 'lucide-react';
import { projectService } from '../services/dataService';

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const data = await projectService.getAll();
      setProjects(data);
      setFilteredProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    let result = projects;
    if (searchTerm) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tech_stack.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    setFilteredProjects(result);
  }, [searchTerm, selectedCategory, projects]);

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  return (
    <div className="section-padding min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="My Projects" 
          subtitle="A comprehensive collection of my work, ranging from web applications to creative experiments." 
        />

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
            <input
              type="text"
              placeholder="Search projects or tech stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary transition-all"
            />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                  selectedCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-white/5 border border-white/10 text-white/50 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 bg-white/5 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/30 text-xl">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
