import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers/entity";

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware()],
  });
}
