import axios, { InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const authInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const accessToken: string | null = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

api.interceptors.request.use(authInterceptor);

export default api;
