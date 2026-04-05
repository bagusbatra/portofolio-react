import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock API Routes for Preview
  const mockProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js.',
      thumbnail: 'https://picsum.photos/seed/ecommerce/800/600',
      category: 'Web Development',
      tech_stack: 'React, Node.js, MongoDB',
      year: '2023',
      client: 'Personal Project',
      demo_link: '#',
      github_link: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Framer Motion.',
      thumbnail: 'https://picsum.photos/seed/portfolio/800/600',
      category: 'Web Development',
      tech_stack: 'React, Tailwind CSS, Framer Motion',
      year: '2024',
      client: 'Personal Project',
      demo_link: '#',
      github_link: '#',
    }
  ];

  app.get('/api/projects', (req, res) => {
    res.json(mockProjects);
  });

  app.get('/api/projects/:id', (req, res) => {
    const project = mockProjects.find(p => p.id === parseInt(req.params.id));
    if (project) res.json(project);
    else res.status(404).json({ message: 'Project not found' });
  });

  app.get('/api/profile', (req, res) => {
    res.json({
      name: 'Bagus Batra',
      description: 'I am a passionate Web Developer with a strong focus on building modern, interactive, and responsive web applications.',
      skills: 'React, TypeScript, Tailwind CSS, Node.js, PHP, MySQL',
      tools: 'VS Code, Git, Figma, Postman',
      experience: '3+ Years of experience in Web Development',
      cv_file: '#'
    });
  });

  app.get('/api/academy', (req, res) => {
    res.json([
      {
        id: 1,
        school: 'Universitas Indonesia',
        major: 'Teknik Informatika',
        year: '2019 - 2023',
        gpa: '3.85',
        certificate: '#'
      }
    ]);
  });

  app.post('/api/contact', (req, res) => {
    res.status(201).json({ message: 'Message sent successfully' });
  });

  app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@bagusbatra.com' && password === 'password') {
      res.json({
        message: 'Login successful.',
        user: { id: 1, name: 'Bagus Batra', email, role: 'admin' },
        token: 'mock-jwt-token'
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
