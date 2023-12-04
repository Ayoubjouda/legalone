import TableDossierClient from '@/components/Table/ClientDossier/TableDossierClient';
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
        <h2 className='text-3xl font-bold tracking-tight'>Mes Dossier</h2>

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
            <TableDossierClient />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Page;
