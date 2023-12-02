import TableUsers from '@/components/Table/Users/TableUsers';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@/components/Error';
interface pageProps {}

const Page: FC<pageProps> = () => {
  return (
    <div className=' w-full space-y-8 bg-gray-50 px-4'>
      <div className='space-y-4 pt-6 '>
        <h2 className='text-3xl font-bold tracking-tight'>Users</h2>

        <ErrorBoundary
          fallback={
            <Card className='flex h-52 w-full items-center justify-center'>
              <Error text='Error Loading Users' />
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
            <TableUsers />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Page;
