'use client';

import { Fade } from 'react-awesome-reveal';

import Header from './_components/Header';
import PieChart from './_components/PieChart';
import CreditCard from './_components/CreditCard';

const data = [
  { name: '부산휴게소', price: 13000, date: '2024년 3월 2일', way: 'receipt' },
  { name: '서울휴게소', price: 12000, date: '2024년 1월 22일', way: 'receipt' },
  { name: '서울휴게소', price: 1300, date: '2024년 5월 30일', way: 'credit' },
];

export default function AccountPage() {
  return (
    <>
      <Header />
      <main className="py-10 px-2">
        <Fade duration={3000}>
          <p className="font-bold text-xl text-primary">지금까지 4번 방문,</p>
        </Fade>
        <Fade duration={5000}>
          <p className="pt-4 font-bold text-xl text-primary">
            총 24,000원 쓰셨군요!
          </p>
        </Fade>
        <section className="my-10">
          <PieChart data={data} />
        </section>

        <section className="flex flex-col h-full p-4 border rounded-md gap-4">
          <div className="overflow-auto h-full">
            {data.map((d, index) => (
              <CreditCard
                key={index}
                restNm={d.name}
                price={d.price}
                date={d.date}
                way={d.way}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
