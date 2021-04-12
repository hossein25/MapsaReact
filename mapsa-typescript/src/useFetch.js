import { useCallback, useEffect, useState } from "react";

export function useFetch(fn, immediate = true) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  const execute = useCallback(() => {
    setStatus("pending");
    setError("");

    return fn()
      .then((response) => {
        setData(response);
        setStatus("success");
      })
      .catch((error) => {
        setError(error.message);
        setStatus("error");
      });
  }, [fn]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    data,
    status,
    error,
    execute,
    isIdle: status === "idle",
    isPending: status === "pending",
    isError: status === "error",
    isSuccess: status === "success",
  };
}
