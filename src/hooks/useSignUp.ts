import { useMutation } from 'react-query';
import api from '@/lib/axiosConfig';
import { useToast } from '@/components/ui/use-toast';
import useAppStore from '@/zustand/store';
import { AxiosError, isAxiosError } from 'axios';

interface SignUpCredentials {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    password: string;
  };
}

async function signUp(
  signUpcredentials: SignUpCredentials
): Promise<SignUpResponse> {
  const { data } = await api.post('users/register', signUpcredentials, {
    timeout: 10000,
  });
  return data;
}

interface SignUpResponse {
  token: string;
  refreshToken: string;
  User: currentUser;
}

export function useSignUp() {
  const { toast } = useToast();
  const { setToken, setCurrentUser, setRefreshToken } = useAppStore();

  const { mutate: signUpMutation, isLoading } = useMutation<
    SignUpResponse,
    AxiosError,
    {
      firstName: string;
      lastName: string;
      email: string;
      birthDate: string;
      password: string;
      confirmPassword: string;
    },
    unknown
  >(
    ({ firstName, lastName, email, birthDate, password }) => {
      return signUp({
        user: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          birthDate: birthDate,
          password: password,
        },
      });
    },

    {
      onSuccess(data: SignUpResponse) {
        setCurrentUser(data.User);
        setToken(data.token);
        setRefreshToken(data.refreshToken);
        toast({
          title: 'SignUp Success',
          description: `Welcome ${data.User.firstName}`,
        });
      },
      onError(err: Error | AxiosError) {
        console.log(err);
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
    }
  );

  return { signUpMutation, isLoading };
}
