import { FC } from 'react';
import { Skeleton } from './ui/skeleton';
import { Card } from './ui/card';

interface CardSkeletonProps {}

const CardSkeleton: FC<CardSkeletonProps> = () => {
  return (
    <Card>
      <div className='space-y-2 p-3'>
        <Skeleton className='h-3 w-full p-2 ' />
        <Skeleton className='h-3 w-full p-2 ' />
        <Skeleton className='h-3 w-full p-2 ' />
      </div>
    </Card>
  );
};

export default CardSkeleton;
