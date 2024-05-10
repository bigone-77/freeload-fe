'use client';

import { useSearchParams } from 'next/navigation';
import {
  extractNumbersFromString,
  getDifferDistance,
} from '@/utils/getDifferDistance';
import Loader from '@/Common/Loader';
import PathMap from './_components/PathMap';

export default function Page() {
  const params = useSearchParams();
  const originLatLng = params.get('originLatLng');
  const destLatLng = params.get('destLatLng');

  if (originLatLng && destLatLng) {
    const startLat = Number(originLatLng.split(',')[1]);
    const startLng = Number(originLatLng.split(',')[0]);

    const endLat = Number(destLatLng.split(',')[1]);
    const endLng = Number(destLatLng.split(',')[0]);
    const diffDist = extractNumbersFromString(
      getDifferDistance(startLat, startLng, endLat, endLng),
    );

    return (
      <main className="absolute top-0 left-0 right-0 w-full h-full">
        <PathMap
          originLatLng={originLatLng}
          destLatLng={destLatLng}
          startLat={startLat}
          startLng={startLng}
          endLat={endLat}
          endLng={endLng}
          diffDist={Number(diffDist[0])}
        />
      </main>
    );
  }
  return <Loader />;
}
