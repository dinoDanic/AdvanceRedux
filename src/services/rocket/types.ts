import { FetchRocketsQuery } from "generated/graphql";

export interface RocketInitial {
  rockets: FetchRocketsQuery["rockets"];
  loading: "idle" | "pending" | "succeeded" | "failed";
}
