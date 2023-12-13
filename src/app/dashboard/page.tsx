import { Metadata } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Overview } from '@/components/overview';
import { RecentSales } from '@/components/recent-sales';

import CardSkeleton from '@/components/CardSkeleton';
import NewClientsCard from '@/components/Cards/Clients/NewClientsCard';
import MonthlyRevenueCard from '@/components/Cards/Payments/MonthlyRevenueCard';
import TotalRevenueCard from '@/components/Cards/Payments/TotalRevenueCard';
import ErrorCard from '@/components/ErrorCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import DashboardPieChart from '@/components/DashboardPieChart';
import Chart from '@/components/Chart';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.',
};

export default function DashboardPage() {
  return (
    <div className=' w-full flex-col  bg-gray-50 md:flex'>
      <div className='flex-1 space-y-4 p-4 pt-6'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
        </div>

        <div className='space-y-4'>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <ErrorBoundary FallbackComponent={ErrorCard}>
              <Suspense fallback={<CardSkeleton />}>
                <TotalRevenueCard />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={ErrorCard}>
              <Suspense fallback={<CardSkeleton />}>
                <NewClientsCard />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={ErrorCard}>
              <Suspense fallback={<CardSkeleton />}>
                <MonthlyRevenueCard />
              </Suspense>
            </ErrorBoundary>
          </div>
          <div className='max-w-screen grid w-full gap-4 md:grid-cols-2 lg:grid-cols-7'>
            <Card className='col-span-12 md:col-span-4'>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className='pl-2'>
                <DashboardPieChart />
              </CardContent>
            </Card>
            <ErrorBoundary FallbackComponent={ErrorCard}>
              <Suspense
                fallback={
                  <Card className='col-span-3'>
                    <div className=' space-y-2 p-3'>
                      {Array.from({ length: 18 }).map((_, i) => (
                        <Skeleton
                          key={Math.random()}
                          className='h-3 w-full p-2 '
                        />
                      ))}
                    </div>
                  </Card>
                }
              >
                <RecentSales />
              </Suspense>
            </ErrorBoundary>
          </div>
          <Chart />
          <div className='max-w-screen grid w-full grid-cols-2 gap-4 '></div>
        </div>
      </div>
    </div>
  );
}
