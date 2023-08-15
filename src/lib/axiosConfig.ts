import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3030',
});

export default api;
