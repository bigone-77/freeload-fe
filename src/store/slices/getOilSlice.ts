import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OilStation } from '@/models/OilStation';

const initialState: OilStation[] = [];

const getOilSlce = createSlice({
  name: 'getOil',
  initialState,
  reducers: {
    setOil: (_state, action: PayloadAction<OilStation[]>) => action.payload,
  },
});

export const { setOil } = getOilSlce.actions;

export default getOilSlce.reducer;
