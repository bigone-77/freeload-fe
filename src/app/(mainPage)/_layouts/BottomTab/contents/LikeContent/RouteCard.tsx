'use client';

import { FaCar } from 'react-icons/fa';
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
      className="w-full p-4 flex items-center font-semibold"
      onClick={() =>
        router.push(
          `/search/${startAddr}/${endAddr}?originLatLng=${startLatLng}&destLatLng=${endLatLng}`,
        )
      }
    >
      <span className="w-12 h-12 rounded-full bg-text200 flex items-center justify-center mr-4">
        <FaCar size={30} color="#333333" />
      </span>
      <section className="inline-block">
        <div className="flex items-center gap-3">
          <p>{startAddr}</p>
          <FaArrowRightLong color="#CCCCCC" />
        </div>
        <p className="w-full mt-3">{endAddr}</p>
      </section>
    </div>
  );
}
