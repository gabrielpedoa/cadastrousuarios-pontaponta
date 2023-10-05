import { createContext, useContext, useState } from "react";
import { Api } from "../api/Api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  async function signin(data) {
    console.log("sign", data);
    try {
      const res = await Api.post("/login", data);
      const { token, usario } = res.data;
      setToken(() => token);
      setUser(() => usario);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ signin, user, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
