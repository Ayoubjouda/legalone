'use client';
import { columns } from '@/components/Table/Orders/columns';
import { DataTable } from '@/components/Table/data-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  useGetOrders,
  useGetTotalCanceledOrders,
  useGetTotalCompletedOrders,
  useGetTotalOrders,
  useGetTotalPendingOrders,
} from '@/hooks/useOrder';
import { Boxes, PackageCheck, PackagePlus, PackageX } from 'lucide-react';
import { FC } from 'react';

interface pageProps {}

const Page: FC<pageProps> = () => {
  const { data, isLoading } = useGetOrders();
  const { data: TotalOrders, isLoading: isTotalOrdersLoading } =
    useGetTotalOrders();
  const { data: TotalCompleted, isLoading: isTotalCompletedLoading } =
    useGetTotalCompletedOrders();
  const { data: TotalPending, isLoading: isTotalPendingLoading } =
    useGetTotalPendingOrders();
  const { data: TotalCanceled, isLoading: isTotalCancledLoading } =
    useGetTotalCanceledOrders();
  return (
    <div className='h-full w-full space-y-8 bg-gray-50 px-4'>
      <div className='space-y-4 pt-6 '>
        <h2 className='text-3xl font-bold tracking-tight'>Orders</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            {isTotalOrdersLoading ? (
              <div className='space-y-2 p-3'>
                <Skeleton className='h-3 w-full p-2 ' />
                <Skeleton className='h-3 w-full p-2 ' />
                <Skeleton className='h-3 w-full p-2 ' />
              </div>
            ) : (
              <>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Total Orders
                  </CardTitle>
                  <Boxes />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>
                    {TotalOrders?.totalOrders}
                  </div>
                </CardContent>{' '}
              </>
            )}
          </Card>
          <Card>
            {isTotalCompletedLoading ? (
              <div className='space-y-2 p-3'>
                <Skeleton className='h-3 w-full p-2 ' />
                <Skeleton className='h-3 w-full p-2 ' />
                <Skeleton className='h-3 w-full p-2 ' />
              </div>
            ) : (
              <>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Completed Orders
                  </CardTitle>
                  <PackageCheck />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>
                    {TotalCompleted?.completedOrders}
                  </div>
                </CardContent>
              </>
            )}
          </Card>
          <Card>
            {isTotalPendingLoading ? (
              <div className='space-y-2 p-3'>
                <Skeleton className='h-3 w-full p-2 ' />
                <Skeleton className='h-3 w-full p-2 ' />
                <Skeleton className='h-3 w-full p-2 ' />
              </div>
            ) : (
              <>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Pending Orders
                  </CardTitle>
                  <PackagePlus />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>
                    {TotalPending?.pendingOrders}
                  </div>
                </CardContent>
              </>
            )}
          </Card>
          <Card>
            {isTotalCancledLoading ? (
              <div className='space-y-2 p-3'>
                <Skeleton className='h-4 w-full p-2 ' />
                <Skeleton className='h-4 w-full p-2 ' />
                <Skeleton className='h-4 w-full p-2 ' />
              </div>
            ) : (
              <>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Cancled Orders
                  </CardTitle>
                  <PackageX />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>
                    {TotalCanceled?.canceledOrders}
                  </div>
                </CardContent>
              </>
            )}
          </Card>
        </div>
        <div className='rounded-md border bg-white p-4'>
          <DataTable
            data={isLoading ? [] : data}
            columns={columns}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
