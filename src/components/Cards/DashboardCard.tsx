import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Icons } from '../Icons';
interface DashboardCardProps {
  title: string;
  icon: keyof typeof Icons;
  content: number | string | undefined;
}

const DashboardCard: FC<DashboardCardProps> = ({ title, icon, content }) => {
  const Icon = Icons[icon];
  return (
    <Card className='h-fit'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        <Icon />
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{content}</div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
