import { useMutation } from 'react-query';
import api from '@/lib/axiosConfig';
import { useToast } from '@/components/ui/use-toast';

async function Login(
  username: string,
  password: string
): Promise<LoginResponse> {
  const { data } = await api.post(
    'auth/signin',
    { username, password },
    { timeout: 4000 }
  );

  return data;
}

interface LoginResponse {
  access_token: string;
}

export function useLogin() {
  const { toast } = useToast();
  const { mutate: LoginMutation, isLoading } = useMutation<
    LoginResponse,
    unknown,
    { username: string; password: string },
    unknown
  >(({ username, password }) => Login(username, password), {
    onError() {
      toast({
        title: 'Login Error',
        description: 'Network Error',
      });
    },
  });

  return { LoginMutation, isLoading };
}
