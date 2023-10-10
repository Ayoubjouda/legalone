import TableN from '@/components/Tables/TableN';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <div className="w-full px-3 space-y-8">
      <div className="text-4xl font-bold mt-8">Services</div>
      <TableN />
    </div>
  );
};

export default page;
