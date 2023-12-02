import TableClients from '@/components/Table/Clients/TableClients';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@/components/Error';
import CardSkeleton from '@/components/CardSkeleton';
import NewClientsCard from '@/components/Cards/Clients/NewClientsCard';
import TotalClientsCard from '@/components/Cards/Clients/TotalClientsCard';

interface pageProps {}

const Page: FC<pageProps> = () => {
  return (
    <div className=' w-full space-y-8 bg-gray-50 px-4'>
      <div className='space-y-4 pt-6 '>
        <h2 className='text-3xl font-bold tracking-tight'>Users</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <ErrorBoundary
            fallback={
              <Card>
                <Error text='Error Fetching Data' />
              </Card>
            }
          >
            <Suspense fallback={<CardSkeleton />}>
              <TotalClientsCard />
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
              <NewClientsCard />
            </Suspense>
          </ErrorBoundary>
        </div>
        <ErrorBoundary
          fallback={
            <Card className='flex h-52 w-full items-center justify-center'>
              <Error text='Error Loading Clients' />
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
            <TableClients />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Page;
