export type OilStation = {
  oilId?: string;
  oilName: string;
  oilCompany: string;
  diselPrice: number;
  gasolinePrice: number;
  telNum: string;
  electric: boolean;
  hydrogen: boolean;
  lpgPrice?: number;
};
