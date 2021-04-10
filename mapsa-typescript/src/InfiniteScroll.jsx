import { useEffect, useRef, useState } from "react";

const url = "https://reqres.in/api/users?per_page=2&page=";

const InfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const loadingRef = useRef(null);
  const isIntersecting = useIntersectionObserver(loadingRef);
  const { isLoading, users } = useGetUsers(page);

  useEffect(() => {
    if (isIntersecting && !isLoading) {
      setPage((pre) => (pre + 1 > users.total_pages ? pre : pre + 1));
    }
  }, [isIntersecting]);

  console.log({ isIntersecting });

  return (
    <div>
      <div style={{ height: "100vh", backgroundColor: "red" }}>INifiniteScroll</div>
      {users.data.map((user) => (
        <div key={user.id} style={{ height: "50vh" }}>
          {user.email}
        </div>
      ))}

      <div ref={loadingRef} style={{ backgroundColor: "blue", height: 100 }}>
        {isIntersecting && <span>Loading...</span>}
      </div>
    </div>
  );
};

export default InfiniteScroll;

const useIntersectionObserver = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsIntersecting(entries[0].isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isIntersecting;
};

const useGetUsers = (page) => {
  const [users, setUsers] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const response = await (await fetch(`${url}${page}`)).json();
        setUsers((pre) => ({ ...response, data: pre.data.concat(response.data) }));
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getUsers();
  }, [page]);

  return {
    users,
    isLoading,
  };
};
