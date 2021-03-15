import { useState } from "react";
import { baseUrl } from "./baseUrl";

const Login = (props) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState();

  const [token, setToken] = useState("");

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
    setToken(data.token);

    try {
    } catch (error) {
      console.log(error);
    }
  };

  const getProfile = async () => {
    try {
      const res = await fetch(`${baseUrl}/edit_profile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log({ data });
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
      <button onClick={getProfile}>get profile</button>
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
