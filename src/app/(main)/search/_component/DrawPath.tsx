import { useEffect, useState } from 'react';
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  Polyline,
} from 'react-kakao-maps-sdk';
import { useFetchPath } from '@/api/useFetchPath';
import { extractNumbersFromString } from '@/utils/getDifferDistance';
import { DEFAULT_MAP_LEVEL } from '@/constants/Map';
import { Highway } from '@/models/highway';
// import { getUpDown } from '@/utils/getUpDown';

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
  const [highwayInfo, setHighwayInfo] = useState<Highway[]>([]);
  const [path, setPath] = useState<any[]>([]);

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
    getPathData({ originLatLng, destLatLng }).then((data) => {
      if (data) {
        // data.uniqueHighway.map((highway) =>
        //   console.log(highway.name.replace('고속도로', '선')),
        // );
        console.log(data.uniqueHighway);

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
      {path && (
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
        </>
      )}
      {/* <p>{getUpDown(startLat, endLat)}</p> */}
    </Map>
  );
}
