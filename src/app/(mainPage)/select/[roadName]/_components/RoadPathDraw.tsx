'use client';

import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useRouter } from 'next/navigation';

import { RestPathType } from '@/models/RestPath';
import { IoChevronBack } from '@/constants/Icons';
import BottomModal from './BottomModal';

interface IRoadPathDrawProps {
  roadName: string;
  direction: string;
  path: RestPathType[];
}

export default function RoadPathDraw({
  roadName,
  direction,
  path,
}: IRoadPathDrawProps) {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState('');
  const [showModal, setShowModal] = useState(false);

  const selectMarkerHandler = (id: string) => {
    router.push(`?restId=${id}`);
    setSelectedId(id);
    setShowModal(true);
  };

  return (
    <>
      <header className="absolute w-full p-5 top-0 left-0 right-0 shadow-2xl z-10 bg-primary flex items-center gap-2">
        <IoChevronBack size={40} color="white" onClick={() => router.back()} />
        <span className="flex flex-col gap-2 text-text50 font-semibold text-2xl">
          <p>{roadName}</p>
          <span className="flex items-center">
            <p>{direction}</p>
            <p className="ml-2">방향</p>
          </span>
        </span>
      </header>

      <main>
        <Map
          center={{
            lat: path[0].lat,
            lng: path[0].lng,
          }}
          className="w-full h-screen"
          level={12}
        >
          {path.map((p, idx) => (
            <MapMarker
              key={idx}
              position={{ lat: p.lat, lng: p.lng }}
              image={{
                src: 'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714471493/end-area.svg',
                size: {
                  width: 40,
                  height: 40,
                },
              }}
              onClick={() => selectMarkerHandler(p.restId)}
            />
          ))}
        </Map>
        {selectedId.length > 0 && showModal && (
          <BottomModal
            id={selectedId}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </main>
    </>
  );
}
