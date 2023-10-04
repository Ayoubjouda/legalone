import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface CompanyTypeFormProps {}

const CompanyTypeForm: FC<CompanyTypeFormProps> = () => {
  return (
    <form className="w-full max-w-[650px]">
      <div className=" flex flex-col gap-4">
        <p className="text-center text-xl font-medium leading-[31px] text-slate-500">
          Choisissez votre type de société.
        </p>
        <div className="max-w-[816px] w-full overflow-hidden shrink-0 flex flex-col md:flex-row flex-wrap p-2.5 box-border md:items-start md:justify-start gap-[10px] text-center text-xl text-black">
          <Link
            href={'/create?type=AUTOENTREPRENEUR&step=0'}
            className="rounded-2xl bg-white overflow-hidden basis-48  flex flex-col flex-wrap py-[17px] px-5 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-darkgray-100 hover:border-orange-500 transition-all ease-in-out duration-300"
          >
            <Image
              className="relative w-10 h-10 object-cover"
              alt=""
              src="/icons8company64-2@2x.png"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="flex flex-col items-center justify-center">
              <div className="relative text-base font-semibold">
                Auto-entrepreneur
              </div>
              <div className="relative text-xs leading-[31px] text-slategray-100 truncate max-w-[150px]">
                Gestion simplifiée pour lancer un projet
              </div>
            </div>
          </Link>
          <div className="rounded-2xl bg-white overflow-hidden basis-48 flex flex-col py-[17px]  items-center justify-center gap-[11px] cursor-pointer border-[1px] border-solid border-darkgray-100 hover:border-orange-500 transition-all ease-in-out duration-300">
            <Image
              className="relative w-10 h-10 object-cover"
              alt=""
              src="/icons8company64-4@2x.png"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="flex flex-col items-center justify-center">
              <div className="relative  font-semibold text-base">
                Entreprise individuelle
              </div>
              <div className="relative text-xs leading-[31px] text-slategray-100 truncate max-w-[150px]">
                Flexible pour les petites Activité
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white overflow-hidden flex flex-col basis-48 py-[17px] px-5 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-silver-200 hover:border-orange-500 transition-all ease-in-out duration-300">
            <Image
              className="relative w-10 h-10 object-cover"
              alt=""
              src="/icons8company64-6@2x.png"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="flex flex-col items-center justify-center">
              <div className="relative  font-semibold text-base">SAS/SASU</div>
              <div className="relative text-xs leading-[31px] text-slategray-100 truncate max-w-[150px]">
                Plus de fléxibilité et bonne protection
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white overflow-hidden flex basis-48 flex-col py-[17px] px-5 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-darkgray-100 hover:border-orange-500 transition-all ease-in-out duration-300">
            <Image
              className="relative w-10 h-10 object-cover"
              alt=""
              src="/icons8company64-5@2x.png"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="flex flex-col items-center justify-center">
              <div className="relative  font-semibold text-base">SARL/EURL</div>
              <div className="relative text-xs leading-[31px] text-slategray-100 truncate max-w-[150px]">
                Gestion simplifiée pour lancer un projet
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white overflow-hidden flex basis-48 flex-col py-[17px] px-5 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-darkgray-100 hover:border-orange-500 transition-all ease-in-out duration-300">
            <Image
              className="relative w-10 h-10 object-cover"
              alt=""
              src="/icons8company64-3@2x.png"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="flex flex-col items-center justify-center">
              <div className="relative font-semibold text-base">SCI</div>
              <div className="relative text-xs leading-[31px] text-slategray-100 truncate max-w-[150px]">
                Gestion simplifiée pour lancer un projet
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CompanyTypeForm;
