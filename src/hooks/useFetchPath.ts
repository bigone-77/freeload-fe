'use client';

import axios from 'axios';

import { Highway } from '@/models/Highway';

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

      // TODO: 경로 그리기 위함 -> 위도, 경도 path쌍 구하기
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

      const path: any[] = [];
      for (let i = 0; i < latArray.length; i += 1) {
        path.push({ lat: latArray[i], lng: lngArray[i] });
      }

      // TODO: 너무 짧은 고속도로 제외 (기준 30km 이상)
      const mergedDist: { [key: string]: number } = {};
      response.data.routes[0].sections[0].roads.forEach((road: any) => {
        if (road.name.includes('고속도로')) {
          if (mergedDist[road.name]) {
            mergedDist[road.name] += road.distance;
          } else {
            mergedDist[road.name] = road.distance;
          }
        }
      });

      const uniqueHighway: Highway[] = [];
      Object.keys(mergedDist).forEach((name) => {
        if (mergedDist[name] >= 20000) {
          uniqueHighway.push({
            name,
            latitude: response.data.routes[0].sections[0].roads.find(
              (road: any) => road.name === name,
            ).vertexes[1],
            longitude: response.data.routes[0].sections[0].roads.find(
              (road: any) => road.name === name,
            ).vertexes[0],
          });
        }
      });

      return { path, uniqueHighway };
    } catch (error) {
      console.log(error);
    }
  };
  return getPath;
};
