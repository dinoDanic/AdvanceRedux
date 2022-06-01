import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { fetchRocket } from "./actions";
import { RocketInitial } from "./types";

const initialState: RocketInitial = {
  rockets: [],
  loading: "idle",
};

const CharacterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRocket.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchRocket.rejected, (state, action) => {
      state.loading = "failed";
    });
    builder.addCase(fetchRocket.fulfilled, (state, action) => {
      state.rockets = action.payload;
      state.loading = "succeeded";
    });
  },
});

export const selectRocket = (state: RootState) => state.rocket;
export default CharacterSlice.reducer;
