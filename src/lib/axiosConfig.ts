import axios, { InternalAxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const authInterceptor = async (config: InternalAxiosRequestConfig) => {
  const session = await getSession();
  if (session) {
    config.headers.common = {
      Authorization: `Bearer ${session.token}`,
    };
  }
  return config;
};

api.interceptors.request.use(authInterceptor);

export default api;
