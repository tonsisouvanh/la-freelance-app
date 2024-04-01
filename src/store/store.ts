import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/auth/AuthSlice";
import ProjectReducer from "./slices/project/ProjectSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage by default

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  blacklist: ["project"],
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
