import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import jobSlice from './jobSlice';
import {
  persistStore,
  persistReducer,
  PAUSE,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
const PersistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const rootReducer = combineReducers({ user: userSlice, job: jobSlice });
const persistedReducer = persistReducer(PersistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
