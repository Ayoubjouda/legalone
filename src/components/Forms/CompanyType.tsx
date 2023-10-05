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
      <div className="min-h-[300px] h-full w-full flex justify-center items-center">
        <Spinner color="orange.500" />
      </div>
    );
  return (
    <form className="w-full max-w-[650px]">
      <div className=" flex flex-col gap-4">
        <p className="text-center text-xl font-medium leading-[31px] text-slate-500">
          Choisissez votre type de société.
        </p>
        {CompanyType?.map((item) => (
          <Link
            key={item.id}
            href={`/create?type=${item.name}&step=0`}
            className="rounded-2xl bg-white overflow-hidden basis-48  flex flex-col flex-wrap py-[17px] px-5 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-darkgray-100 hover:border-orange-500 transition-all ease-in-out duration-300"
          >
            <Image
              className="relative w-10 h-10 object-cover"
              alt=""
              src={item.iconLink}
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="flex flex-col items-center justify-center">
              <div className="relative text-base font-semibold">
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
