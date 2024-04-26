/* eslint-disable no-plusplus */
const getYears = () => {
  const Years: number[] = [];
  for (let index = new Date().getFullYear(); index >= 1900; index--) {
    Years.push(index);
  }
  return Years;
};

export default getYears;
