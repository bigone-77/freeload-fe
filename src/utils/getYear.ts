const getYear = () => {
  const Years: number[] = [];
  for (let index = new Date().getFullYear(); index >= 1900; index -= 1) {
    Years.push(index);
  }
  return Years;
};

export default getYear;
