import { FC } from 'react';
import { Card } from './ui/card';
import Error from './Error';
import { Button } from './ui/button';
import { FallbackProps } from 'react-error-boundary';
import { Icons } from './Icons';

const ErrorCard: FC<FallbackProps> = (props) => {
  return (
    <Card className='flex flex-col items-center justify-center py-5'>
      <Error text='Error Fetching Data' />
      <Button
        variant={'ghost'}
        onClick={props.resetErrorBoundary}
      >
        <Icons.rotateCcw
          size={20}
          className='stroke-slate-500'
        />
      </Button>
    </Card>
  );
};

export default ErrorCard;
