'use client';

import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { FoodTag } from '@/models/Food';

interface IMenubarProps {
  fix: boolean;
  value: FoodTag;
  setValue: Dispatch<SetStateAction<FoodTag>>;
}

export default function Menubar({ fix, value, setValue }: IMenubarProps) {
  return (
    <aside
      className={`${fix && 'fixed top-0 left-0 right-0'} p-4 border-y bg-white flex place-items-center gap-4 overflow-x-scroll scroll-smooth`}
    >
      <span
        className={`flex-none w-20 h-12 border rounded-lg p-2 ${value === 'ALL' ? 'bg-primary text-white' : 'bg-transparent text-text400'}`}
        onClick={() => setValue('ALL')}
      >
        <Link href="?sort=">
          <p className="text-center">All</p>
        </Link>
      </span>
      <span
        className={`flex-none w-20 h-12 border rounded-lg p-2 ${value === 'RECOMMEND' ? 'bg-primary text-white' : 'bg-transparent text-text400'}`}
        onClick={() => setValue('RECOMMEND')}
      >
        <Link href="?sort=RECOMMEND">
          <p className="text-center">추천메뉴</p>
        </Link>
      </span>
      <span
        className={`flex-none w-20 h-12 border rounded-lg p-2 ${value === 'BEST' ? 'bg-primary text-white' : 'bg-transparent text-text400'}`}
        onClick={() => setValue('BEST')}
      >
        <Link href="?sort=BEST">
          <p className="text-center">인기메뉴</p>
        </Link>
      </span>
      <span
        className={`flex-none w-20 h-12 border rounded-lg p-2 ${value === 'SEASON' ? 'bg-primary text-white' : 'bg-transparent text-text400'}`}
        onClick={() => setValue('SEASON')}
      >
        <Link href="?sort=SEASON">
          <p className="text-center">계절메뉴</p>
        </Link>
      </span>
      <span
        className={`flex-none w-20 h-12 border rounded-lg p-2 ${value === 'PREMIUM' ? 'bg-primary text-white' : 'bg-transparent text-text400'}`}
        onClick={() => setValue('PREMIUM')}
      >
        <Link href="?sort=PREMIUM">
          <p className="text-center">프리미엄</p>
        </Link>
      </span>
    </aside>
  );
}
