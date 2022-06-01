import { ApolloQueryResult } from "@apollo/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchRocketsDocument, FetchRocketsQuery } from "generated/graphql";
import { apolloClient } from "pages/_app";
import { RootState } from "redux/store";
import { RocketInitial } from "./types";

export const fetchRockets = createAsyncThunk(
  "characters/fetchRockets",
  async () => {
    const res: ApolloQueryResult<FetchRocketsQuery> = await apolloClient
      .query({ query: FetchRocketsDocument })
      .catch((err) => {
        throw new Error(err);
      });
    return res.data.rockets;
  }
);

const initialState: RocketInitial = {
  rockets: [],
  loading: "idle",
};

const CharacterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters(state, action) {
      // state.characters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.loading = "failed";
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
      state.loading = "succeeded";
    });
  },
});

export const { setCharacters } = CharacterSlice.actions;
export const selectRocket = (state: RootState) => state.rocket;
export default CharacterSlice.reducer;
