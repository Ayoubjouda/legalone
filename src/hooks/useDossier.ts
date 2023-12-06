import api from '@/lib/axiosConfig';
import { FormalitiesResponse } from '@/types/order';
import { useSearchParams } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'sonner';

interface getFormalityParams {
  page?: number;
  status?: string;
  params?: {
    id?: string;
    title?: string;
    value?: string;
  };
}

const getFormalities = async (
  params: getFormalityParams
): Promise<FormalitiesResponse> => {
  const { data } = await api.get(
    `formalities?page=${params.page}&limit=10&statusFilter=${params.status}&${params?.params?.title}=${params.params?.value}`
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
    `formalities/logged?page=${params.page}&limit=10&statusFilter=${params.status}&${params.params?.title}=${params.params?.value}`
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
  params,
}: getFormalityParams): Promise<FormalitiesResponse> => {
  const { data } = await api.get(
    `formalities/logged?page=${page}&limit=10&statusFilter=${status}&${params?.title}=${params?.value}`
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

interface TotalFormalityKPIResponse {
  total: number;
}

const getTotalFormalities = async (): Promise<TotalFormalityKPIResponse> => {
  const { data } = await api.get(`formalities/total-count`);
  return data;
};

export const useGetTotalFormalities = () => {
  return useQuery<TotalFormalityKPIResponse, Error>('totalFormalities', () =>
    getTotalFormalities()
  );
};

const getTotalDoneFormalities =
  async (): Promise<TotalFormalityKPIResponse> => {
    const { data } = await api.get(`formalities/count-with-status/DONE`);
    return data;
  };

export const useGetTotalDoneFormalities = () => {
  return useQuery<TotalFormalityKPIResponse, Error>(
    'totalDoneFormalities',
    () => getTotalDoneFormalities()
  );
};

const getTotalInProgressFormalities =
  async (): Promise<TotalFormalityKPIResponse> => {
    const { data } = await api.get(`formalities/count-with-status/DONE`);
    return data;
  };

export const useGetTotalInProgressFormalities = () => {
  return useQuery<TotalFormalityKPIResponse, Error>(
    'totalInProgressFormalities',
    () => getTotalInProgressFormalities()
  );
};
const getTotalInCancelledFormalities =
  async (): Promise<TotalFormalityKPIResponse> => {
    const { data } = await api.get(`formalities/count-with-status/DONE`);
    return data;
  };

export const useGetTotalCancelledFormalities = () => {
  return useQuery<TotalFormalityKPIResponse, Error>(
    'totalCancelledFormalities',
    () => getTotalInCancelledFormalities()
  );
};
