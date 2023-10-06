import "./App.css";
import { AuthProvider, useAuth } from "./Context/AuthContext";
import { useVerifyAuth } from "./hook/useVerifyAuth";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Global } from "./styles/globalstyle";

const App = () => {

  const {isAuth} = useVerifyAuth()


  return (
      <Router>  
        <Global />
        <Routes>
          <Route path="/" element={isAuth ? <Home /> : <Navigate to="/signin" />} />
          <Route path="/signin" element={!isAuth ? <Signin /> : <Navigate to="/"/>} />
          <Route path="/signup" element={!isAuth ? <Signup /> : <Navigate to="/"/>} />
        </Routes>
      </Router>
  );
};

export default App;
