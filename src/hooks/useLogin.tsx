'use client';
import { useMutation } from 'react-query';
import api from '@/lib/axiosConfig';
import { useToast } from '@/components/ui/use-toast';
import useAppStore from '@/zustand/store';
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
  const { toast } = useToast();
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
      toast({
        title: 'Login Success',
        description: `Welcome ${data.User.firstName}`,
      });
    },
    onError(err: Error | AxiosError) {
      if (isAxiosError(err)) {
        toast({
          title: 'Login Error',
          description: `${err.response?.data?.message}`,
        });
      } else {
        toast({
          title: 'Unkown Error',
          description: `${err.message}`,
        });
      }
    },
  });

  return { LoginMutation, isLoading };
}
