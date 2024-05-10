import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Coordinates } from '@/models/Location';

const initialState = {
  latitude: null,
  longitude: null,
} as Coordinates;

const getMapCenterSlice = createSlice({
  name: 'mapCenter',
  initialState,
  reducers: {
    setMapCenterLocation: (state, action: PayloadAction<Coordinates>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const { setMapCenterLocation } = getMapCenterSlice.actions;

export default getMapCenterSlice.reducer;
