import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { filterReducer } from "./filter/filterSlice";
import { cardsReducer } from "./cards/cardsSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./theme/themeSlice";
import { columnsReducer } from "./column/columnSlice";
import { desksReducer } from "./desk/deskSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filter: filterReducer,
    desks: desksReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    columns: columnsReducer,
    cards: cardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
