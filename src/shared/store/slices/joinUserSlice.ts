/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IJoinUserSliceProps {
  email: string;
  phoneNum: string;
  authNum: number;
}

const initialState = {
  email: '',
  phoneNum: '',
  authNum: 0,
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
    setAuthNum: (state, action: PayloadAction<{ authNum: number }>) => {
      state.authNum = action.payload.authNum;
    },
  },
});

export const { setEmail, setPhoneNum, setAuthNum } = joinUserSlice.actions;

export default joinUserSlice.reducer;
