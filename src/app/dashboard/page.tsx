'use client';
import { Metadata } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Overview } from '@/components/overview';
import { RecentSales } from '@/components/recent-sales';

import {
  useGetMonthlyKpiPayment,
  useGetTotalRevenue,
} from '@/hooks/usePayment';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetWeeklyClient } from '@/hooks/useUser';

// export const metadata: Metadata = {
//   title: 'Dashboard',
//   description: 'Example dashboard app built using the components.',
// };

export default function DashboardPage() {
  const { data: totalRevenue, isLoading: isToalRevenueLoading } =
    useGetTotalRevenue();
  const { data: monthlyKpiPayment, isLoading: isMonthlyKpiPaymentLoading } =
    useGetMonthlyKpiPayment();
  const { data: weeklyClient, isLoading: isWeeklyClientLoading } =
    useGetWeeklyClient();
  return (
    <>
      <div className=' w-full flex-col  bg-gray-50 md:flex'>
        <div className='flex-1 space-y-4 p-4 pt-6'>
          <div className='flex items-center justify-between space-y-2'>
            <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
          </div>

          <div className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <Card className='h-fit'>
                {isToalRevenueLoading ? (
                  <div className='space-y-2 p-3'>
                    <Skeleton className='h-3 w-full p-2 ' />
                    <Skeleton className='h-3 w-full p-2 ' />
                    <Skeleton className='h-3 w-full p-2 ' />
                  </div>
                ) : (
                  <>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Total Revenue
                      </CardTitle>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-4 w-4 text-muted-foreground'
                      >
                        <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>
                        € {totalRevenue?.totalRevenue}
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>
              <Card className='h-fit'>
                {isWeeklyClientLoading ? (
                  <div className='space-y-2 p-3'>
                    <Skeleton className='h-3 w-full p-2 ' />
                    <Skeleton className='h-3 w-full p-2 ' />
                    <Skeleton className='h-3 w-full p-2 ' />
                  </div>
                ) : (
                  <>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Client This Week
                      </CardTitle>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-4 w-4 text-muted-foreground'
                      >
                        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                        <circle
                          cx='9'
                          cy='7'
                          r='4'
                        />
                        <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                      </svg>
                    </CardHeader>
                    <CardContent className='h-fit'>
                      <div className='text-2xl font-bold'>
                        + {weeklyClient?.users}
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>

              <Card className='h-fit'>
                {isMonthlyKpiPaymentLoading ? (
                  <div className='space-y-2 p-3'>
                    <Skeleton className='h-3 w-full p-2 ' />
                    <Skeleton className='h-3 w-full p-2 ' />
                    <Skeleton className='h-3 w-full p-2 ' />
                  </div>
                ) : (
                  <>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Sales
                      </CardTitle>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-4 w-4 text-muted-foreground'
                      >
                        <rect
                          width='20'
                          height='14'
                          x='2'
                          y='5'
                          rx='2'
                        />
                        <path d='M2 10h20' />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>
                        {monthlyKpiPayment?.monthlyPayment}
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>

              <Card className='h-fit'>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Active Now
                  </CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>+573</div>
                </CardContent>
              </Card>
            </div>
            <div className='max-w-screen grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
              <Card className='col-span-12 md:col-span-4'>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <Overview />
                </CardContent>
              </Card>
              <RecentSales />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
