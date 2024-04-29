/* eslint-disable no-param-reassign */
import { Coordinates } from '@/models/location';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  latitude: null,
  longitude: null,
} as Coordinates;

const getCurrentLocationSlice = createSlice({
  name: 'currentLocation',
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<Coordinates>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const { setCurrentLocation } = getCurrentLocationSlice.actions;

export default getCurrentLocationSlice.reducer;
