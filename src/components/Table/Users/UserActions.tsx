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
import DeleteUserModal from './DeleteUserModal';
import EditModal from './EditModal';

interface userActions {
  user: User;
}
const UserActions: FC<userActions> = ({ user }) => {
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
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy User ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setEditModalOpen(true)}>
              Edit
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setDeleteModalOpen(true)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
      <DeleteUserModal
        user={user}
        setOpen={() => setDeleteModalOpen(!deleteModalOpen)}
        open={deleteModalOpen}
      />
      <EditModal
        setOpen={() => setEditModalOpen(!editModalOpen)}
        open={editModalOpen}
        user={user}
      />
    </>
  );
};

export default UserActions;
