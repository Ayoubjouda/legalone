'use client';
import PaymentsMonthly from '@/components/Cards/Payments/PaymentsMonthly';
import PaymentsTotal from '@/components/Cards/Payments/PaymentsTotal';
import { columns } from '@/components/Table/Payments/columns';
import { DataTable } from '@/components/Table/data-table';
import { Card } from '@/components/ui/card';
import { useGetPayments } from '@/hooks/usePayment';
import { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@/components/Error';
import CardSkeleton from '@/components/CardSkeleton';

interface pageProps {}

const Page: FC<pageProps> = () => {
  const { data, isLoading } = useGetPayments();

  return (
    <div className='h-full w-full space-y-8 bg-gray-50 px-4'>
      <div className='space-y-4 pt-6 '>
        <h2 className='text-3xl font-bold tracking-tight'>Payments</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <ErrorBoundary
            fallback={
              <Card>
                <Error text='Error Fetching Total Revenue' />
              </Card>
            }
          >
            <Suspense fallback={<CardSkeleton />}>
              <PaymentsTotal />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary
            fallback={
              <Card>
                <Error text='Error Fetching Monthly Revenue' />
              </Card>
            }
          >
            <Suspense fallback={<CardSkeleton />}>
              <PaymentsMonthly />
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
