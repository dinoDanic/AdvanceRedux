import { Center, Stack } from "@kodiui/kodiui";
import { useAppDispatch, useAppSelector } from "hooks/redux.hooks";
import { fetchRocket } from "services/rocket/actions";
import { selectRocket } from "services/rocket/slice";

const Characters = () => {
  const dispatch = useAppDispatch();
  const rocket = useAppSelector(selectRocket);
  const { rockets, loading } = rocket;

  return (
    <Center>
      <Stack>
        {loading}
        <button onClick={() => dispatch(fetchRocket())}>fetch rockets</button>
        {rockets?.map((rocket) => {
          return <div key={rocket?.id}>{rocket?.name}</div>;
        })}
      </Stack>
    </Center>
  );
};

export default Characters;
