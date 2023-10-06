import React, { useRef } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";



export const Signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signin } = useAuth();

  const getValues = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    return {
      email,
      password,
    };
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const data = getValues();
    console.log(data);
    await signin(data);
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <h1>Login Auth</h1>
        <TextField
          inputRef={emailRef}
          type="text"
          placeholder="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          inputRef={passwordRef}
          type="password"
          placeholder="senha"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <Box>
          <Button variant="outlined" type="submit">
            Login
          </Button>
        </Box>
        <Link to="/signup">Não possuo cadastro</Link>
      </form>
    </Box>
  );
};
