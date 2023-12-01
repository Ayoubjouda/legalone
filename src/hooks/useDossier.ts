import api from '@/lib/axiosConfig';
import { FormalitiesResponse } from '@/types/order';
import { useSearchParams } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'sonner';

interface getFormalityParams {
  page?: number;
  status?: string;
}

const getFormalities = async (
  params: getFormalityParams
): Promise<FormalitiesResponse> => {
  const { data } = await api.get(
    `formalities?page=${params.page}&limit=20&statusFilter=${params.status}`
  );
  return data;
};

export const useGetFormalities = (params: getFormalityParams) => {
  return useQuery<FormalitiesResponse, Error>(['Getformalities', params], () =>
    getFormalities(params)
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
        queryClient.invalidateQueries('Getformalities');
        toast.success('Dossier deleted successfully');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

const getCurrentUserFormality = async (): Promise<FormalitiesResponse> => {
  const { data } = await api.get(`formalities/logged`);
  return data;
};
export const useGetCurrentUserFormality = () => {
  return useQuery<FormalitiesResponse, Error>(
    'currentUserFormalities',
    () => getCurrentUserFormality(),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

const getCurrentUserDoneFormality = async (): Promise<FormalitiesResponse> => {
  const { data } = await api.get(`formalities/done`);
  return data;
};
export const useGetCurrentUserDoneFormality = () => {
  return useQuery<FormalitiesResponse, Error>(
    'currentUserDoneFormalities',
    () => getCurrentUserDoneFormality(),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};
