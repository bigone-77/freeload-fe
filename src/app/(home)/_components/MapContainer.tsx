'use client';

import { useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Coordinates } from '@/models/location';
import { GiHamburgerMenu } from 'react-icons/gi';
import WeatherCard from './WeatherCard';
import { fetchWeather } from '../_api/getWeather';

export default function MapContainer({
  latitude: curLat,
  longitude: curLng,
}: Coordinates) {
  const router = useRouter();
  const mapRef = useRef<kakao.maps.Map>(null);
  const [location, setLocation] = useState<Coordinates>({
    latitude: curLat,
    longitude: curLng,
  });

  const mapZoomChangeHandler = (map: kakao.maps.Map) => {
    if (map.getLevel() < 4) {
      fetchWeather({
        latitude: location.latitude,
        longitude: location.longitude,
      });
      console.log('레벨 체인지에 따른 페칭 이벤트 발생');
    }
  };

  const mapDragHandler = (map: kakao.maps.Map) => {
    setLocation({
      latitude: map.getCenter().getLat(),
      longitude: map.getCenter().getLng(),
    });
    if (map.getLevel() < 4) {
      fetchWeather({
        latitude: location.latitude,
        longitude: location.longitude,
      });
      console.log('중심 좌표 체인지에 따른 페칭 이벤트 발생');
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
        <GiHamburgerMenu size={50} color="blue" />
        <input
          className="border-4 rounded-lg w-full px-2 py-5 outline-none font-bold text-xl border-primary focus:border-primary"
          placeholder="어디로 갈까요?"
          onSelect={() => router.push('/search')}
        />
      </div>
      <div className="absolute bottom-32 left-10 z-10 w-24 h-24">
        <WeatherCard />
        <button type="button" onClick={backOriginCenterHandler}>
          <Image
            src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714383377/reset-location.png"
            alt="back-icon"
            width={60}
            height={60}
            priority
          />
        </button>
      </div>
    </>
  );
}
