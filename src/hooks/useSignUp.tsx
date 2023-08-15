import { useMutation } from 'react-query';
import api from '@/lib/axiosConfig';
import { useToast } from '@/components/ui/use-toast';

async function signUp(
  username: string,
  email: string,
  password: string
): Promise<SignUpResponse> {
  const { data } = await api.post(
    'auth/signup',
    { username, email, password },
    { timeout: 4000 }
  );

  return data;
}

interface SignUpResponse {
  access_token: string;
}

export function useSignUp() {
  const { toast } = useToast();

  const { mutate: signUpMutation, isLoading } = useMutation<
    SignUpResponse,
    unknown,
    { email: string; password: string; username: string },
    unknown
  >(({ username, email, password }) => signUp(username, email, password), {
    onError() {
      toast({
        title: 'Login Error',
        description: 'Network Error',
      });
    },
  });

  return { signUpMutation, isLoading };
}
