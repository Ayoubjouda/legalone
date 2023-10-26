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
import { useDeleteOrder, useDeleteUser } from '@/hooks/useAdmin';
import { Order } from '@/types/order';
import { Loader2 } from 'lucide-react';

const DeleteOrderModal = ({
  setOpen,
  open,
  order,
}: {
  setOpen: () => void;
  open: boolean;
  order: Order;
}) => {
  const { mutate: deleteOrder, isLoading } = useDeleteOrder();

  const handleDeleteOrder = (id: number) => {
    deleteOrder(id, { onSuccess: () => setOpen() });
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
              Are you sure you want to delete this Order? This action cannot be
              undone. Deleting this Order will remove all associated data and
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
              onClick={() => handleDeleteOrder(order.id)}
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

export default DeleteOrderModal;
