import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import { Api } from "../api/Api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    const usuario = localStorage.getItem("usuario");
    if (tokenStorage && usuario) {
      setToken(() => tokenStorage);
      setUser(() => JSON.parse(usuario));
    }
  }, []);

  async function signin(data) {
    try {
      const res = await Api.post("/login", data);
      const { token, usuario } = res.data;
      setToken(() => token);
      setUser(() => usuario);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  function logout(){
    setToken(() => null);
    setUser(() => null);
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
  }

  console.log(token);

  return (
    <AuthContext.Provider value={{ signin, user, token, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
 