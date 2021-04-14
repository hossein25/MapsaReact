import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({ token: "", setToken: () => {} });

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const getProfile = () => {};

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, []);

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};
