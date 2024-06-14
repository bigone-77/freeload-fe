import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Rest } from '@/models/Rest';

const initialState: Rest[] = [];

const getRestSlice = createSlice({
  name: 'getRest',
  initialState,
  reducers: {
    setRest: (_state, action: PayloadAction<Rest[]>) => action.payload,
  },
});

export const { setRest } = getRestSlice.actions;

export default getRestSlice.reducer;
