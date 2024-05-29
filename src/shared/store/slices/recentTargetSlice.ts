import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TargetPlace } from '@/models/targetPlace';

interface IRecnetTargetSliceProps extends TargetPlace {
  date: string;
}

const initialState: IRecnetTargetSliceProps[] = [];

const recentTargetSlice = createSlice({
  name: 'recentTarget',
  initialState,
  reducers: {
    setRecentTarget: (
      state,
      action: PayloadAction<IRecnetTargetSliceProps>,
    ) => {
      const { name, latitude, longitude, date } = action.payload;

      const existingTarget = state.find((s) => s.name === name);

      if (!existingTarget) {
        state.push({ name, latitude, longitude, date }); // 기존 배열을 직접 수정하여 새 요소를 추가
      }
    },
    removeTarget: (
      state,
      action: PayloadAction<Partial<IRecnetTargetSliceProps>>,
    ) => {
      const filteredTargets = state.filter(
        (s) => s.name !== action.payload.name,
      );
      return filteredTargets;
    },
  },
});

export const { setRecentTarget, removeTarget } = recentTargetSlice.actions;

export default recentTargetSlice.reducer;
