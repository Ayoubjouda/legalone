import { useMutation } from 'react-query';
import api from '@/lib/axiosConfig';
import { useToast } from '@/components/ui/use-toast';
import useAppStore from '@/zustand/store';
import { AxiosError, isAxiosError } from 'axios';
async function Login(email: string, password: string): Promise<LoginResponse> {
  const { data } = await api.post(
    'users/login',
    { email: email, password: password },
    { timeout: 4000 }
  );
  return data;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  User: currentUser;
}

export function useLogin() {
  const { toast } = useToast();
  const { setToken, setCurrentUser, setRefreshToken } = useAppStore();
  const { mutate: LoginMutation, isLoading } = useMutation<
    LoginResponse,
    AxiosError,
    { email: string; password: string },
    unknown
  >(({ email, password }) => Login(email, password), {
    onSuccess(data) {
      setCurrentUser(data.User);
      setToken(data.accessToken);
      setRefreshToken(data.refreshToken);
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
