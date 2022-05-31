import { Character } from "generated/graphql";

export interface CharacterInitial {
  characters: Character[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}
