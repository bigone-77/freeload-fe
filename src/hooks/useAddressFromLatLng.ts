import { useEffect, useState } from 'react';
import { geocode, OutputFormat, RequestType, setDefaults } from 'react-geocode';

setDefaults({
  key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
  language: 'ko',
  region: 'kr',
  outputFormat: OutputFormat.JSON,
});

// 위도와 경도를 위치 문자열로 변환하는 훅
export const useAddressFromLatLng = (lat: number, lng: number) => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    geocode(RequestType.LATLNG, `${lat},${lng}`)
      .then(({ results }) => {
        const addr = results[0].formatted_address.split(' ');

        setAddress(`${addr[2]} ${addr[3]}`);
      })
      .catch((error) => console.log(error));
  }, [lat, lng]);

  return address;
};
