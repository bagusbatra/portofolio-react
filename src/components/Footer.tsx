import { Github, Linkedin, Mail, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-white/5 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold gradient-text">Bagus Batra</h3>
          <p className="text-white/50 max-w-xs">
            Building modern, interactive, and high-performance web applications with passion and precision.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-white/50">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="/projects" className="hover:text-primary transition-colors">Projects</a></li>
            <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
            <li><a href="/login" className="hover:text-primary transition-colors">Admin Login</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-white/50 flex items-center gap-2 pt-2">
            <Mail size={16} /> contact@bagusbatra.com
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-white/30 text-sm">
        <p>&copy; {new Date().getFullYear()} Bagus Batra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
