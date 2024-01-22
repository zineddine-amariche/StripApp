import thunk from "redux-thunk";
import globalReducer from "./theme";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import auth from "./auth/slice";
import paymentSlice from "./payment/slice";

const reducers = combineReducers({
  global: globalReducer,
  auth,
  payment: paymentSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
