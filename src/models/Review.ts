export type Review = {
  email: string;
  svarCd: string;
  visitedDate: string;
  content: string;
  review_id: number;
  storeName: string;
  profile_image: string;
  price: string;
  restNm?: string;
  way: 'receipt' | 'credit';
};

export type ReviewResponse = {
  error: any;
  message: boolean;
  data: Review[];
};
