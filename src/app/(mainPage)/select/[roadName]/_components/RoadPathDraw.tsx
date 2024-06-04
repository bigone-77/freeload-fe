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
  const [showModal, setShowModal] = useState(false);
  const [selectedPath, setSelectedPath] = useState<RestPathType | null>(null);

  // 단일 휴게소의 정보 찍기 && 모달 열기
  const selectMarkerHandler = ({
    restId,
    restName,
    lat,
    lng,
  }: RestPathType) => {
    setShowModal(true);
    setSelectedPath({
      restId,
      restName,
      lat,
      lng,
    });
    router.push(`?restId=${restId}`);
  };

  const onRequestClose = () => {
    setSelectedPath(null);
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
          <p>{roadName.replace('선', '고속도로')}</p>
          <span className="flex items-center">
            <p>{direction === 'up' ? '상행' : '하행'}</p>
            <p className="ml-2">방향</p>
          </span>
        </span>
      </header>

      <main>
        <Map
          center={{
            lat: path[path.length - 1].lat || 36.34,
            lng: path[path.length - 1].lng || 127.77,
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
                selectMarkerHandler({
                  restId: p.restId,
                  restName: p.restName,
                  lat: p.lat,
                  lng: p.lng,
                })
              }
            />
          ))}
          {showModal && selectedPath && (
            <CustomOverlayMap
              position={{
                lat: selectedPath.lat,
                lng: selectedPath.lng,
              }}
            >
              <div className="border rounded-lg bg-text700 py-2 px-4 text-center">
                <p className="text-xs text-text50">{selectedPath.restName}</p>
              </div>
            </CustomOverlayMap>
          )}
          <Polyline
            path={path
              .sort((a, b) => a.lng - b.lng)
              .filter((p) => p.lat && p.lng)
              .map((p) => ({ lat: p.lat, lng: p.lng }))}
            strokeWeight={5}
            strokeColor="#158EFF"
            strokeOpacity={0.7}
            strokeStyle="solid"
          />
        </Map>
        {selectedPath && showModal && (
          <BottomModal
            id={selectedPath.restId}
            lat={selectedPath.lat}
            lng={selectedPath.lng}
            showModal={showModal}
            onRequestClose={onRequestClose}
          />
        )}
      </main>
    </>
  );
}
