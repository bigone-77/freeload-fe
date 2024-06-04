export type OilStation = {
  svarCd: number;
  serviceAreaName: string;
  svarAddr: string;
  oilCompany: string;
  telNo: string;
  gasolinePrice: number;
  lpgPrice?: number;
  diselPrice: number;
  gasolineAver: number;
  diselAver: number;
  lpgAver: number;
  electric: string;
  hydrogen: string;
};

export type OilResponse = {
  error: any;
  data: OilStation[];
  message: boolean;
};
