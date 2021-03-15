import { useState } from "react";
import { baseUrl } from "./baseUrl";
import Login from "./Login";

const Shop = (props) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

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
        <button type="submit">SUBMIT</button>
      </form>
      <Login />
    </div>
  );
};

export default Shop;
