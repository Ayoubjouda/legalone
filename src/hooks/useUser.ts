import api from '@/lib/axiosConfig';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'sonner';
import { EditUserSchemaType } from '@/lib/validators/admin/user';
import { AxiosError, isAxiosError } from 'axios';

interface getUsersParams {
  page?: number;
  status?: string;
  params?: {
    id?: string;
    title?: string;
    value?: string;
  };
}
interface getUserResponse {
  users: User[];
  totalPages: number;
}
const fetchUsers = async (params: getUsersParams): Promise<getUserResponse> => {
  const { data } = await api.get(
    `users?page=${params.page}&limit=10&statusFilter=${params.status}&${params?.params?.title}=${params.params?.value}`
  );
  return data;
};

export const useGetUsers = (params: getUsersParams) => {
  return useQuery<getUserResponse, Error>(['getUsers', params], () =>
    fetchUsers(params)
  );
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
        queryClient.invalidateQueries('getUsers');
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
  if (!user.password) delete user.password;
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
        queryClient.invalidateQueries('getUsers');
        queryClient.invalidateQueries('getClients');

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
        queryClient.invalidateQueries('getUsers');
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
        queryClient.invalidateQueries('getUsers');
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

type weeklyClient = {
  users: number;
};

const getWeeklyClient = async (): Promise<weeklyClient> => {
  const { data } = await api.get(`users/new-weekly`);
  return data;
};

export const useGetWeeklyClient = () => {
  return useQuery<weeklyClient, Error>('weeklyClient', () => getWeeklyClient());
};
interface getClientsParams {
  page?: number;
  status?: string;
}
interface getClientsResponse {
  users: User[];
  totalPages: number;
}
const getClients = async (
  params: getClientsParams
): Promise<getClientsResponse> => {
  const { data } = await api.get(
    `users/client?page=${params.page}&limit=10&statusFilter=${params.status}`
  );
  return data;
};

export const useGetClients = (params: getClientsParams) => {
  return useQuery<getClientsResponse, Error>(['getClients', params], () =>
    getClients(params)
  );
};

type totalClient = {
  users: number;
};
const getTotalClients = async (): Promise<totalClient> => {
  const { data } = await api.get(`users/total`);
  return data;
};

export const useGetTotalClients = () => {
  return useQuery<totalClient, Error>('totalClients', () => getTotalClients());
};

interface UpdateProfileType {
  firstName: string;
  lastName: string;
  password: string;
}

const updateProfile = async (user: UpdateProfileType): Promise<void> => {
  const { data } = await api.patch(`users/profile`, { ...user });
  return data;
};

export const useUpdateProfile = () => {
  return useMutation<void, Error, UpdateProfileType>(
    'updateUser',
    (user) => updateProfile(user),
    {
      onSuccess: () => {
        toast.success('Profile Updated successfully');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};
