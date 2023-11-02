'use client';
import CardSkeleton from '@/components/CardSkeleton';
import OrdersCancelled from '@/components/Cards/OrdersCancelled';
import OrdersCompleted from '@/components/Cards/OrdersCompleted';
import OrdersPending from '@/components/Cards/OrdersPending';
import OrdersTotal from '@/components/Cards/OrdersTotal';
import { columns } from '@/components/Table/Orders/columns';
import { DataTable } from '@/components/Table/data-table';
import { useGetOrders } from '@/hooks/useOrder';
import { FC, Suspense } from 'react';

interface pageProps {}

const Page: FC<pageProps> = () => {
  const { data, isLoading } = useGetOrders();

  return (
    <div className='h-full w-full space-y-8 bg-gray-50 px-4'>
      <div className='space-y-4 pt-6 '>
        <h2 className='text-3xl font-bold tracking-tight'>Orders</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Suspense fallback={<CardSkeleton />}>
            <OrdersTotal />
          </Suspense>
          <Suspense fallback={<CardSkeleton />}>
            <OrdersCompleted />
          </Suspense>
          <Suspense fallback={<CardSkeleton />}>
            <OrdersPending />
          </Suspense>
          <Suspense fallback={<CardSkeleton />}>
            <OrdersCancelled />
          </Suspense>
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
