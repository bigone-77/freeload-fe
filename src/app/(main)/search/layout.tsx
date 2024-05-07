'use client';

import { useSearchParams } from 'next/navigation';

import BottomTab from '@/widgets/search/BottomTab';
import Header from '@/widgets/search/Header';

interface ISearchLayoutProps {
  children: React.ReactNode;
}

export default function SearchLayout({ children }: ISearchLayoutProps) {
  const params = useSearchParams();

  const originAddr = params.get('originAddr');
  const destAddr = params.get('destAddr');
  // console.log(params.get('originAddr'));
  // console.log(params.get('destAddr'));

  return (
    <div>
      {originAddr && destAddr && (
        <Header originAddr={originAddr} destAddr={destAddr} />
      )}
      {children}
      <BottomTab />
    </div>
  );
}
