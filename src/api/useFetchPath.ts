'use client';

import axios from 'axios';

import { Highway } from '@/models/highway';

const MOBILITY_URL = 'https://apis-navi.kakaomobility.com/v1/directions';

const removeDuplicates = (arr: Highway[]): Highway[] => {
  const uniqueNames = new Set<string>();
  return arr.filter((item) => {
    if (uniqueNames.has(item.name)) {
      return false; // 이미 존재하는 이름인 경우 필터링
    }
    uniqueNames.add(item.name);
    return true; // 처음 나타난 이름인 경우 유지
  });
};

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

      const latArray: number[] = [];
      const lngArray: number[] = [];
      response.data.routes[0].sections[0].roads.forEach((route: any) =>
        route.vertexes.forEach((v: number, index: number) => {
          if (index % 2 === 0) {
            lngArray.push(v);
          } else {
            latArray.push(v);
          }
        }),
      );
      const highway: Highway[] = [];
      response.data.routes[0].sections[0].roads.forEach((road: any) => {
        if (road.name.includes('고속도로')) {
          highway.push({
            name: road.name,
            latitude: road.vertexes[1],
            longitude: road.vertexes[0],
          });
        }
      });
      const uniqueHighway = removeDuplicates(highway);
      return { latArray, lngArray, uniqueHighway };
    } catch (error) {
      console.log(error);
    }
  };
  return getPath;
};
