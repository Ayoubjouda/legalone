import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import DeleteOrderModal from './DeleteOrderModal';
import { Order } from '@/types/order';

interface paymentActionProps {
  payment: Payment;
}
const PaymentActions: FC<paymentActionProps> = ({ payment }) => {
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [editModalOpen, setEditModalOpen] = React.useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className='h-8 w-8 p-0'
          >
            <span className='sr-only'>Open menu</span>
            <DotsHorizontalIcon className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(payment.id))}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View User</DropdownMenuItem>
            {/* <DropdownMenuItem onClick={() => setEditModalOpen(true)}>
              Edit
            </DropdownMenuItem> */}

            {/* <DropdownMenuItem onClick={() => setDeleteModalOpen(true)}>
              Delete
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
      {/* <DeleteOrderModal
        order={order}
        setOpen={() => setDeleteModalOpen(!deleteModalOpen)}
        open={deleteModalOpen}
      /> */}
    </>
  );
};

export default PaymentActions;
