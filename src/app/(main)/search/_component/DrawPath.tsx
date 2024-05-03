'use client';

import { useEffect, useRef } from 'react';

import { useFetchPath } from '@/api/useFetchPath';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { getDifferDistance } from '@/hooks/getDifferDistance';

interface IDrawPathProps {
  originLatLng: string;
  destLatLng: string;
}

export default function DrawPath({ originLatLng, destLatLng }: IDrawPathProps) {
  const searchMapRef = useRef<kakao.maps.Map>(null);
  const startLat = Number(originLatLng.split(',')[1]);
  const startLng = Number(originLatLng.split(',')[0]);

  const endLat = Number(destLatLng.split(',')[1]);
  const endLng = Number(destLatLng.split(',')[0]);

  const getPathData = useFetchPath();
  console.log(getDifferDistance(startLat, startLng, endLat, endLng));
  console.log(searchMapRef.current?.getLevel());

  useEffect(() => {
    getPathData({ originLatLng, destLatLng });
  }, [getPathData, originLatLng, destLatLng]);

  return (
    <Map
      center={{
        lat: Number(((startLat + endLat) / 2).toFixed(7)),
        lng: Number(((startLng + endLng) / 2).toFixed(7)),
      }}
      ref={searchMapRef}
      style={{ width: '100%', height: '360px' }}
    >
      <MapMarker position={{ lat: startLat, lng: startLng }} />
      <MapMarker
        position={{ lat: endLat, lng: endLng }}
        image={{
          src: 'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714471493/end-area.svg',
          size: {
            width: 40,
            height: 40,
          },
        }}
      />
    </Map>
  );
}
