'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import Header from './_components/Header';

interface IProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: IProfileLayoutProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <div>
      <header className="flex items-center pt-16 pb-10 pl-10 bg-primary">
        <p className="font-bold text-3xl text-text50">마이페이지</p>
      </header>
      <div className="py-8 h-screen bg-text50 rounded-t-2xl -translate-y-4 shadow-lg overflow-y-auto">
        {segment !== null && <Header />}
        {children}
      </div>
    </div>
  );
}
