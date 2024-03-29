import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPortal,
} from '@/components/ui/dialog';
import { useDeleteUser } from '@/hooks/useUser';
import { Loader2 } from 'lucide-react';

const DeleteUserModal = ({
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
              Are you sure you want to delete this user? This action cannot be
              undone. Deleting this user will remove all associated data and
              cannot be recovered.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type='submit'
                variant={'outline'}
                disabled={isLoading}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type='submit'
              className='bg-red-500 hover:bg-red-600'
              onClick={() => handleDeleteUser(user.id)}
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className='animate-spin' /> : 'Delete'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default DeleteUserModal;
