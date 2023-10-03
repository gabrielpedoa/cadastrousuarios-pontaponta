import React from 'react'

export const Home = () => {
  return (
    <div>
        <h3>Login Auth</h3>
        <input type="text" placeholder='email'/>
        <input type="text" placeholder='senha'/>
        <button type='submit'>Login</button>
        <p><a href="#">Não possui cadastro?</a></p>
        <p><a href="#senha">Esqueci minha senha</a></p>
    </div>
  )
}
