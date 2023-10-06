import React from "react";
import { useRef } from "react";
import { Api } from "../api/Api";
import {
  Box,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const BoxDiv = styled(Box)`
  width: 100%;
  height: 100vh;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background-color: #fff;
    opacity: 0.92;
    padding: 5%;
    width: 45%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    text-align: center;
  }

  .inputs {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
  }
`;

const Signup = () => {
  /* Utilizando useRef pois não quero que o componente seja renderizado novamente cada vez que o estado for atualizado */
  const nomeRef = useRef();
  const sobrenomeRef = useRef();
  const idadeRef = useRef();
  const enderecoRef = useRef();
  const cidadeRef = useRef();
  const paisRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const getRefValues = () => {
    const nome = nomeRef.current?.value;
    const sobrenome = sobrenomeRef.current?.value;
    const idade = idadeRef.current?.value;
    const endereco = enderecoRef.current?.value;
    const cidade = cidadeRef.current?.value;
    const pais = paisRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    return {
      nome,
      sobrenome,
      idade,
      endereco,
      cidade,
      pais,
      email,
      password,
    };
  };

  function resetValues() {
    if (nomeRef) nomeRef.current.value = "";
    if (sobrenomeRef) sobrenomeRef.current.value = "";
    if (idadeRef) idadeRef.current.value = "";
    if (enderecoRef) enderecoRef.current.value = "";
    if (cidadeRef) cidadeRef.current.value = "";
    if (paisRef) paisRef.current.value = "";
    if (emailRef) emailRef.current.value = "";
    if (passwordRef) passwordRef.current.value = "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = getRefValues();
    console.log(data);
    try {
      const response = await Api.post("/usuarios", data);
      console.log(response);
      alert(
        "Conta criada com sucesso! \n você sera redirecionado para area de login."
      );
      navigate("/signin");
      resetValues();
    } catch (error) {
      const { response } = error;
      alert(response.data);
    }
  }

  return (
    <BoxDiv sx={{ display: "flex", flexWrap: "wrap" }}>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro Usuario</h1>
        <div className="inputs">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="nome"
            inputRef={nomeRef}
          />
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="sobrenome"
            inputRef={sobrenomeRef}
          />
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="idade"
            inputRef={idadeRef}
          />
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="endereço"
            inputRef={enderecoRef}
          />
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="cidade"
            inputRef={cidadeRef}
          />
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="pais"
            inputRef={paisRef}
          />
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="email"
            inputRef={emailRef}
          />
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="password"
            inputRef={passwordRef}
          />
        </div>
        <Button
          sx={{ width: "40%", padding: "1.5%", marginTop: "5%" }}
          variant="outlined"
          size="large"
          type="submit"
        >
          Salvar
        </Button>
        <Button
          sx={{ width: "40%", padding: "1.5%"}}
          variant="outlined"
          size="large"
        >
          <Link to="/signin" style={{textDecoration: 'none'}}>Voltar</Link>
        </Button>
      </form>
    </BoxDiv>
  );
};

export default Signup;
