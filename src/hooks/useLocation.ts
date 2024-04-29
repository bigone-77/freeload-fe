import { useEffect, useState } from 'react';
import { setDefaults, geocode, OutputFormat, RequestType } from 'react-geocode';

setDefaults({
  key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
  language: 'ko',
  region: 'kr',
  outputFormat: OutputFormat.JSON,
});

export const useLatLngFromAddress = (address: string) => {
  const [coordinates, setCoordinates] = useState<{
    lat: number | null;
    lng: number | null;
  }>({ lat: null, lng: null });

  useEffect(() => {
    geocode(RequestType.ADDRESS, address)
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        setCoordinates({ lat, lng });
      })
      .catch((error) => console.log(error));
  }, [address]);
  return coordinates;
};

// 위도와 경도를 위치 문자열로 변환하는 훅
export const useAddressFromLatLng = (lat: number, lng: number) => {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    geocode(RequestType.LATLNG, `${lat},${lng}`)
      .then(({ results }) => {
        setAddress(results[0].formatted_address);
      })
      .catch((error) => console.log(error));
  }, [lat, lng]);

  return address;
};
