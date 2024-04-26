import { combineReducers, configureStore } from '@reduxjs/toolkit';
import joinUserReducer from './slices/joinUserSlice';

const rootReducer = combineReducers({
  joinUser: joinUserReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
