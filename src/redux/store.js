import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { filterReducer } from './filter/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from './theme/themeSlice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filter:filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
