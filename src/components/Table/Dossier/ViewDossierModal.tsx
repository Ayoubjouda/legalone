import EditDissolutionForm from '@/components/Forms/Admin/dossier/EditDissolutionForm';
import EditEntrepriseForm from '@/components/Forms/Admin/dossier/creation/EditEntrepriseForm';
import { Dialog, DialogContent, DialogPortal } from '@/components/ui/dialog';
import { useDeleteFormality } from '@/hooks/useDossier';
import { Dossier } from '@/types/order';

const ViewDossierModal = ({
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

  const isDissolution = dossier?.formalityType === 'dissolution';
  const isRadiation = dossier?.formalityType === 'radiation';
  const isSAS =
    dossier?.formalityType === 'companies' &&
    dossier?.data?.companyType === ('SARL' || 'EURL' || 'SASU' || 'SAS');
  //! Lazy Loading
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogPortal>
        <DialogContent className='max-h-[80%] overflow-y-auto sm:max-w-[800px]'>
          {isRadiation || isDissolution ? (
            <EditDissolutionForm dossier={dossier.data} />
          ) : null}
          {isSAS ? <EditEntrepriseForm dossier={dossier.data} /> : null}
          {/* {dossier?.service?.companies?.companyType === 'SAS' ? (
            <EditEntrepriseForm dossier={dossier?.service?.companies} />
          ) : null} */}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ViewDossierModal;
