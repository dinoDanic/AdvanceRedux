import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homePageReducer from "pages/homePageSlice";
import rocketReducer from "services/rocket/slice";

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    rocket: rocketReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
