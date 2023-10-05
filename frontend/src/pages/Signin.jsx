import React, { useRef } from 'react'
import { useAuth } from '../Context/AuthContext';

export const Signin = () => {
  const emailRef = useRef()
  const passwordRef = useRef();

  const {signin} = useAuth()

  const getValues = () => {
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    return {
      email,
      password
    }
  }

  async function handleSubmit (e) {
    e.preventDefault()
    const data = getValues()
    console.log(data)
    await signin(data)
  }




  return (
    <form onSubmit={handleSubmit}>
        <h3>Login Auth</h3>
        <input ref={emailRef} type="text" placeholder='email'/>
        <input ref={passwordRef} type="text" placeholder='senha'/>
        <button type='submit'>Login</button>
        <p><a href="#">Não possui cadastro?</a></p>
        <p><a href="#senha">Esqueci minha senha</a></p>
    </form>
  )
}
