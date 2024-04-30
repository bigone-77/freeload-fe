import { combineReducers, configureStore } from '@reduxjs/toolkit';

import joinUserReducer from './slices/joinUserSlice';
import getCurrentLocationReducer from './slices/getCurrentLocationSlice';
import getWeatherReducer from './slices/getWeatherSlice';

const rootReducer = combineReducers({
  joinUser: joinUserReducer,
  currentLocation: getCurrentLocationReducer,
  getWeather: getWeatherReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
