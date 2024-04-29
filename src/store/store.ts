import { combineReducers, configureStore } from '@reduxjs/toolkit';
import joinUserReducer from './slices/joinUserSlice';
import getCurrentLocationReducer from './slices/getCurrentLocationSlice';

const rootReducer = combineReducers({
  joinUser: joinUserReducer,
  currentLocation: getCurrentLocationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
