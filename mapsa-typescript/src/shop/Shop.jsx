import { useEffect, useState } from "react";
import { baseUrl } from "./baseUrl";
import Login from "./Login";

const Shop = (props) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (form.password.length && form.password.length < 4) {
      setErrors((pre) => ({ ...pre, password: "Password must contains 4 character" }));
    } else {
      setErrors((pre) => ({ ...pre, password: "" }));
    }
  }, [form.password.length]);

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log({ data });

    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      shop
      <form onSubmit={submit}>
        <input
          name="username"
          placeholder="username"
          value={form.username}
          onChange={handleChange}
        />
        <input name="email" placeholder="email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="phone" value={form.phone} onChange={handleChange} />
        <input
          name="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        <button type="submit">SUBMIT</button>
      </form>
      <Login />
    </div>
  );
};

export default Shop;
