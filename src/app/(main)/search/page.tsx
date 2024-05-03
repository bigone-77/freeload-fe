'use client';

import { useSearchParams } from 'next/navigation';

import Loader from '@/components/Loader';
import DrawPath from './_component/DrawPath';

export default function SearchPage() {
  const params = useSearchParams();
  const originLatLng = params.get('originLatLng');
  const destLatLng = params.get('destLatLng');

  if (originLatLng && destLatLng) {
    return <DrawPath originLatLng={originLatLng} destLatLng={destLatLng} />;
  }

  return <Loader />;
}
