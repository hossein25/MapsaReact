import { useState } from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "./AuthProvider";
import { baseUrl } from "./baseUrl";

const Login = (props) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState();

  const { setToken } = useAuthContext();

  const { push } = useHistory();

  const handleChange = (e) => {
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/login/`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.ok) {
      setErrors(await res.json());
      return;
    }
    const data = await res.json();
    // setToken(data.token);
    setToken(btoa(`${form.username}:${form.password}`));
    push("/profile");
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      LOGIN
      <form onSubmit={submit}>
        <input
          name="username"
          placeholder="username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
      {errors &&
        Object.entries(errors).map(([key, value]) => (
          <div>
            {key} --- {value}
          </div>
        ))}
    </div>
  );
};

export default Login;
