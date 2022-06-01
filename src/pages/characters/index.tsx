import { Center } from "@kodiui/kodiui";
import { useAppDispatch, useAppSelector } from "hooks/redux.hooks";
import React, { useEffect } from "react";
import { fetchRockets, selectRocket } from "services/rocket/slice";

const Characters = () => {
  const dispatch = useAppDispatch();
  const rocket = useAppSelector(selectRocket);
  const { rockets, loading } = rocket;

  return (
    <Center>
      {loading}
      <br />
      <button onClick={() => dispatch(fetchRockets())}>fetch rockets</button>
      <br />
      {rockets?.map((rocket) => {
        return <div key={rocket?.id}>{rocket?.name}</div>;
      })}
      {/* {characters.characters?.map((char) => {
        return <div key={char?.id}>{char?.name}</div>;
      })} */}
      {/* {characters.characters.map((character) => {
        return <div key={character.id}>{character.name}</div>;
      })} */}
      {/* {characters?.characters?.map((char) => {
        return <div key={char.id}>{char.name}</div>;
      })} */}
    </Center>
  );
};

export default Characters;
