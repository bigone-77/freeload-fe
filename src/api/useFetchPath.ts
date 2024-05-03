'use client';

import axios from 'axios';

const MOBILITY_URL = 'https://apis-navi.kakaomobility.com/v1/directions';

export const useFetchPath = () => {
  const getPath = async ({
    originLatLng,
    destLatLng,
  }: {
    originLatLng: string;
    destLatLng: string;
    // eslint-disable-next-line consistent-return
  }) => {
    try {
      const response = await axios.get(MOBILITY_URL, {
        params: {
          origin: originLatLng,
          destination: destLatLng,
          priority: 'RECOMMEND',
        },
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return getPath;
};
