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
import DeleteFormalityModal from './DeleteFormalityModal';
import { FormalitiesResponse } from '@/types/order';

interface dossierActions {
  dossier: FormalitiesResponse;
}
const DossierActions: FC<dossierActions> = ({ dossier }) => {
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
      <DeleteFormalityModal
        dossier={dossier}
        setOpen={() => setDeleteModalOpen(!deleteModalOpen)}
        open={deleteModalOpen}
      />
      {/* <EditModal
        setOpen={() => setEditModalOpen(!editModalOpen)}
        open={editModalOpen}
        user={user}
      /> */}
    </>
  );
};

export default DossierActions;
