import { useEffect, useState } from 'react';
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  Polyline,
} from 'react-kakao-maps-sdk';
import { useFetchPath } from '@/api/useFetchPath';
import { extractNumbersFromString } from '@/hooks/getDifferDistance';
import { DEFAULT_MAP_LEVEL } from '@/constants/Map';
import { Highway } from '@/models/highway';
import { getUpDown } from '@/hooks/getUpDown';

interface IDrawPathProps {
  originLatLng: string;
  destLatLng: string;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  diffDist: string;
}

export default function DrawPath({
  originLatLng,
  destLatLng,
  startLat,
  startLng,
  endLat,
  endLng,
  diffDist,
}: IDrawPathProps) {
  const getPathData = useFetchPath(); // 경로 길찾기 Api 호출
  const [level, setLevel] = useState(DEFAULT_MAP_LEVEL);
  const [pathLat, setPathLat] = useState<number[]>([]);
  const [pathLng, setPathLng] = useState<number[]>([]);
  const [highwayInfo, setHighwayInfo] = useState<Highway[]>([]);
  const diffNum = Number(extractNumbersFromString(diffDist)[0]);

  useEffect(() => {
    switch (true) {
      case diffNum < 50:
        setLevel(10);
        break;
      case diffNum < 150:
        setLevel(12);
        break;
      case diffNum < 400:
        setLevel(13);
        break;
      default:
    }
  }, [diffNum]);

  useEffect(() => {
    getPathData({ originLatLng, destLatLng })
      .then((data) => {
        if (data) {
          setPathLat(data.latArray);
          setPathLng(data.lngArray);
          setHighwayInfo(data.uniqueHighway);
        }
      })
      .catch((error) => {
        console.error('Error fetching path data:', error);
      });
  }, []);
  console.log(highwayInfo);

  let content;
  if (pathLat.length > 0) {
    const path: any[] = [];
    for (let i = 0; i < pathLat.length; i += 1) {
      path.push({ lat: pathLat[i], lng: pathLng[i] });
    }

    content = (
      <>
        <Polyline
          path={[path]}
          strokeWeight={5}
          strokeColor="#158EFF"
          strokeOpacity={0.7}
          strokeStyle="solid"
        />
        {highwayInfo.map((highway, index) => (
          <CustomOverlayMap
            key={index}
            position={{
              lat: highway.latitude,
              lng: highway.longitude,
            }}
          >
            <div className="border rounded-lg bg-text700 p-2">
              <p className="text-xs text-text50">{highway.name}</p>
            </div>
          </CustomOverlayMap>
        ))}
        <p>{getUpDown(startLat, startLng, endLat, endLng)}</p>
      </>
    );
  } else {
    content = <p>준비중</p>;
  }

  return (
    <Map
      center={{
        lat: Number(((startLat + endLat) / 2).toFixed(7)),
        lng: Number(((startLng + endLng) / 2).toFixed(7)),
      }}
      style={{ width: '100%', height: '360px' }}
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
      {content}
    </Map>
  );
}
