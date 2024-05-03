'use client';

import { useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { Coordinates } from '@/models/location';
import { DEFAULT_MAP_LEVEL } from '@/constants/Map';
import { setMapCenterLocation } from '@/store/slices/getMapCenterSlice';
import Loader from '@/components/Loader';
import WeatherCard from './WeatherCard';

// 현재 유저가 있는 위치를 prop으로 전달받는다.
export default function MapContainer({
  latitude: curLat,
  longitude: curLng,
}: Coordinates) {
  const dispatch = useDispatch();
  const mapRef = useRef<kakao.maps.Map>(null);

  const [weatherOn, setWeatherOn] = useState(true); // 지도에 날씨 띄울지 말지
  const [level, setLevel] = useState(DEFAULT_MAP_LEVEL); // 지도의 줌 레벨
  const [isPanto, setIsPanto] = useState(false); // 지도 부드럽게 이동
  const [location, setLocation] = useState<Coordinates>({
    // 현재 지도의 중심좌표
    latitude: curLat,
    longitude: curLng,
  });

  const mapZoomChangeHandler = (map: kakao.maps.Map) => {
    if (map.getLevel() > 3) {
      setWeatherOn(false);
    } else {
      setWeatherOn(true);
    }
  };

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
    if (map.getLevel() > 3) {
      setWeatherOn(false);
    } else {
      setWeatherOn(true);
    }
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
    setLevel(1);
  };

  return (
    <>
      <Map
        className="w-full h-screen"
        ref={mapRef}
        center={{ lat: location.latitude!, lng: location.longitude! }}
        isPanto={isPanto}
        level={level}
        onZoomChanged={(map) => mapZoomChangeHandler(map)}
        onDragEnd={(map) => mapDragHandler(map)}
      >
        <MapMarker
          image={{
            src: 'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714383100/my-location.png',
            size: { width: 50, height: 50 },
          }}
          position={{ lat: curLat!, lng: curLng! }}
        />
      </Map>
      <div className="absolute flex flex-col gap-1 items-center justify-center bottom-28 left-6 z-10">
        {weatherOn ? (
          <WeatherCard
            latitude={location.latitude!}
            longitude={location.longitude!}
          />
        ) : (
          <Loader />
        )}
        <button type="button" onClick={backOriginCenterHandler}>
          <Image
            src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714383377/reset-location.png"
            alt="back-icon"
            width={40}
            height={40}
            priority
          />
        </button>
      </div>
    </>
  );
}
