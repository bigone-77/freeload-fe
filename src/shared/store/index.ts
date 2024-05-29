'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import joinUserReducer from './slices/joinUserSlice';
import getCurrentLocationReducer from './slices/getCurrentLocationSlice';
import getMapCenterReducer from './slices/getMapCenterSlice';
import getWeatherReducer from './slices/getWeatherSlice';
import recentTargetReducer from './slices/recentTargetSlice';
import selectReducer from './slices/getUserSelectSlice';
import restReducer from './slices/getRestSlice';
import oilReducer from './slices/getOilSlice';

const rootReducer = combineReducers({
  joinUser: joinUserReducer,
  currentLocation: getCurrentLocationReducer,
  mapCenter: getMapCenterReducer,
  getWeather: getWeatherReducer,
  recentTarget: recentTargetReducer,
  select: selectReducer,
  rest: restReducer,
  oil: oilReducer,
});

const createNoopStorage = () => ({
  getItem(_key: any) {
    return Promise.resolve(null);
  },
  setItem(_key: any, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: any) {
    return Promise.resolve();
  },
});

const storage =
  typeof window === 'undefined'
    ? createNoopStorage()
    : createWebStorage('local');

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['recentTarget'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store); // store 내부에서 persist 작동

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
