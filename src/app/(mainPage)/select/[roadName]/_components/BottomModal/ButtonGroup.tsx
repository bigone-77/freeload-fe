'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import copy from 'copy-to-clipboard';

import { GiShare, GrOverview } from '@/constants/Icons';

interface IButtonGroupProps {
  coords: {
    lat: number | undefined;
    lng: number | undefined;
  };
}

export default function ButtonGroup({ coords }: IButtonGroupProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_DEV_URL}/${decodeURI(pathname)}?${searchParams}`;
    setCurrentUrl(url);
  }, [pathname, searchParams]);

  const copyHandler = () => {
    copy(currentUrl);
    alert('클립보드에 URL이 저장되었습니다.');
  };

  return (
    <div className="flex items-center gap-2">
      <span
        className={`${isClicked ? 'bg-primary' : 'bg-transparent'} border flex items-center justify-center p-2 shadow-lg rounded-full text-primary`}
        onMouseEnter={() => setIsClicked(true)}
        onMouseLeave={() => setIsClicked(false)}
        onClick={copyHandler}
      >
        <GiShare size={20} color={isClicked ? 'white' : 'black'} />
      </span>
      {coords.lat && (
        <Link
          href={`${decodeURI(pathname)}/panorama?latitude=${coords.lat}&longitude=${coords.lng}`}
          className="border flex items-center justify-center p-2 shadow-lg rounded-full"
        >
          <GrOverview size={20} />
        </Link>
      )}
    </div>
  );
}
