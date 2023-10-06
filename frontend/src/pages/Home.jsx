import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import Image from "../img/casal.jpeg";

const HomeBox = styled(Box)`
  z-index: 10;
  width: 100%;
  height: 93vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.92;
`;

const Photo = styled.div`
  z-index: 10;

  img {
    z-index: 1;
    opacity: 1;
    width: 18em;
    border-radius: 20px;
  }
`;

export const Home = () => {
  const { logout } = useAuth();

  return (
    <HomeBox>
      <h1 style={{color:'#fff'}}>Obrigado por ser uma gostosa</h1>
      <Photo>
        <img src={Image} alt="" />
      </Photo>
      <Button
        sx={{ color: "#fff" }}
        variant="outlined"
        color="error"
        onClick={logout}
      >
        Logout
      </Button>
    </HomeBox>
  );
};
