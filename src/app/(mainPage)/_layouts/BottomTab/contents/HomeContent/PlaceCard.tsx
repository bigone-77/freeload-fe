'use client';

import { useState } from 'react';

import { GrPhone, GrOverview } from '@/constants/Icons';
import { getFormattedDist } from '@/utils/getFormattedDist';
import PanoramaModal from './PanoramaModal';

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
  const [showPanorama, setShowPanorama] = useState(false);
  return (
    <div className="border rounded-xl shadow-lg p-4 mx-4 relative">
      <section className="flex items-center justify-between">
        <h1>{name}</h1>
        <span
          className="border flex items-center justify-center p-2 shadow-lg"
          onClick={() => setShowPanorama(true)}
        >
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
      {showPanorama && (
        <PanoramaModal
          latitude={Number(lat)}
          longitude={Number(lon)}
          modalOpen={showPanorama}
          setModalOpen={setShowPanorama}
        />
      )}
    </div>
  );
}
