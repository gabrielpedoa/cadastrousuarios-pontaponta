import React from "react";
import { useRef } from "react";
import { Api } from "../api/Api";

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
      resetValues();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Cadastro Usuario</h3>
        <input type="text" placeholder="nome" className="nome" ref={nomeRef} />
        <input
          type="text"
          placeholder="sobrenome"
          className="sobrenome"
          ref={sobrenomeRef}
        />
        <input
          type="text"
          placeholder="idade"
          className="idade"
          ref={idadeRef}
        />
        <input
          type="text"
          placeholder="endereco"
          className="endereco"
          ref={enderecoRef}
        />
        <input
          type="text"
          placeholder="cidade"
          className="cidade"
          ref={cidadeRef}
        />
        <input type="text" placeholder="pais" className="pais" ref={paisRef} />
        <input
          type="text"
          placeholder="email"
          className="email"
          ref={emailRef}
        />
        <input
          type="text"
          placeholder="password"
          className="password"
          ref={passwordRef}
        />
        <input type="submit" />
        <button>Editar</button>
      </form>
    </div>
  );
};

export default Signup;
