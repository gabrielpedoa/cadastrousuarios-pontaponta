import React, { useRef } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import styled from "@emotion/styled";

const SigninBox = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    z-index: 1;
    background-color: #fff;
    opacity: 0.92;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 55%;
    padding: 2em;
    gap: 0.7em;
    border-radius: 20px;
  }

`;

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
    <SigninBox>
      <form onSubmit={handleSubmit}>
        <h1 >Login Auth</h1>
        <TextField
          inputRef={emailRef}
          type="text"
          placeholder="email"
          fullWidth
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
          fullWidth
          sx={{marginBottom: '1.2em'}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        <Button sx={{width: '40%', padding: '1.5%'}} variant="outlined" size="large" type="submit">
          Login
        </Button>
        <Link style ={{padding: '1.5%', marginBottom: '5%'}} to="/signup">Não possuo cadastro</Link>
      </form>
    </SigninBox>
  );
};
