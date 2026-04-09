import api from './api';

export const projectService = {
  getAll: async () => {
    // For preview, we'll return mock data if the API fails
    try {
      const response = await api.get('/projects');
      return response.data;
    } catch (error) {
      return [
        {
          id: 1,
          title: 'Elips Academy',
          description: 'A modern web platform developed for Elips Academy, focused on delivering structured learning experiences with a clean interface and efficient system design.',
          thumbnail: 'images/elips.png',
          category: 'Web Development',
          tech_stack: 'Laravel, HTML, CSS, JS, MySQL',
          year: '2026',
          client: 'Company',
          demo_link: 'https://elipsacademy.com/',
          github_link: 'https://github.com/bagusbatra/elipsacademy',
        },
        {
          id: 2,
          title: 'Portfolio Website',
          description: 'A modern portfolio website built with React and Framer Motion.',
          thumbnail: 'images/porto.png',
          category: 'Web Development',
          tech_stack: 'React, Tailwind CSS, Framer Motion',
          year: '2026',
          client: 'Personal Project',
          demo_link: '#',
          github_link: 'https://github.com/bagusbatra/portofolio-react',
        }
      ];
    }
  },
  getById: async (id: string) => {
    try {
      const response = await api.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      const projects = await projectService.getAll();
      return projects.find((p: any) => p.id.toString() === id);
    }
  }
};

export const profileService = {
  get: async () => {
    try {
      const response = await api.get('/profile');
      return response.data;
    } catch (error) {
      return {
        name: 'Bagus Batra',
        description: 'I am a passionate Web Developer with a strong focus on building modern, interactive, and responsive web applications.',
        skills: 'React, TypeScript, Tailwind CSS, Node.js, PHP, MySQL',
        tools: 'VS Code, Git, Figma, Postman',
        experience: '3+ Years of experience in Web Development',
        cv_file: '#'
      };
    }
  }
};

export const academyService = {
  getAll: async () => {
    try {
      const response = await api.get('/academy');
      return response.data;
    } catch (error) {
      return [
        {
          id: 1,
          school: 'Universitas Indonesia',
          major: 'Teknik Informatika',
          year: '2019 - 2023',
          gpa: '3.85',
          certificate: '#'
        }
      ];
    }
  }
};

export const contactService = {
  sendMessage: async (data: any) => {
    return api.post('/contact', data);
  }
};
