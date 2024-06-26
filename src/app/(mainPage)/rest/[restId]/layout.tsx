'use client';

import { useRouter, useSelectedLayoutSegments } from 'next/navigation';

import { IoChevronBack, CiSearch } from '@/constants/Icons';

interface IDetailLayoutProps {
  children: React.ReactNode;
  params: {
    restId: string;
  };
}

export default function DetailLayout({ children, params }: IDetailLayoutProps) {
  const router = useRouter();
  const segments = useSelectedLayoutSegments();

  const backHandler = () => {
    if (segments.length === 0) {
      router.back();
    }
    router.push(`/rest/${params.restId}`);
  };

  const getContent = (param: string | null) => {
    switch (param) {
      case undefined:
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
      case 'customer':
        return <p className="text-2xl font-semibold">고객평가</p>;
      case 'review':
        return <p className="text-2xl font-semibold">리뷰 남기기</p>;
      default:
        return null;
    }
  };
  const content = getContent(segments[segments.length - 1]);

  return (
    <div className="w-full h-full">
      <nav
        className={`flex items-center p-6 ${segments[segments.length - 1] === undefined ? 'justify-between  bg-primary text-white' : 'border-b-2 gap-6 bg-transparent text-text700'}`}
      >
        <IoChevronBack size={30} onClick={backHandler} />
        {content}
      </nav>
      {children}
    </div>
  );
}
