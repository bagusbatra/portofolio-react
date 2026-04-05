import axios from 'axios';

const API_URL = '/api'; // In production, this would be your PHP backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mocking API for preview purposes since we can't run PHP/MySQL here easily
// In a real scenario, you would remove the interceptors and use the actual PHP endpoints
api.interceptors.request.use((config) => {
  // Add auth token if available
  const user = localStorage.getItem('user');
  if (user) {
    const { token } = JSON.parse(user);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
