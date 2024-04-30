import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGetWeatherSliceProps {
  iconCode: string;
  weatherDescId: number;
  temp: number;
}

const initialState: IGetWeatherSliceProps = {
  iconCode: '01d',
  weatherDescId: 800,
  temp: 273,
};

const getWeatherSlice = createSlice({
  name: 'getWeather',
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<IGetWeatherSliceProps>) => {
      state.iconCode = action.payload.iconCode;
      state.weatherDescId = action.payload.weatherDescId;
      state.temp = action.payload.temp;
    },
  },
});

export const { setWeather } = getWeatherSlice.actions;

export default getWeatherSlice.reducer;
