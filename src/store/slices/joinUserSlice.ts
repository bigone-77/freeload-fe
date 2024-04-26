/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IJoinUserSliceProps {
  phoneNum: string;
}

const initialState = {
  phoneNum: '',
};

const joinUserSlice = createSlice({
  name: 'joinUser',
  initialState,
  reducers: {
    setPhoneNum: (
      state,
      action: PayloadAction<Partial<IJoinUserSliceProps>>,
    ) => {
      state.phoneNum = action.payload.phoneNum!;
    },
  },
});

export const { setPhoneNum } = joinUserSlice.actions;

export default joinUserSlice.reducer;
