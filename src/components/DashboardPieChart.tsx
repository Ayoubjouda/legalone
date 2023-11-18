'use client';
import React, { FC } from 'react';
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { Card } from './ui/card';

interface PieChartProps {}

const DashboardPieChart: FC<PieChartProps> = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  // Define an array of custom colors for each data point
  const colors = [
    '#8884d8',
    '#83a6ed',
    '#8dd1e1',
    '#82ca9d',
    '#a4de6c',
    '#d0ed57',
  ];

  return (
    <Card className='min-h-[20rem]'>
      <ResponsiveContainer
        width='100%'
        height='100%'
      >
        <PieChart
          width={400}
          height={400}
        >
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={data}
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default DashboardPieChart;
