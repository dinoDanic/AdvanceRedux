import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homePageReducer from "pages/homePageSlice";
import charactersReducer from "services/character/slice";

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    characters: charactersReducer,
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
