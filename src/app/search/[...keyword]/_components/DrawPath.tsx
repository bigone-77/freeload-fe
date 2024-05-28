import { CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk';
import { Highway } from '@/models/Highway';

interface IDrawPathProps {
  path: any[];
  highwayInfo?: Highway[];
}

export default function DrawPath({ path, highwayInfo }: IDrawPathProps) {
  return (
    <>
      <Polyline
        path={[path]}
        strokeWeight={5}
        strokeColor="#158EFF"
        strokeOpacity={0.7}
        strokeStyle="solid"
      />
      {highwayInfo?.map((highway, index) => (
        <CustomOverlayMap
          key={index}
          position={{
            lat: highway.latitude,
            lng: highway.longitude,
          }}
          zIndex={10}
        >
          <div className="border rounded-lg bg-text700 p-2">
            <p className="text-xs text-text50">{highway.name}</p>
          </div>
        </CustomOverlayMap>
      ))}
    </>
  );
}
