import { FC } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
interface PackProps {
  premium?: boolean;
}

const Percks: FC = () => {
  return (
    <div className="flex items-center gap-x-[11px]">
      <Image
        src={'/Tick.svg'}
        alt=""
        width={24}
        height={24}
      />
      <div className="text-sm font-normal leading-normal text-gray-500">
        Vérification de votre dossier d'immatriculation
      </div>
    </div>
  );
};

const Pack: FC<PackProps> = ({ premium = true }) => {
  return (
    <div
      className={cn(
        'flex min-h-[550px] w-[400px] flex-col justify-between rounded-2xl border border-gray-400 border-opacity-50 p-6 ',
        { 'border-orange-500 shadow-orange-500': premium }
      )}
    >
      <div className="flex flex-col gap-6">
        <p className=" text-[22px] font-normal text-neutral-800">Standard</p>
        <div className="flex flex-col gap-2">
          <h1 className="text-[42px] font-semibold leading-[48px] text-black">
            $99
          </h1>
          <p className=" text-xs font-medium text-black text-opacity-50">
            + frais de greffe et d'annonce légale
          </p>
        </div>
        <div className=" text-base font-normal leading-normal text-gray-500">
          Déléguez vos démarches de création à nos juristes expérimentés
        </div>
        <div className="flex flex-col gap-3">
          {[1, 2, 3, 4].map((item, index) => (
            <Percks key={index} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          variant={'outline'}
          className="border-black px-12 font-semibold"
        >
          Choisir
        </Button>
      </div>
    </div>
  );
};

export default Pack;
