import EditUserForm from '@/components/Forms/userForms/EditUserForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
} from '@/components/ui/dialog';
import { useDeleteUser } from '@/hooks/useUser';

const EditModal = ({
  setOpen,
  open,
  user,
}: {
  setOpen: () => void;
  open: boolean;
  user: User;
}) => {
  const { mutateAsync: deleteUser, isLoading, isSuccess } = useDeleteUser();

  const handleDeleteUser = (id: string) => {
    deleteUser(id, { onSuccess: () => setOpen() });
  };
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogPortal>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogDescription className='text-center text-base'>
              Modifer les informations de l'utilisateur
            </DialogDescription>
          </DialogHeader>
          <EditUserForm
            user={user}
            setOpen={() => setOpen()}
          />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default EditModal;
