import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGetCompanyType } from '@/hooks/useCompany';
import { Spinner } from '@chakra-ui/react';
interface CompanyTypeFormProps {}

const CompanyTypeForm: FC<CompanyTypeFormProps> = () => {
  const { isLoading, data: CompanyType } = useGetCompanyType();
  if (isLoading)
    return (
      <div className='flex h-full min-h-[300px] w-full items-center justify-center'>
        <Spinner color='orange.500' />
      </div>
    );
  return (
    <form className='w-full max-w-[650px]'>
      <div className=' flex flex-col gap-4'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          Choisissez votre type de société.
        </p>
        {CompanyType?.map((item) => (
          <Link
            key={item.id}
            href={`/create?type=${item.name}&step=0`}
            className='border-darkgray-100 flex basis-48 cursor-pointer  flex-col flex-wrap items-center justify-center gap-[10px] overflow-hidden rounded-2xl border-[1px] border-solid bg-white px-5 py-[17px] transition-all duration-300 ease-in-out hover:border-orange-500'
          >
            <Image
              className='relative h-10 w-10 object-cover'
              alt=''
              src={item.iconLink}
              width={0}
              height={0}
              sizes='100vw'
            />
            <div className='flex flex-col items-center justify-center'>
              <div className='relative text-base font-semibold'>
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </form>
  );
};

export default CompanyTypeForm;
