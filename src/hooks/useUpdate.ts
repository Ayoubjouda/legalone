import { Dossier } from '@/types/order';
import api from '@/lib/axiosConfig';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'sonner';

interface updateEntrepriseParams {
  companyId: number;
  dossierId: number;
  formalities: Dossier;
}

const updateEntreprise = async ({
  companyId,
  dossierId,
  formalities,
}: updateEntrepriseParams): Promise<void> => {
  const { user, order, formalityId, ...newObj } = formalities;
  console.log(newObj);
  const { data } = await api.patch(
    `company/update-company-formality/${companyId}/${dossierId}`,
    { formalities: newObj }
  );
  return data;
};

export const useUpdateEntrepriseFormality = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, updateEntrepriseParams>(
    'deleteFormality',
    (params) => updateEntreprise(params),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Getformalities');
        toast.success('Dossier Updated successfully');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

interface updateModificationParams {
  companyId: number;
  dossierId: number;
  formalities: Dossier;
}

const updateModification = async ({
  companyId,
  dossierId,
  formalities,
}: updateModificationParams): Promise<void> => {
  const { user, order, formalityId, ...newObj } = formalities;
  console.log(newObj);

  const endpointType =
    formalities.formalityType === 'managerModification'
      ? 'manager-modification/update-manager-modification-formality'
      : formalities.formalityType === 'statusModification'
      ? 'status/update-status-formality'
      : 'relocation/update-relocation-formality';
  const { data } = await api.patch(
    `${endpointType}/${companyId}/${dossierId}`,
    { formalities: newObj }
  );
  return data;
};

export const useUpdateModificationFormality = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, updateModificationParams>(
    'deleteFormality',
    (params) => updateModification(params),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Getformalities');
        toast.success('Dossier Updated successfully');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};
