import { useState } from "react";
import { useHistory } from "react-router";
import { baseUrl } from "./baseUrl";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [messages, setMessages] = useState({});
  const { push } = useHistory();
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

    if (!res.ok) {
      setMessages(await res.json());
      return;
    }
    const data = await res.json();
    setMessages(data);
    push("/login");
    console.log({ data });

    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      shop - sign up
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

        <div>
          {messages.message ? (
            <span style={{ color: "green" }}>{messages.message}</span>
          ) : (
            Object.entries(messages).map(([key, value]) => (
              <div style={{ color: "red" }}>
                {key} --- {value}
              </div>
            ))
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
