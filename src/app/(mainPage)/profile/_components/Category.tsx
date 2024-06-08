'use client';

import { IoChevronForward } from '@/constants/Icons';
import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons/lib';

interface ICategoryProps {
  iconName: IconType;
  name: string;
  none?: boolean;
  url?: string;
}

export default function Category({
  iconName: Icon,
  name,
  none,
  url,
}: ICategoryProps) {
  const router = useRouter();
  return (
    <div
      className={`flex items-center justify-between pb-5 ${!none && 'border-b'} `}
      onClick={() => router.push(`/profile/${url}`)}
    >
      <div className="flex items-center gap-2">
        <Icon size={30} />
        <p>{name}</p>
      </div>
      {!none && <IoChevronForward size={30} />}
    </div>
  );
}
