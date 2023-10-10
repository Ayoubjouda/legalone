'use client';
import { useMutation } from 'react-query';
import api from '@/lib/axiosConfig';
import useAppStore from '@/zustand/store';
import { toast } from 'sonner';
import { AxiosError, isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
async function Login(email: string, password: string): Promise<LoginResponse> {
  const { data } = await api.post(
    'auth/login',
    { email: email, password: password },
    { timeout: 10000 }
  );
  return data;
}

interface LoginResponse {
  token: string;
  refreshToken: string;
  User: currentUser;
}

export function useLogin() {
  const { setToken, setCurrentUser, setRefreshToken } = useAppStore();
  const router = useRouter();
  const { mutate: LoginMutation, isLoading } = useMutation<
    LoginResponse,
    AxiosError,
    { email: string; password: string },
    unknown
  >(({ email, password }) => Login(email, password), {
    onSuccess(data) {
      setCurrentUser(data.User);
      setToken(data.token);
      localStorage.setItem('accessToken', data.token);
      setRefreshToken(data.refreshToken);
      const intendedDestination = localStorage.getItem('intendedDestination');
      console.log(intendedDestination);
      if (intendedDestination) {
        router.push(intendedDestination);
        localStorage.removeItem('intendedDestination');
      } else {
        router.push('/');
      }
      toast('login successful');
    },
    onError(err: Error | AxiosError) {
      if (isAxiosError(err)) {
        toast('Invalid Credentials');
      } else {
        toast('Something went wrong');
      }
    },
  });

  return { LoginMutation, isLoading };
}
