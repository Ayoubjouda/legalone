'use client';
import { useGetRecentSalles } from '@/hooks/usePayment';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Skeleton } from './ui/skeleton';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { ChevronRightIcon } from 'lucide-react';

interface SaleProps extends RecentSallesResponse {}

const Sale = ({
  userEmail,
  userFirstName,
  userLastName,
  paymentAmount,
}: SaleProps) => (
  <div className='flex cursor-pointer items-center rounded-md px-2 py-4 hover:bg-gray-100'>
    <Avatar className='h-9 w-9'>
      <AvatarImage
        src={`https://i.pravatar.cc/300?img={${Math.random()}}`}
        alt='Avatar'
      />
      <AvatarFallback>OM</AvatarFallback>
    </Avatar>
    <div className='ml-4 space-y-1'>
      <p className='text-sm font-medium leading-none'>
        {userFirstName}
        {userLastName}
      </p>
      <p className='text-sm text-muted-foreground'>{userEmail}</p>
    </div>
    <div className='md:text-md ml-auto text-sm font-medium text-green-500'>
      +${paymentAmount}
    </div>
  </div>
);

export function RecentSales() {
  const { data, isLoading } = useGetRecentSalles();
  return (
    <Card className='col-span-3'>
      <CardHeader>
        <CardTitle className='flex justify-between'>
          <div>Recent Sales</div>
          <div className='flex cursor-pointer items-center text-xs hover:underline'>
            Show all
            <ChevronRightIcon
              className=' text-gray-400'
              size={16}
            />
          </div>
        </CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          {isLoading
            ? [1, 2, 3, 4, 5].map((_, i) => (
                <div
                  key={Math.random()}
                  className='flex items-center space-x-4 py-2'
                >
                  <Skeleton className='h-12 w-12 rounded-full  px-3' />
                  <div className='w-full space-y-2'>
                    <Skeleton className='h-4 w-full' />
                    <Skeleton className='h-4 w-full' />
                  </div>
                </div>
              ))
            : data?.map((sale) => (
                <Sale
                  key={sale.paymentId}
                  {...sale}
                />
              ))}
        </div>
      </CardContent>
    </Card>
  );
}
