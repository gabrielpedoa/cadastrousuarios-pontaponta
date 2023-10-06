import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { useVerifyAuth } from "./hook/useVerifyAuth";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import Signup from "./pages/Signup";
import { Global, THEME } from "./styles/globalstyle";
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
  const { isAuth } = useVerifyAuth();

  return (
    <Router>
      <ThemeProvider theme={THEME}>
        <Global />
        <div className="wrap">
          {Array(142)
            .fill("")
            .map((i, index) => (
              <div key={index} className="c"></div>
            ))}
        </div>
        <Routes>
          <Route
            path="/"
            element={isAuth ? <Home /> : <Navigate to="/signin" />}
          />
          <Route
            path="/signin"
            element={!isAuth ? <Signin /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!isAuth ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
