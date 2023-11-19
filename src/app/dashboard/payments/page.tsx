import CardSkeleton from '@/components/CardSkeleton';
import DailyRevenueCard from '@/components/Cards/Payments/DailyRevenueCard';
import MonthlyRevenueCard from '@/components/Cards/Payments/MonthlyRevenueCard';
import TotalRevenueCard from '@/components/Cards/Payments/TotalRevenueCard';
import WeeklyRevenueCard from '@/components/Cards/Payments/WeeklyRevenueCard';
import Error from '@/components/Error';
import TablePayments from '@/components/Table/Payments/TablePayments';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface pageProps {}

const Page: FC<pageProps> = () => {
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
              <TotalRevenueCard />
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
              <MonthlyRevenueCard />
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
              <WeeklyRevenueCard />
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
              <DailyRevenueCard />
            </Suspense>
          </ErrorBoundary>
        </div>
        <ErrorBoundary fallback={<div>error</div>}>
          <Suspense
            fallback={
              <Card className='flex h-48 w-full items-center justify-center '>
                <Loader2 className='h-8 w-8  animate-spin text-redish' />
              </Card>
            }
          >
            <TablePayments />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Page;
