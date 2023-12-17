'use client';
import { usePieChartMetrics } from '@/hooks/useMetrics';
import { Card, DonutChart, Title } from '@tremor/react';

const valueFormatter = (number: number) =>
  `% ${new Intl.NumberFormat('us').format(number).toString()}`;

const DashboardPieChart = () => {
  const { data } = usePieChartMetrics();
  return (
    <DonutChart
      className='mt-6'
      data={data!}
      category='percentage'
      index='type'
      valueFormatter={valueFormatter}
      showLabel={false}
      colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
    />
  );
};

export default DashboardPieChart;
