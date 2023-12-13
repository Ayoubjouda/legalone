import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Icons } from '../Icons';
import {
  SparkAreaChart,
  SparkBarChart,
  SparkLineChart,
  Text,
  Title,
} from '@tremor/react';
import { ArrowBigUp, ArrowUp, ChevronUp } from 'lucide-react';
interface DashboardCardProps {
  title: string;
  icon: keyof typeof Icons;
  content: number | string | undefined;
}
export const chartdata = [
  {
    month: 'Jan 21',
    Performance: 4000,
    Benchmark: 3000,
  },
  {
    month: 'Feb 21',
    Performance: 3000,
    Benchmark: 2000,
  },
  {
    month: 'Mar 21',
    Performance: 2000,
    Benchmark: 1700,
  },
  {
    month: 'Apr 21',
    Performance: 2780,
    Benchmark: 2500,
  },
  {
    month: 'May 21',
    Performance: 1890,
    Benchmark: 1890,
  },
  {
    month: 'Jun 21',
    Performance: 2390,
    Benchmark: 2000,
  },
  {
    month: 'Jul 21',
    Performance: 3490,
    Benchmark: 3000,
  },
];

const DashboardCard: FC<DashboardCardProps> = ({ title, icon, content }) => {
  const Icon = Icons[icon];
  return (
    <Card className='h-fit'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='flex items-center gap-x-2 text-sm font-medium'>
          {title}
          {/* <span className='leading-2 flex items-center gap-x-1 rounded bg-emerald-100 px-1  py-1 text-xs font-medium text-emerald-600'>
            <ArrowUp
              size={10}
              strokeWidth={2}
              className='stroke-emerald-600'
            />
            +1.72 %
          </span> */}
        </CardTitle>
        <Icon
          size={20}
          className='stroke-slate-500'
        />
      </CardHeader>
      <CardContent className='flex w-full flex-row justify-between'>
        <div className='text-2xl font-bold'>{content}</div>

        {/* <SparkAreaChart
          data={chartdata}
          categories={['Performance']}
          index={'month'}
          colors={['emerald']}
          className=' h-10 w-36'
        /> */}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
