import { useMutation } from 'react-query';
import api from '@/lib/axiosConfig';
import { useToast } from '@/components/ui/use-toast';
import useAppStore from '@/zustand/store';

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
  console.log(signUpcredentials);
  const { data } = await api
    .post('users/register', signUpcredentials, {
      timeout: 4000,
    })
    .then((res) => res.data);

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
    unknown,
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
      onSuccess(data) {
        setCurrentUser(data.User);
        setToken(data.token);
        setRefreshToken(data.refreshToken);
        toast({
          title: 'SignUp Success',
          description: `Welcome ${data.User.firstName}`,
        });
      },
      onError() {
        toast({
          title: 'Login Error',
          description: 'Network Error',
        });
      },
    }
  );

  return { signUpMutation, isLoading };
}
