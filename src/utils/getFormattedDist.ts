export const getFormattedDist = (dist: number) => {
  if (dist >= 1000) {
    return `${(dist / 1000).toFixed(1)}km`;
  }
  return `${dist}m`;
};
