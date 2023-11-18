'use client';
import CardSkeleton from '@/components/CardSkeleton';
import OrdersCancelled from '@/components/Cards/Orders/OrdersCancelled';
import OrdersCompleted from '@/components/Cards/Orders/OrdersCompleted';
import OrdersPending from '@/components/Cards/Orders/OrdersPending';
import OrdersTotal from '@/components/Cards/Orders/OrdersTotal';
import Error from '@/components/Error';
import ErrorCard from '@/components/ErrorCard';
import TableOrders from '@/components/Table/Orders/TableOrders';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface pageProps {}

const Page: FC<pageProps> = () => {
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
        <ErrorBoundary
          fallback={
            <Card className='flex h-52 w-full items-center justify-center'>
              <Error text='Error Loading Orders' />
            </Card>
          }
        >
          <Suspense
            fallback={
              <Card className='flex h-48 w-full items-center justify-center '>
                <Loader2 className='h-8 w-8  animate-spin text-redish' />
              </Card>
            }
          >
            <TableOrders />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Page;
