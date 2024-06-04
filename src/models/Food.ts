export type FoodTag = 'ALL' | 'BEST' | 'RECOMMEND' | 'SEASON' | 'PREMIUM';

export type Food = {
  seq: number;
  svarCd: number;
  stdRestNm: string;
  svarAddr: string;
  bestfoodyn: string;
  foodCost: number;
  foodNm: string;
  lsttmAltrDttm: string;
  premiumyn: string;
  recommendyn: string;
  seasonMenu: string;
};

export type FoodResponse = {
  error: any;
  message: boolean;
  data: Food[];
};
