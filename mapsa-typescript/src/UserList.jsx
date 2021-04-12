import { useCallback, useEffect, useRef, useState } from "react";
import { useFetch } from "./useFetch";

const url = "https://reqres.in/api/users?per_page=2&page=";

const UserList = () => {
  const [page, setPage] = useState(1);
  const isStarted = useRef(false);

  const getUsers = useCallback(async () => {
    const response = await fetch(`${url}${page}`);
    if (response.ok) {
      return await response.json();
    }

    throw new Error("Api Error");
  }, [page]);

  const { data, error, execute, isError, isIdle, isPending, isSuccess } = useFetch(getUsers, false);

  useEffect(() => {
    if (isStarted.current) {
      execute();
    }
    isStarted.current = true;
  }, [execute]);

  return (
    <div>
      {isIdle && <div>wait</div>}
      {isPending && <div>Loading</div>}
      {isError && <div>{error}</div>}
      {isSuccess && (
        <div>
          {data.data.map((user) => (
            <div>{user.email}</div>
          ))}
        </div>
      )}

      <button onClick={execute}>click to get users</button>
      <button onClick={() => setPage((pre) => ++pre)}>Next Page</button>
    </div>
  );
};

export default UserList;
