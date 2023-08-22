import { FC } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface PackProps {
  name: string;
  type: string;
  description: string;
  price: string;
  elements: packElement[];
  onButtonClick?: () => void;
}
interface PercksProps {
  text: string;
}
const Percks = ({ text }: PercksProps) => {
  return (
    <div className="flex items-center gap-x-[11px]">
      <Image
        src={'/Tick.svg'}
        alt=""
        width={24}
        height={24}
      />
      <div className="text-sm font-normal leading-normal text-gray-500">
        {text}
      </div>
    </div>
  );
};

const Pack: FC<PackProps> = ({
  name,
  price,
  description,
  elements,
  type,
  onButtonClick,
}) => {
  return (
    <div
      className={cn(
        'flex min-h-[550px] max-w-[400px] flex-col justify-between rounded-2xl border border-gray-400 border-opacity-50 p-6 ',
        { 'border-orange-500 shadow-orange-500': type === 'PremiumPackage' }
      )}
    >
      <div className="flex flex-col gap-6">
        <p className=" text-[22px] font-normal text-neutral-800">{name}</p>
        <div className="flex flex-col gap-2">
          <h1 className="text-[42px] font-semibold leading-[48px] text-black">
            ${price}
          </h1>
          <p className=" text-xs font-medium text-black text-opacity-50">
            + frais de greffe et d'annonce légale
          </p>
        </div>
        <div className=" text-base font-normal leading-normal text-gray-500">
          {description}
        </div>
        <div className="flex flex-col gap-3">
          {elements?.map((item, index) => (
            <Percks
              key={index}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          variant={'outline'}
          className="border-black px-12 font-semibold"
          onClick={onButtonClick}
          type="button"
        >
          Choisir
        </Button>
      </div>
    </div>
  );
};

export default Pack;
