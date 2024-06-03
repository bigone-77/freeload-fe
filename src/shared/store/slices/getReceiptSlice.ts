import { Receipt } from '@/models/Receipt';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Receipt = {
  receiptImage: '',
  storeName: '',
  storeAddr: '',
  storeTel: '',
  creditDate: '',
  bizNum: '',
  items: [],
};

const getReceiptSlice = createSlice({
  name: 'receipt',
  initialState,
  reducers: {
    setReceiptImage: (state, action) => {
      state.receiptImage = action.payload;
    },
    setReceipt: (state, action: PayloadAction<any>) => {
      const { storeInfo, paymentInfo, subResults } = action.payload;

      state.storeName = storeInfo?.name?.text || '';
      state.storeAddr = storeInfo?.addresses?.[0]?.text || '';
      state.storeTel = storeInfo?.tel?.[0]?.text || '';
      state.creditDate = `${paymentInfo?.date?.text || ''} ${paymentInfo?.time?.text || ''}`;
      state.bizNum = storeInfo?.bizNum?.text || '';
      state.items =
        subResults?.[0]?.items?.map((item: any) => ({
          name: item?.name?.text || '',
          count: item?.count?.text || '',
          price: item?.price?.text || '',
        })) || [];
    },
  },
});

export const { setReceiptImage, setReceipt } = getReceiptSlice.actions;

export default getReceiptSlice.reducer;
