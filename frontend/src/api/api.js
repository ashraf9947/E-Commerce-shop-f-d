import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  // Получаем токен из localStorage
  const tokens = localStorage.getItem('authTokens');
  if (tokens) {
    try {
      const access = JSON.parse(tokens).access;
      if (access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
    } catch (e) {
      // ignore
    }
  }
  return config;
});

export default api;