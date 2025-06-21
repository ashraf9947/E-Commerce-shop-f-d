// src/api/api.js
import axios from 'axios';

// Base URL for the API (can be configured via environment variable or default to local server)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api/';

// Create an axios instance with base URL and headers configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',  // Set default content type as JSON
  },
});

// Interceptor to add the Authorization header with the Bearer token (if available in localStorage)
api.interceptors.request.use(
  (config) => {
    // Check if there are auth tokens stored in localStorage
    const tokens = localStorage.getItem('authTokens');
    if (tokens) {
      const access = JSON.parse(tokens).access;  // Extract the access token
      if (access) {
        config.headers.Authorization = `Bearer ${access}`;  // Add the access token to the request headers
      }
    }
    return config;  // Return the updated config with the Authorization header
  },
  (error) => {
    return Promise.reject(error);  // If an error occurs during the request, reject it
  }
);

// Export the axios instance for use in other parts of the application
export default api;
