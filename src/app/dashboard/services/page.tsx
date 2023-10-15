import TableN from '@/components/Tables/TableN';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <div className='h-full w-full space-y-8 bg-gray-50 px-8'>
      <div className='space-y-4 pt-6 '>
        <h2 className='text-3xl font-bold tracking-tight'>Services</h2>
        <TableN />
      </div>
    </div>
  );
};

export default page;
