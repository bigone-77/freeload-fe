'use client';

import { useSearchParams } from 'next/navigation';

interface ICustomerLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ICustomerLayoutProps) {
  const params = useSearchParams();
  return (
    <div className="bg-text100 h-screen overscroll-y-auto pb-32">
      <header className="mx-4 bg-primary text-white py-6 border rounded-b-xl text-center">
        <h1 className="text-2xl">{params.get('restNm')}</h1>
      </header>
      {children}
    </div>
  );
}
