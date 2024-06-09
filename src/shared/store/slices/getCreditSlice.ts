import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  creditImage: '',
  storeName: '',
  price: '',
  creditDate: '',
};

const getCreditSlice = createSlice({
  name: 'credit',
  initialState,
  reducers: {
    setCreditImage: (state, action) => {
      state.creditImage = action.payload;
    },
    setCredit: (state, action: PayloadAction<any>) => {
      state.storeName = action.payload.storeName;
      state.price = action.payload.price;
      state.creditDate = action.payload.creditDate;
    },
  },
});

export const { setCreditImage, setCredit } = getCreditSlice.actions;

export default getCreditSlice.reducer;
