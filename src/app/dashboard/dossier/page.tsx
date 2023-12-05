import TableDossier from '@/components/Table/Dossier/TableDossier';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@/components/Error';
import CardSkeleton from '@/components/CardSkeleton';
import DossierCardTotal from '@/components/Cards/Dossier/DossierCardTotal';
import ErrorCard from '@/components/ErrorCard';
import DossierCardTotalDone from '@/components/Cards/Dossier/DossierCardTotalDone';
import DossierCardTotalCancelled from '@/components/Cards/Dossier/DossierCardTotalCancelled';
import DossierCardTotalInProgress from '@/components/Cards/Dossier/DossierCardTotalInProgress';
interface pageProps {}

const Page: FC<pageProps> = () => {
  return (
    <div className='h-full w-full space-y-8 bg-gray-50 px-4'>
      <div className='space-y-4 pt-6 '>
        <h2 className='text-3xl font-bold tracking-tight'>Services</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <ErrorBoundary FallbackComponent={ErrorCard}>
            <Suspense fallback={<CardSkeleton />}>
              <DossierCardTotal />
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
              <DossierCardTotalDone />
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
              <DossierCardTotalInProgress />
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
              <DossierCardTotalCancelled />
            </Suspense>
          </ErrorBoundary>
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
