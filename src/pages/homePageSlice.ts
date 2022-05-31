import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "generated/graphql";
import { IHomePageState } from "./types";

const initialState: IHomePageState = {
  characters: [],
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<Character[]>) {
      state.characters = action.payload;
    },
  },
});

export const { setCharacters } = HomePageSlice.actions;
export default HomePageSlice.reducer;
