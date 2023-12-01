import DataCard from '@/components/DataCard';
import EditFermetureForm from '@/components/Forms/Admin/dossier/EditFermetureForm';
import EditEntrepriseForm from '@/components/Forms/Admin/dossier/creation/EditEntrepriseForm';
import { Dialog, DialogContent, DialogPortal } from '@/components/ui/dialog';
import { useDeleteFormality } from '@/hooks/useDossier';
import { Dossier } from '@/types/order';
import { Loader2 } from 'lucide-react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@/components/Error';
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
          <ErrorBoundary fallback={<Error text='Failed To Load Dossier' />}>
            <Suspense
              fallback={
                <div className='flex h-full w-full items-center justify-center '>
                  <Loader2
                    size={49}
                    className='animate-spin'
                  />
                </div>
              }
            >
              <DataCard dossier={dossier.data} />
            </Suspense>
          </ErrorBoundary>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ViewDossierModal;
