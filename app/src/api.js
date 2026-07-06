// src/api.js
import axios from 'axios';

const REQUEST_TIMEOUT = 30000; // Para evitar peticiones colgadas

const api = axios.create({
  //baseURL: 'http://localhost:8080',
  baseURL: `${import.meta.env.VITE_API_URL}`,
  timeout: REQUEST_TIMEOUT,
  withCredentials: true,
});

export default api;