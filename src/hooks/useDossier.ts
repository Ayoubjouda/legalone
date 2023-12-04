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
    `formalities?page=${params.page}&limit=10&statusFilter=${params.status}`
  );
  return data;
};

export const useGetFormalities = (params: getFormalityParams) => {
  return useQuery<FormalitiesResponse, Error>(['Getformalities', params], () =>
    getFormalities(params)
  );
};
const deleteFormality = async (id: number): Promise<void> => {
  const { data } = await api.delete(`formalities/${id}`);
  return data;
};

export const useDeleteFormality = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>(
    ['deleteFormality'],
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

const getCurrentUserFormality = async (
  params: getFormalityParams
): Promise<FormalitiesResponse> => {
  const { data } = await api.get(
    `formalities/logged?page=${params.page}&limit=10&statusFilter=${params.status}`
  );
  console.log(data);
  return data;
};
export const useGetCurrentUserFormality = (params: getFormalityParams) => {
  return useQuery<FormalitiesResponse, Error>(
    ['currentUserFormalities', params],
    () => getCurrentUserFormality(params),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

const getCurrentUserDoneFormality = async ({
  status,
  page,
}: getFormalityParams): Promise<FormalitiesResponse> => {
  const { data } = await api.get(
    `formalities/logged?page=${page}&limit=10&statusFilter=${status}`
  );
  return data;
};
export const useGetCurrentUserDoneFormality = (params: getFormalityParams) => {
  return useQuery<FormalitiesResponse, Error>(
    ['currentUserDoneFormalities', params],
    () => getCurrentUserDoneFormality(params),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};
