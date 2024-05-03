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
  }) => {
    try {
      const response = await axios.get(MOBILITY_URL, {
        params: {
          origin: originLatLng,
          destination: destLatLng,
          priority: 'RECOMMEND',
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return getPath;
};
