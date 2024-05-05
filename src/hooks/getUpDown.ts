export const getUpDown = (
  startLat: number,
  startLng: number,
  endLat: number,
  endLng: number,
): string => {
  if (startLat < endLat && startLng < endLng) {
    return '상행선';
  }
  if (startLat > endLat && startLng > endLng) {
    return '하행선';
  }
  return '상/하행선을 판단할 수 없습니다.';
};
