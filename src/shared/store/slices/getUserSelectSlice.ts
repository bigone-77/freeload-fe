import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  roadName: '',
  direction: '' as 'up' | 'down',
};

const getUserSelectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    getRoadName: (state, action: PayloadAction<{ roadName: string }>) => {
      state.roadName = action.payload.roadName;
    },
    getDirection: (
      state,
      action: PayloadAction<{ direction: 'up' | 'down' }>,
    ) => {
      state.direction = action.payload.direction;
    },
  },
});

export const { getRoadName, getDirection } = getUserSelectSlice.actions;

export default getUserSelectSlice.reducer;
