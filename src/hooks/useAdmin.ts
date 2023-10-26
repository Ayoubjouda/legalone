import api from '@/lib/axiosConfig';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'sonner';
import { EditUserSchemaType } from '@/lib/validators/adminFormValidators';
import { AxiosError, isAxiosError } from 'axios';
import { Order } from '@/types/order';

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await api.get(`users`);
  return data;
};

export const useGetUsers = () => {
  return useQuery<User[], Error>('Users', () => fetchUsers());
};

const deleteUser = async (id: string): Promise<void> => {
  const { data } = await api.delete(`users/${id}`);
  return data;
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>(
    'deleteUser',
    (id) => deleteUser(id),
    {
      onSuccess: () => {
        toast.success('User deleted successfully');
        queryClient.invalidateQueries('Users');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

const updateUser = async (
  user: EditUserSchemaType,
  userId: string
): Promise<void> => {
  delete user.confirmPassword;
  if (!user.password) delete user.password;
  console.log(user);
  const { data } = await api.patch(`users/${userId}`, { ...user });
  return data;
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, { user: EditUserSchemaType; userId: string }>(
    'updateUser',
    ({ user, userId }) => updateUser(user, userId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Users');
        toast.success('User Updated successfully');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

const getUserById = async (id: string): Promise<void> => {
  const { data } = await api.get(`users/${id}`);
  return data;
};

export const useGetUserById = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>(
    'updateUser',
    (id) => getUserById(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Users');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

const getFormalities = async (): Promise<FormalitiesResponse[]> => {
  const { data } = await api.get(`formalities`);
  return data;
};

export const useGetFormalities = () => {
  return useQuery<FormalitiesResponse[], Error>('formalities', () =>
    getFormalities()
  );
};
const deleteFormality = async (id: number): Promise<void> => {
  const { data } = await api.delete(`formality/${id}`);
  return data;
};

export const useDeleteFormality = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>(
    'deleteFormality',
    (id) => deleteFormality(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('formalities');
        toast.success('Dossier deleted successfully');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

interface SignUpCredentials {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  password: string;
}

async function addUser(
  signUpcredentials: SignUpCredentials
): Promise<SignUpResponse> {
  const { data } = await api.post('auth/register', signUpcredentials, {
    timeout: 10000,
  });
  return data;
}

interface SignUpResponse {
  token: string;
  refreshToken: string;
  User: currentUser;
}

export function useAddUser() {
  const queryClient = useQueryClient();
  const { mutate: addUserMutation, isLoading } = useMutation<
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
      return addUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        birthDate: birthDate,
        password: password,
      });
    },

    {
      onSuccess() {
        queryClient.invalidateQueries('Users');
        toast.success('User added successfully');
      },
      onError(err: Error | AxiosError) {
        console.log(err);
        if (isAxiosError(err)) {
          toast('error adding User');
        } else {
          toast('error adding User');
        }
      },
    }
  );

  return { addUserMutation, isLoading };
}

const getOrders = async (): Promise<Order[]> => {
  const { data } = await api.get(`order`);
  return data;
};

export const useGetOrders = () => {
  return useQuery<Order[], Error>('Orders', () => getOrders(), {
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

const deleteOrder = async (id: number): Promise<void> => {
  const { data } = await api.delete(`order/${id}`);
  return data;
};

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>(
    'deleteOrder',
    (id) => deleteOrder(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Orders');
        toast.success('Order deleted successfully');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

const getPayments = async (): Promise<Payment[]> => {
  const { data } = await api.get(`payment`);
  return data;
};

export const useGetPayments = () => {
  return useQuery<Payment[], Error>('payment', () => getPayments(), {
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
