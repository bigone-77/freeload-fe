'use client';

import { useSearchParams } from 'next/navigation';

import Loader from '@/components/Loader';
import { getDifferDistance } from '@/utils/getDifferDistance';
import DrawPath from './_component/DrawPath';

export default function SearchPage() {
  const params = useSearchParams();
  const originLatLng = params.get('originLatLng');
  const destLatLng = params.get('destLatLng');

  if (originLatLng && destLatLng) {
    const startLat = Number(originLatLng.split(',')[1]);
    const startLng = Number(originLatLng.split(',')[0]);

    const endLat = Number(destLatLng.split(',')[1]);
    const endLng = Number(destLatLng.split(',')[0]);
    const diffDist = getDifferDistance(startLat, startLng, endLat, endLng);
    return (
      <main className="flex w-full h-full flex-col items-center justify-between">
        <DrawPath
          originLatLng={originLatLng}
          destLatLng={destLatLng}
          startLat={startLat}
          startLng={startLng}
          endLat={endLat}
          endLng={endLng}
          diffDist={diffDist}
        />
      </main>
    );
  }

  return <Loader />;
}
