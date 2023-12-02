import TableDossier from '@/components/Table/Dossier/TableDossier';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@/components/Error';
interface pageProps {}

const Page: FC<pageProps> = () => {
  return (
    <div className='h-full w-full space-y-8 bg-gray-50 px-4'>
      <div className='space-y-4 pt-6 '>
        <h2 className='text-3xl font-bold tracking-tight'>Services</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
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
              <div className='text-2xl font-bold'>$45,231.89</div>
              <p className='text-xs text-muted-foreground'>
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Subscriptions
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
            <CardContent>
              <div className='text-2xl font-bold'>+2350</div>
              <p className='text-xs text-muted-foreground'>
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Sales</CardTitle>
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
              <div className='text-2xl font-bold'>+12,234</div>
              <p className='text-xs text-muted-foreground'>
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Active Now</CardTitle>
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
              <p className='text-xs text-muted-foreground'>
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <ErrorBoundary
          fallback={
            <Card className='flex h-52 w-full items-center justify-center'>
              <Error text='Error Loading Dossier' />
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
            <TableDossier />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Page;
