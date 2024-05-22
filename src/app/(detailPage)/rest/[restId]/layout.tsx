'use client';

import { useRouter, useSelectedLayoutSegment } from 'next/navigation';

import { IoChevronBack, CiSearch } from '@/constants/Icons';

interface IDetailLayoutProps {
  children: React.ReactNode;
}

export default function DetailLayout({ children }: IDetailLayoutProps) {
  const router = useRouter();
  const segment = useSelectedLayoutSegment();

  const getContent = (param: string | null) => {
    switch (param) {
      case null:
        return (
          <>
            <p className="font-semibold">고속도로 휴게소</p>
            <CiSearch size={30} />
          </>
        );
      case 'restaurant':
        return <p className="text-2xl font-semibold">메뉴 정보</p>;
      case 'oil':
        return <p className="text-2xl font-semibold">주유소 정보</p>;
      default:
        return null;
    }
  };
  const content = getContent(segment);

  return (
    <div className="w-full h-screen">
      <nav
        className={`flex items-center px-6 py-10 ${!segment ? 'justify-between  bg-primary text-white' : 'border-b-2 gap-6 bg-transparent text-text700'}`}
      >
        <IoChevronBack size={30} onClick={() => router.back()} />
        {content}
      </nav>
      {children}
    </div>
  );
}
