export const truncate = (str: string, n: number) => {
  if (str.length > n) {
    return `${str.substring(0, n)}...`;
  }
  return str;
};
