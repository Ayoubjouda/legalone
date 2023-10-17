import axios, { InternalAxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const authInterceptor = async (config: InternalAxiosRequestConfig) => {
  const session = await getSession();
  console.log(session);
  if (session) {
    config.headers['Authorization'] = `Bearer ${session.token}`;
  }
  console.log(config);
  return config;
};

api.interceptors.request.use(authInterceptor);

export default api;
