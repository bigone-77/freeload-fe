import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { DEFAULT_MAP_LEVEL } from '@/constants/Map';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useFetchPath } from '@/hooks/useFetchPath';
import { Highway } from '@/models/Highway';
import DrawPath from './DrawPath';

interface IPathMapProps {
  originLatLng: string;
  destLatLng: string;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  diffDist: number;
  highwayInfo: Highway[];
  setHighwayInfo: Dispatch<SetStateAction<Highway[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export default function PathMap({
  originLatLng,
  destLatLng,
  startLat,
  startLng,
  endLat,
  endLng,
  diffDist,
  highwayInfo,
  setHighwayInfo,
  setIsLoading,
}: IPathMapProps) {
  const getPathData = useFetchPath(); // 경로 길찾기 Api 호출

  const [level, setLevel] = useState(DEFAULT_MAP_LEVEL);
  const [path, setPath] = useState<any[]>([]);

  useEffect(() => {
    switch (true) {
      case diffDist < 50:
        setLevel(10);
        break;
      case diffDist < 150:
        setLevel(12);
        break;
      case diffDist < 400:
        setLevel(13);
        break;
      default:
    }
  }, [diffDist]);

  useEffect(() => {
    getPathData({ originLatLng, destLatLng }).then((data) => {
      if (data) {
        // data.uniqueHighway.map((highway) =>
        //   console.log(highway.name.replace('고속도로', '선')),
        // );
        setIsLoading(true);
        setPath(data.path);
        setHighwayInfo(data.uniqueHighway);
      }
    });
  }, []);

  return (
    <Map
      center={{
        lat: Number(((startLat + endLat) / 2).toFixed(7)),
        lng: Number(((startLng + endLng) / 2).toFixed(7)),
      }}
      className="w-full h-screen"
      level={level}
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
      {path && <DrawPath path={path} highwayInfo={highwayInfo} />}
    </Map>
  );
}
