'use client';

import { GrPhone, GrOverview } from '@/constants/Icons';

import { getFormattedDist } from '@/utils/getFormattedDist';
import { Roadview } from 'react-kakao-maps-sdk';

interface IPlaceCardProps {
  name: string;
  category: string;
  dist: string;
  lat: string;
  lon: string;
  phone: string;
}

export default function PlaceCard({
  name,
  category,
  dist,
  lat,
  lon,
  phone,
}: IPlaceCardProps) {
  return (
    <div className="border rounded-xl shadow-lg p-4 mx-4 relative">
      <section className="flex items-center justify-between">
        <h1>{name}</h1>
        <span className="border flex items-center justify-center p-2 shadow-lg">
          <GrOverview size={20} />
        </span>
      </section>
      <h2 className="my-2">{category}</h2>
      <section className="flex items-center justify-between">
        <h4>{getFormattedDist(Number(dist))}</h4>
        <div className="flex items-center justify-center gap-[2px]">
          {phone && <GrPhone />}
          <h3>{phone}</h3>
        </div>
      </section>
      <Roadview
        position={{
          lat: Number(lat),
          lng: Number(lon),
          radius: 50,
        }}
        className="w-full h-52"
      />
    </div>
  );
}
