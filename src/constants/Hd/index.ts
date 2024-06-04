const HDQR = [
  { hdqrCd: '600000', hdqrNm: '대구경북본부' },
  { hdqrCd: '700000', hdqrNm: '부산경남본부' },
  { hdqrCd: '400000', hdqrNm: '대전충남본부' },
  { hdqrCd: '200000', hdqrNm: '수도권본부' },
  { hdqrCd: '500000', hdqrNm: '광주전남본부' },
  { hdqrCd: '990000', hdqrNm: '-' },
  { hdqrCd: '300000', hdqrNm: '강원본부' },
  { hdqrCd: '900000', hdqrNm: '충북본부' },
  { hdqrCd: '800000', hdqrNm: '전북본부' },
];

// 본부 코드를 입력받아 본부명을 반환하는 함수
export function getHdqrName(hdqrCd: string) {
  const hdqr = HDQR.find((item) => item.hdqrCd === hdqrCd);
  return hdqr ? hdqr.hdqrNm : null;
}
