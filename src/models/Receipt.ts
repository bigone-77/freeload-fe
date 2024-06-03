export type Item = {
  name: string;
  count: string;
  price: string;
};

export type Receipt = {
  receiptImage?: string;
  storeName: string;
  storeAddr: string;
  storeTel: string;
  creditDate: string;
  bizNum: string;
  items: Item[];
};
