/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IJoinUserSliceProps {
  email: string;
  phoneNum: string;
}

const initialState = {
  email: '',
  phoneNum: '',
};

const joinUserSlice = createSlice({
  name: 'joinUser',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
    },
    setPhoneNum: (state, action: PayloadAction<{ phoneNum: string }>) => {
      state.phoneNum = action.payload.phoneNum;
    },
  },
});

export const { setEmail, setPhoneNum } = joinUserSlice.actions;

export default joinUserSlice.reducer;
