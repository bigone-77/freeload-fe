'use client';

import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useDispatch } from 'react-redux';

import { setMapCenterLocation } from '@/shared/store/slices/getMapCenterSlice';
import { SlTarget } from '@/constants/Icons';

// 여기서는 Props로 현재 사용자의 위도, 경도를 받는다.
export default function MapContainer({
  latitude: curLat,
  longitude: curLng,
}: {
  latitude: number;
  longitude: number;
}) {
  const dispatch = useDispatch();

  const [location, setLocation] = useState({
    // 현재 지도의 중심좌표(현재 유저의 위치 아님!!)
    latitude: curLat,
    longitude: curLng,
  });
  const [isPanto, setIsPanto] = useState(false); // 지도 부드럽게 이동

  const mapDragHandler = (map: kakao.maps.Map) => {
    setLocation({
      latitude: map.getCenter().getLat(),
      longitude: map.getCenter().getLng(),
    });
    dispatch(
      setMapCenterLocation({
        latitude: map.getCenter().getLat(),
        longitude: map.getCenter().getLng(),
      }),
    );
  };

  const backOriginCenterHandler = () => {
    // 본래 좌표로 돌아가기
    setIsPanto(true);
    setLocation({
      latitude: curLat,
      longitude: curLng,
    });
    dispatch(
      setMapCenterLocation({
        latitude: curLat,
        longitude: curLng,
      }),
    );
  };

  return (
    <>
      <Map
        className="w-full h-screen"
        center={{ lat: location.latitude!, lng: location.longitude! }}
        isPanto={isPanto}
        onDragEnd={(map) => mapDragHandler(map)}
      >
        <MapMarker
          image={{
            src: 'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1715234862/user-addr.svg',
            size: {
              width: 30,
              height: 30,
            },
          }}
          position={{ lat: curLat, lng: curLng }}
        />
      </Map>
      <div className="absolute left-[22px] bottom-36 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-2xl">
        <SlTarget color="#158EFF" size={25} onClick={backOriginCenterHandler} />
      </div>
    </>
  );
}
