'use client';
import { usePieChartMetrics } from '@/hooks/useMetrics';
import { Card, DonutChart, Title } from '@tremor/react';

const cities = [
  {
    name: 'New York',
    sales: 9800,
  },
  {
    name: 'London',
    sales: 4567,
  },
  {
    name: 'Hong Kong',
    sales: 3908,
  },
  {
    name: 'San Francisco',
    sales: 2400,
  },
  {
    name: 'Singapore',
    sales: 1908,
  },
  {
    name: 'Zurich',
    sales: 1398,
  },
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat('us').format(number).toString()}`;

const DashboardPieChart = () => {
  const { data } = usePieChartMetrics();
  return (
    <DonutChart
      className='mt-6'
      data={data!}
      category='percentage'
      index='type'
      valueFormatter={valueFormatter}
      colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
    />
  );
};

export default DashboardPieChart;
