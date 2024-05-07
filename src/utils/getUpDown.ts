export const getUpDown = (startLat: number, endLat: number): string => {
  // if (startLat < endLat && startLng < endLng) {
  //   return '상행선';
  // }
  // if (startLat > endLat && startLng > endLng) {
  //   return '하행선';
  // }
  // return '상/하행선을 판단할 수 없습니다.';
  if (startLat - endLat > 0) {
    return '하행선';
  }

  if (startLat - endLat < 0) {
    return '상행선';
  }
  return '상/하행선 구분 불가';
};
