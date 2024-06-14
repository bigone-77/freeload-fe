import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Review } from '@/models/Review';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: Review[];
}

export default function PieChart({ data }: PieChartProps) {
  // 같은 이름의 휴게소의 가격을 합치기 위한 로직
  const aggregatedData = data.reduce(
    (acc: Record<string, { price: number; count: number }>, item) => {
      const { svarCd, price } = item; // item 객체에서 svarCd와 price를 구조 분해 할당
      if (acc[svarCd]) {
        acc[svarCd].price += Number(price);
        acc[svarCd].count += 1;
      } else {
        acc[svarCd] = { price: Number(price), count: 1 };
      }
      return acc;
    },
    {},
  );

  const labels = Object.keys(aggregatedData);
  const prices = labels.map((label) => aggregatedData[label].price);
  const counts = labels.map((label) => aggregatedData[label].count);

  // 이름 순서에 따라 데이터를 정렬합니다.
  const sortedIndices = labels
    .map((label, index) => ({ label, index }))
    .sort((a, b) => a.label.localeCompare(b.label))
    .map((item) => item.index);

  const sortedLabels = sortedIndices.map((index) => labels[index]);
  const sortedPrices = sortedIndices.map((index) => prices[index]);
  const sortedCounts = sortedIndices.map((index) => counts[index]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const chartData = {
    labels: sortedLabels,
    datasets: [
      {
        data: sortedPrices,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    onClick: (_event, elements) => {
      if (elements.length > 0) {
        const { index } = elements[0];
        setSelectedIndex(index);
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label(context) {
            const label = context.label || '';
            const value = context.raw || '';
            const count = sortedCounts[context.dataIndex];
            return `${label}: ${value}원 (총 ${count}번)`;
          },
        },
      },
    },
  };

  return (
    <div className="flex items-start justify-between">
      <div className="w-40 h-40">
        <Pie data={chartData} options={options} />
      </div>
      <div className="flex flex-col gap-2 text-sm font-semibold border-2 rounded-lg px-2 py-4 shadow-lg">
        <p>{sortedLabels[selectedIndex]}</p>
        <p>쓴 금액: {sortedPrices[selectedIndex]}원</p>
        <p>총 횟수: {sortedCounts[selectedIndex]}번</p>
      </div>
    </div>
  );
}
