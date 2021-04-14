import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "./AuthProvider";
import { baseUrl } from "./baseUrl";

const url = baseUrl + "/edit_profile/update_profile/";

const getAuthorizationHeader = (token) => ({ Authorization: `Basic ${token}` });

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [form, setForm] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
  });
  const userId = useRef("");

  const handleChange = (e) => {
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const { token } = useAuthContext();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const user = await fetch(url, {
          headers: getAuthorizationHeader(token),
        });
        userId.current = (await user.json())[0].id;
        const res = await fetch(url + `${userId.current}/`, {
          headers: getAuthorizationHeader(token),
        });
        const profile = await res.json();
        setProfile(profile);
        setForm((pre) => ({ ...pre, ...profile }));
      } catch (error) {}
    };

    getProfile();
  }, []);

  const updateProfile = async (e) => {
    e.preventDefault();
    const res = await fetch(url + `${userId.current}/`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
        ...getAuthorizationHeader(token),
      },
    });

    const data = await res.json();
    console.log({ data });

    try {
    } catch (error) {
      console.log(error);
    }
  };

  const getFinance = async () => {
    try {
      const url = baseUrl + "/finance/Payment/";
      const data = await fetch(url, {
        headers: getAuthorizationHeader(token),
      });
      const finance = await data.json();
      console.log({ finance });
    } catch (error) {}
  };

  return (
    <div>
      Profile
      <div>
        {profile &&
          Object.entries(profile).map(([key, value]) => (
            <p key={key}>
              {key} : {value}
            </p>
          ))}
      </div>
      <form onSubmit={updateProfile}>
        <input
          name="username"
          placeholder="username"
          value={form.username}
          onChange={handleChange}
        />
        <input name="email" placeholder="email" value={form.email} onChange={handleChange} />
        <input
          name="first_name"
          placeholder="first_name"
          value={form.first_name}
          onChange={handleChange}
        />
        <input
          name="last_name"
          placeholder="last_name"
          value={form.last_name}
          onChange={handleChange}
        />
        <button type="submit">UPdate Profile</button>
      </form>
      <button onClick={getFinance}>get finance</button>
    </div>
  );
};

export default Profile;
