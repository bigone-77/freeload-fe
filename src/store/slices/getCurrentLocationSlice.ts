import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coordinates } from '@/models/Location';

const initialState = {
  latitude: null,
  longitude: null,
} as Coordinates;

const getCurrentLocationSlice = createSlice({
  name: 'currentLocation',
  initialState,
  reducers: {
    setCurrentUserLocation: (state, action: PayloadAction<Coordinates>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const { setCurrentUserLocation } = getCurrentLocationSlice.actions;

export default getCurrentLocationSlice.reducer;
