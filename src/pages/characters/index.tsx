import { useAppDispatch, useAppSelector } from "hooks/redux.hooks";
import React, { useEffect } from "react";
import { getCharacters, selectCharacters } from "services/character/slice";

const Characters = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  const characters = useAppSelector(selectCharacters);
  console.log(characters);

  return (
    <div>
      hi
      {/* {characters?.characters?.map((char) => {
        return <div key={char.id}>{char.name}</div>;
      })} */}
    </div>
  );
};

export default Characters;
