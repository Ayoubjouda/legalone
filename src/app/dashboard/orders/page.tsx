'use client';
import CardSkeleton from '@/components/CardSkeleton';
import OrdersCancelled from '@/components/Cards/Orders/OrdersCancelled';
import OrdersCompleted from '@/components/Cards/Orders/OrdersCompleted';
import OrdersPending from '@/components/Cards/Orders/OrdersPending';
import OrdersTotal from '@/components/Cards/Orders/OrdersTotal';
import Error from '@/components/Error';
import ErrorCard from '@/components/ErrorCard';
import { columns } from '@/components/Table/Orders/columns';
import { DataTable } from '@/components/Table/data-table';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGetOrders } from '@/hooks/useOrder';
import { FC, Suspense } from 'react';
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';

interface pageProps {}

const Page: FC<pageProps> = () => {
  const { data, isLoading } = useGetOrders();
  return (
    <div className=' w-full space-y-8 bg-gray-50 px-4'>
      <div className='space-y-4 pt-6 '>
        <h2 className='text-3xl font-bold tracking-tight'>Orders</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <ErrorBoundary FallbackComponent={ErrorCard}>
            <Suspense fallback={<CardSkeleton />}>
              <OrdersTotal />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary
            fallback={
              <Card>
                <Error text='Error Fetching Data' />
              </Card>
            }
          >
            <Suspense fallback={<CardSkeleton />}>
              <OrdersCompleted />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary
            fallback={
              <Card>
                <Error text='Error Fetching Data' />
              </Card>
            }
          >
            <Suspense fallback={<CardSkeleton />}>
              <OrdersPending />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary
            fallback={
              <Card>
                <Error text='Error Fetching Data' />
              </Card>
            }
          >
            <Suspense fallback={<CardSkeleton />}>
              <OrdersCancelled />
            </Suspense>
          </ErrorBoundary>
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
