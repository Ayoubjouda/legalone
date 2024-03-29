import { FC, HTMLAttributes } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { cn } from '@/lib/utils';
interface IconBoxProps extends HTMLAttributes<HTMLButtonElement> {
  image: string | StaticImport;
  title: string;
}

const IconBox: FC<IconBoxProps> = ({ title, image, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        props.className,
        'flex w-[210px] cursor-pointer flex-col items-center justify-center gap-y-1 rounded-2xl border p-7 transition duration-300 ease-in-out hover:border-redish hover:shadow-lg'
      )}
      type='button'
    >
      <Image
        src={image}
        alt='2332'
        width={48}
        height={48}
        sizes='100vw'
      />
      <p className='text-center text-sm font-semibold  text-black'>{title}</p>
    </button>
  );
};

export default IconBox;
