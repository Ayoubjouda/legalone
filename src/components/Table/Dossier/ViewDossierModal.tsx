import DataCard from '@/components/DataCard';
import { Dialog, DialogContent, DialogPortal } from '@/components/ui/dialog';
import { Dossier } from '@/types/order';
import { Loader2 } from 'lucide-react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@/components/Error';
import FermetureDetail from '@/components/FermetureDetail';

const ViewDossierModal = ({
  setOpen,
  open,
  dossier,
}: {
  setOpen: () => void;
  open: boolean;
  dossier: Dossier;
}) => {
  //! Lazy Loading

  const isDissolution = dossier.formalityType === 'dissolution';
  const isRadiation = dossier.formalityType === 'radiation';
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
              {isDissolution || isRadiation ? (
                <FermetureDetail dossier={dossier.data} />
              ) : (
                <DataCard dossier={dossier.data} />
              )}
            </Suspense>
          </ErrorBoundary>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ViewDossierModal;
