'use client';

import {
  HiMiniArrowsUpDown,
  CgClose,
  PiDotsThreeVerticalBold,
} from '@/constants/Icons';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

interface IHeaderProps {
  originAddr: string;
  destAddr: string;
}

export default function Header({ originAddr, destAddr }: IHeaderProps) {
  const router = useRouter();
  const params = useSearchParams();

  const originLatLng = params.get('originLatLng');
  const destLatLng = params.get('destLatLng');

  return (
    <header className="absolute w-full top-0 left-0 right-0 shadow-2xl z-10 bg-text50">
      <section className="grid grid-cols-9 p-4">
        <HiMiniArrowsUpDown
          size={30}
          color="gray"
          className="self-center justify-self-center"
          onClick={() =>
            router.replace(
              `/search/${destAddr}/${originAddr}?originLatLng=${destLatLng}&destLatLng=${originLatLng}`,
            )
          }
        />

        <div className="flex flex-col gap-3 col-span-7">
          <input
            className="p-3 bg-text100 rounded-md hover:opacity-80 transition-all outline-none"
            value={originAddr}
            readOnly
          />
          <input
            className="p-3 bg-text100 rounded-md hover:opacity-80 transition-all outline-none"
            value={destAddr}
            onClick={() => router.replace('/search')}
            readOnly
          />
        </div>
        <div className="flex flex-col justify-center gap-8 items-center pl-4">
          <Link href="/home">
            <CgClose size={28} />
          </Link>
          <PiDotsThreeVerticalBold size={28} />
        </div>
      </section>
    </header>
  );
}
