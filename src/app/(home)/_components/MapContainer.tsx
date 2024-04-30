'use client';

import { useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Coordinates } from '@/models/location';
import { GiHamburgerMenu } from 'react-icons/gi';
import WeatherCard from './WeatherCard';
import BottomModal from './BottomTab';

export default function MapContainer({
  latitude: curLat,
  longitude: curLng,
}: Coordinates) {
  const router = useRouter();
  const mapRef = useRef<kakao.maps.Map>(null);
  const [weatherOn, setWeatherOn] = useState(true);
  const [location, setLocation] = useState<Coordinates>({
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
    if (map.getLevel() > 3) {
      setWeatherOn(false);
    } else {
      setWeatherOn(true);
    }
  };

  const backOriginCenterHandler = () => {
    // 본래 좌표로 돌아가기
    setLocation({
      latitude: curLat,
      longitude: curLng,
    });
  };

  return (
    <>
      <Map
        className="w-full h-screen"
        ref={mapRef}
        center={{ lat: location.latitude!, lng: location.longitude! }}
        level={3}
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
      <div className="absolute top-12 z-10 w-4/5 flex gap-4 items-center justify-center">
        <GiHamburgerMenu size={50} color="skyblue" />
        <input
          className="border-4 rounded-lg w-full p-2 outline-none font-bold text-xl border-primary focus:border-primary"
          placeholder="어디로 갈까요?"
          onSelect={() => router.push('/search')}
        />
      </div>
      <div className="absolute flex flex-col gap-1 items-center justify-center bottom-28 left-6 z-10">
        {weatherOn && (
          <WeatherCard
            latitude={location.latitude}
            longitude={location.longitude}
          />
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
      <BottomModal
        latitude={location.latitude}
        longitude={location.longitude}
      />
    </>
  );
}
