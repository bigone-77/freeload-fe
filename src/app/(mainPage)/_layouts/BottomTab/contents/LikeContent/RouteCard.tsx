'use client';

import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

import { Route } from '@/models/Route';
import { useRouter } from 'next/navigation';

export default function RouteCard({
  startAddr,
  startLatLng,
  endAddr,
  endLatLng,
}: Route) {
  const router = useRouter();

  return (
    <div
      className="w-full p-4 flex items-center justify-between"
      onClick={() =>
        router.push(
          `/search/${startAddr}/${endAddr}?originLatLng=${startLatLng}&destLatLng=${endLatLng}`,
        )
      }
    >
      <section className="flex items-center">
        <Image
          src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714471493/start-area.svg"
          alt="start"
          width={15}
          height={15}
        />
        {startAddr}
      </section>
      <FaArrowRightLong />
      <section className="flex items-center">
        <Image
          src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714471493/end-area.svg"
          alt="end"
          width={15}
          height={15}
        />
        {endAddr}
      </section>
    </div>
  );
}
