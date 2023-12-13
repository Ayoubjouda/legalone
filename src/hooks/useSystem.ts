import api from '@/lib/axiosConfig';
import { AxiosProgressEvent } from 'axios';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const uploadFile = async (
  file: File,
  field: string,
  formalityId: string | number,
  onUploadProgress: (progressEvent: AxiosProgressEvent) => void
) => {
  const formData = new FormData();
  formData.append(field, file);

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  };
  const { data } = await api.patch(
    `formalities/upload/${formalityId}`,
    formData,
    config
  );
  return data;
};

type pathchFileParams = {
  file: File;
  field: string;
  formalityId: string | number;
};
const useFileUpload = () => {
  const [progress, setProgress] = useState<number>(0);
  const queryClient = useQueryClient();

  const mutation = useMutation<void, Error, pathchFileParams>(
    (params) =>
      uploadFile(
        params.file,
        params.field,
        params.formalityId,
        (progressEvent: AxiosProgressEvent) => {
          const { progress, total, loaded } = progressEvent;
          if (!total || !progress) return;
          setProgress(Math.round((100 * loaded) / total));
        }
      ),
    {
      onSuccess: () => {
        // Invalidate and refetch any relevant queries after successful upload
        queryClient.invalidateQueries('GetformalitiesById');
        console.log('invalidated');
      },
    }
  );

  return {
    uploadFile: mutation.mutate,
    progress: progress,
    isLoading: mutation.isLoading,
  };
};

export default useFileUpload;
