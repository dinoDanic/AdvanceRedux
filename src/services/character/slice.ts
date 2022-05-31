import {
  createAsyncThunk,
  createSlice,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Character, CharactersDocument } from "generated/graphql";
import { apolloClient } from "pages/_app";
import { RootState } from "redux/store";
import { CharacterInitial } from "./types";

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const res = await apolloClient
      .query({ query: CharactersDocument })
      .catch((err) => {
        throw new Error(err);
      });
    if (!res || !res.data) return;
    return res.data;
  }
);

const initialState: CharacterInitial = {
  characters: [],
  loading: "idle",
};

const CharacterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<Character[]>) {
      state.characters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      state.loading = "failed";
    });
    builder.addCase(
      getCharacters.fulfilled,
      (state, action: PayloadAction<Character[]>) => {
        state.characters = action.payload;
        state.loading = "succeeded";
      }
    );
  },
});

export const { setCharacters } = CharacterSlice.actions;
export const selectCharacters = (state: RootState) => state.characters;
export default CharacterSlice.reducer;
