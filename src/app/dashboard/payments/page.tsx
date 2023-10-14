import TableN from '@/components/Tables/TableN';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <div className="w-full px-8 space-y-8 bg-gray-50">
      <div className="pt-6 space-y-4 ">
        <h2 className="text-3xl font-bold tracking-tight">Payments</h2>
        <TableN />
      </div>
    </div>
  );
};

export default page;
