'use client';

import Image from 'next/image';
import { useSearchParams, useSelectedLayoutSegment } from 'next/navigation';

import {
  RiMap2Line,
  GoStar,
  TbMapSearch,
  MdOutlinePersonOutline,
} from '@/constants/Icons';
import CategoryBox from './CategoryBox';

export default function Footer() {
  const segment = useSelectedLayoutSegment();
  const params = useSearchParams();

  return (
    <footer className="grid grid-cols-5 shadow-2xl place-items-center fixed bottom-0 left-0 right-0 w-full bg-text50 z-20">
      <CategoryBox
        iconName={RiMap2Line}
        name="주변"
        url="home"
        selected={segment === 'home' && params.get('like') !== 'true'}
      />
      <CategoryBox
        iconName={GoStar}
        name="저장"
        url="home?like=true"
        selected={params.get('like') === 'true'}
      />
      <div className="rounded-full bg-primary flex items-center justify-center -translate-y-6 w-16 h-16">
        <Image
          src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1715220807/scan.svg"
          alt="qu-icon"
          width={25}
          height={24}
          priority
        />
      </div>
      <CategoryBox
        iconName={TbMapSearch}
        name="선택"
        url="select/road"
        selected={segment === 'select'}
      />
      <CategoryBox
        iconName={MdOutlinePersonOutline}
        name="MY"
        url="profile"
        selected={segment === 'profile'}
      />
    </footer>
  );
}
