import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/auth/AuthSlice";
// import storage from "redux-persist/lib/storage"; // Use localStorage by default

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["auth"],
//   blacklist: ["project"],
// };

// const rootReducer = combineReducers({
//   auth: AuthReducer,
//   project: ProjectReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { auth: AuthReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export { store };
