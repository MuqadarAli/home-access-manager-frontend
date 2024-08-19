// src/store.ts
import {
    combineReducers,
    configureStore,
    createAction,
  } from "@reduxjs/toolkit";
  import { setupListeners } from "@reduxjs/toolkit/query";
  import { authApi } from "./rtk-query/auth";
  import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    REGISTER,
    PURGE,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  import authReducer from './slice/auth'
import { communityApi } from "./rtk-query/community";
import { userApi } from "./rtk-query/user";
  
  export const resetStoreAction = createAction("RESET_STORE");
  const persistConfig = {
    key: "root",
    storage,
    // You can add more configuration options here,
    // like 'whitelist' or 'blacklist' to selectively persist parts of the state.
  };
  
  const rootReducer = combineReducers({
    auth: authReducer,
  });
  
  const rootReducerWithReset = (state: any, action: any) => {
    if (action.type === resetStoreAction.type) {
      state = undefined;
    }
    return rootReducer(state, action);
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducerWithReset);
  
  export const store = configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      [communityApi.reducerPath]: communityApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(authApi.middleware, communityApi.middleware, userApi.middleware),
  });
  
  export const persister = persistStore(store);
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  setupListeners(store.dispatch);
  