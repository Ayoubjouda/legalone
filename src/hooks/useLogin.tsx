import { useMutation } from 'react-query';
import api from '@/lib/axiosConfig';
import { useToast } from '@/components/ui/use-toast';
import useAppStore from '@/zustand/store';
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
    unknown,
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
    onError(err) {
      toast({
        title: 'Login Error',
        description: `${err}`,
      });
    },
  });

  return { LoginMutation, isLoading };
}
