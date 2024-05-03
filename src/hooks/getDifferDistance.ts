function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

export const getDifferDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) => {
  const earthRadiusKm = 6371;

  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);

  const radLat1 = degreesToRadians(lat1);
  const radLat2 = degreesToRadians(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(radLat1) *
      Math.cos(radLat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const difDistance = earthRadiusKm * c;
  if (difDistance >= 1) {
    return `${difDistance.toFixed(1)}km`;
  }
  return `${Math.round(difDistance * 1000)}m`;
};
