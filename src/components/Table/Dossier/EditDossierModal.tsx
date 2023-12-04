import DataCard from '@/components/DataCard';
import EditFermetureForm from '@/components/Forms/Admin/dossier/EditFermetureForm';
import EditEntrepriseForm from '@/components/Forms/Admin/dossier/creation/EditEntrepriseForm';
import { Dialog, DialogContent, DialogPortal } from '@/components/ui/dialog';
import { useDeleteFormality } from '@/hooks/useDossier';
import { Dossier } from '@/types/order';
import {
  EntrepriseFormSchema,
  EntrepriseSchemaType,
} from '@/lib/validators/creation/entreprise';
import EditAssociation from '@/components/Forms/Admin/dossier/creation/EditAssociation';
import EditAutoEntreForm from '@/components/Forms/Admin/dossier/creation/EditAutoEntreForm';
import EditModificationForm from '@/components/Forms/Admin/dossier/EditModificationForm';
interface EditEntrepriseSchemaType extends EntrepriseSchemaType {
  id: number;
}
const EditDossierModal = ({
  setOpen,
  open,
  dossier,
}: {
  setOpen: () => void;
  open: boolean;
  dossier: Dossier;
}) => {
  const { mutate: deleteFormality } = useDeleteFormality();

  const handleDeleteOrder = (id: number) => {
    deleteFormality(id, { onSuccess: () => setOpen() });
  };
  const isModification =
    dossier?.formalityType === 'statusModification' ||
    dossier?.formalityType === 'managerModification' ||
    dossier?.formalityType === 'relocation';

  const isDissolution = dossier?.formalityType === 'dissolution';
  const isRadiation = dossier?.formalityType === 'radiation';
  const isSAS =
    dossier?.formalityType === 'companies' &&
    (dossier?.data?.companyType === 'SAS' ||
      dossier?.data?.companyType === 'SCI' ||
      dossier?.data?.companyType === 'SARL' ||
      dossier?.data?.companyType === 'SASU' ||
      dossier?.data?.companyType === 'EURL');

  const isAssosiacion =
    dossier?.formalityType === 'companies' &&
    dossier?.data?.companyType === 'ASSOCIATION';

  const isAutoEntreprise =
    dossier?.formalityType === 'companies' &&
    dossier?.data?.companyType === 'AUTOENTREPRISE';

  //! Lazy Loading
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogPortal>
        <DialogContent className='max-h-[80%] overflow-y-auto sm:max-w-[800px]'>
          {isRadiation || isDissolution ? (
            <EditFermetureForm dossier={dossier.data} />
          ) : null}
          {isSAS ? (
            <EditEntrepriseForm
              dossier={dossier.data as EditEntrepriseSchemaType}
              formalitie={dossier}
            />
          ) : null}
          {isAssosiacion ? (
            <EditAssociation
              dossier={dossier.data}
              formalitie={dossier}
            />
          ) : null}
          {isAutoEntreprise ? (
            <EditAutoEntreForm
              dossier={dossier.data}
              formalitie={dossier}
            />
          ) : null}
          {isModification ? (
            <EditModificationForm
              dossier={dossier.data}
              formalitie={dossier}
            />
          ) : null}
          {/* {dossier?.service?.companies?.companyType === 'SAS' ? (
            <EditEntrepriseForm dossier={dossier?.service?.companies} />
          ) : null} */}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default EditDossierModal;
