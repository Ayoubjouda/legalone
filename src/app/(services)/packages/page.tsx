'use client';
import PricingComponent from '@/components/PricingComponent';
import { useGetPackages } from '@/hooks/useCompany';
import api from '@/lib/axiosConfig';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';

interface pageProps {}

const Page: FC<pageProps> = () => {
  const { isLoading, data } = useGetPackages();
  const searchParams = useSearchParams();
  const formalityId = searchParams.get('formality') as number | null;
  const router = useRouter();
  const handleOrders = async (id: number) => {
    if (!formalityId) return alert('formality is required');
    api
      .post('/order', {
        description: ' sss',
        formality: formalityId,
        package: id,
      })
      .then((res) => {
        console.log(res);
        router.push(`/commande?order=${res.data.id}`);
      });
  };
  return (
    <div className='h-full w-full'>
      <form className='flex w-full flex-col gap-8'>
        <div>
          <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
            Choisissez votre pack
          </p>
        </div>
        <div className='flex w-full flex-wrap justify-center gap-10 '>
          {data?.map((item: Package, idx: number) => (
            <PricingComponent
              key={item.name}
              {...item}
              onButtonClick={() => handleOrders(item.id)}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Page;
