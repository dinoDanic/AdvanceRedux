import { ApolloQueryResult } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchRocketsDocument, FetchRocketsQuery } from "generated/graphql";
import { apolloClient } from "pages/_app";

export const fetchRocket = createAsyncThunk(
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
