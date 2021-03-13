import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Divar = (props) => {
  const [data, setData] = useState();

  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const getApi = async () => {
      try {
        const url = `https://api.divar.ir/v8/web-search${pathname}`;
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        history.push("/");
        console.log(error);
      }
    };

    getApi();
  }, [history, pathname]);

  console.log({ data, pathname });

  return (
    <div>
      divar tehran
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data &&
          data.suggestion_list.map((suggestion) => (
            <Link to={getUrl(`${pathname}/${suggestion.value.category.value}`)}>
              {suggestion.displayed_text}
            </Link>
          ))}
      </div>
      <div>
        {data &&
          data.widget_list.map((widget) => (
            <div>
              <img src={widget.data.image} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Divar;

const getUrl = (url) => {
  return url.replaceAll("//", "/");
};
