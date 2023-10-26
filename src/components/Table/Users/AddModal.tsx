import AddUserForm from '@/components/Forms/adminForms/AddUserForm';
import EditUserForm from '@/components/Forms/adminForms/EditUserForm';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useDeleteUser } from '@/hooks/useAdmin';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const AddModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='bg-redish text-white hover:bg-redish hover:text-white '
          size={'sm'}
        >
          <Plus className='mr-2 h-4 w-4' /> Ajouter
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogDescription className='text-center text-base'>
              Ajouter les informations de l'utilisateur
            </DialogDescription>
          </DialogHeader>
          <AddUserForm setOpen={() => setOpen(false)} />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default AddModal;
