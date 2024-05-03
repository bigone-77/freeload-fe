import { useState, useEffect } from 'react';

const useKeywordSearchList = (keyword: string) => {
  const [addressList, setAddressList] = useState<any[]>([]);

  useEffect(() => {
    const ps = new kakao.maps.services.Places();

    const placeSearchCB = (data: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        setAddressList(data);
      } else {
        setAddressList([]);
      }
    };
    ps.keywordSearch(keyword, placeSearchCB);
  }, [keyword]);

  return addressList;
};

export default useKeywordSearchList;
