import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Rest } from '@/models/Rest';

const initialState: Rest[] = [];

const getOilSlce = createSlice({
  name: 'getRest',
  initialState,
  reducers: {
    setRest: (_state, action: PayloadAction<Rest[]>) => action.payload,
  },
});

export const { setRest } = getOilSlce.actions;

export default getOilSlce.reducer;
