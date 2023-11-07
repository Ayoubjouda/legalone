import { AlertCircle } from 'lucide-react';
import { FC } from 'react';

interface ErrorProps {
  text: string;
}

const Error: FC<ErrorProps> = ({ text }) => {
  return (
    <div className=' flex h-fit  gap-3 text-red-600'>
      <AlertCircle />
      {text}
    </div>
  );
};

export default Error;
