import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SlidersHorizontal } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback } from 'react';
import { useQueryClient } from 'react-query';

interface FilteringButtonProps {
  values: string[];
  queryKey: string;
}

const FilteringButton: FC<FilteringButtonProps> = ({ values, queryKey }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const status = searchParams.get('status') || '';

  const QueryClient = useQueryClient();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const handleFilter = (status: string) => {
    router.push(pathname + '?' + createQueryString('status', status));
    QueryClient.invalidateQueries(queryKey);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='ml-auto'
          size={'sm'}
        >
          <SlidersHorizontal className='mr-2 h-4 w-4' /> Filter
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <>
          <DropdownMenuCheckboxItem
            key='ALl'
            className='capitalize'
            checked={status === ''}
            onCheckedChange={() => handleFilter('')}
          >
            ALL
          </DropdownMenuCheckboxItem>
          {values.map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column}
                className='capitalize'
                checked={status === column}
                onCheckedChange={() => handleFilter(column)}
              >
                {column}
              </DropdownMenuCheckboxItem>
            );
          })}
        </>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilteringButton;
