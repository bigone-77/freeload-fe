'use client';

import { useState } from 'react';
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  Polyline,
} from 'react-kakao-maps-sdk';
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
  const [markerName, setMarkerName] = useState('');
  const [coords, setCoords] = useState<{
    lat: number | undefined;
    lng: number | undefined;
  }>({ lat: undefined, lng: undefined });

  const selectMarkerHandler = ({ id, name }: { id: string; name: string }) => {
    router.push(`?restId=${id}`);
    setSelectedId(id);
    setMarkerName(name);
    setShowModal(true);
    setCoords({
      lat: path[Number(selectedId)]?.lat,
      lng: path[Number(selectedId)]?.lng,
    });
  };

  const onRequestClose = () => {
    setMarkerName('');
    setShowModal(false);
  };

  return (
    <>
      <header className="absolute w-full p-5 top-0 left-0 right-0 shadow-2xl z-10 bg-primary flex items-center gap-2">
        <IoChevronBack
          size={40}
          color="white"
          onClick={() => router.replace('/select/direction')}
        />
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
            lat: path[path.length - 1].lat,
            lng: path[path.length - 1].lng,
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
              onClick={() =>
                selectMarkerHandler({ id: p.restId, name: p.restName })
              }
            />
          ))}
          {showModal && (
            <CustomOverlayMap
              position={{
                lat: coords.lat || 36,
                lng: coords.lng || 127,
              }}
            >
              <div className="border rounded-lg bg-text700 py-2 px-4 text-center">
                <p className="text-xs text-text50">{markerName}</p>
              </div>
            </CustomOverlayMap>
          )}
          <Polyline
            path={path.map((p) => ({ lat: p.lat, lng: p.lng }))}
            strokeWeight={5}
            strokeColor="#158EFF"
            strokeOpacity={0.7}
            strokeStyle="solid"
          />
        </Map>
        {selectedId.length > 0 && showModal && (
          <BottomModal
            id={selectedId}
            coords={coords}
            showModal={showModal}
            onRequestClose={onRequestClose}
          />
        )}
      </main>
    </>
  );
}
