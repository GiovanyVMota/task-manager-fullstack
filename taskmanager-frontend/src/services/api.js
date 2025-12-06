import axios from "axios";

const api = axios.create({
  baseURL: 'https://task-manager-backend-sog1.onrender.com'
});

// adiciona token nas requisições automaticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
