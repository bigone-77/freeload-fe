import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/store';

const useKeywordSearchList = (keyword: string, dist?: number) => {
  const [addressList, setAddressList] = useState<any[]>([]);

  const currentLatLng = useSelector(
    (state: RootState) => state.currentLocation,
  );

  useEffect(() => {
    // TODO: Window 객체에 카카오 맵이 있는지 검사
    const checkKakaoMaps = () => {
      if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services) {
        return true;
      }
      return false;
    };

    // TODO: checkKakaoMaps 함수를 통해 카카오 맵 객체가 있다면 해당 액션 수행하기
    const initializePlaces = () => {
      if (checkKakaoMaps()) {
        const ps = new kakao.maps.services.Places();

        const placeSearchCB = (data: any, status: any) => {
          if (status === kakao.maps.services.Status.OK) {
            setAddressList(data);
          } else {
            setAddressList([]);
          }
        };

        const currentCoordinate = new kakao.maps.LatLng(
          currentLatLng.latitude!,
          currentLatLng.longitude!,
        );

        const options = {
          location: currentCoordinate,
          radius: dist,
          size: 10,
          sort: kakao.maps.services.SortBy.DISTANCE,
        };

        ps.keywordSearch(keyword, placeSearchCB, options);
      } else {
        console.error('Kakao Maps API is not loaded');
      }
    };

    // TODO: window에 카카오 맵 객체가 있다면 place 검색 액션 활성화
    if (checkKakaoMaps()) {
      initializePlaces();
    } else {
      // TODO: 그렇지 않다면 window 객체 재탐색
      const interval = setInterval(() => {
        if (checkKakaoMaps()) {
          clearInterval(interval);
          initializePlaces();
        }
      }, 100);
    }
  }, [keyword, dist, currentLatLng]);

  return addressList;
};

export default useKeywordSearchList;
