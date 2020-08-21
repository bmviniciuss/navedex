import React from 'react'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from '../../compoents/Button'
import Input from '../../compoents/Input'

const LoginPage: React.FC = () => {
  return (
    <section className="bg-gray-200  h-full flex flex-col justify-center items-center">

      <form onSubmit={(e) => e.preventDefault()} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <Logo />

        <Input
          label={{ text: 'E-mail', htmlFor: 'email' }}
          id="email"
          name="email"
          placeholder="E-mail"
          type="email"
        />
        <Input
          label={{ text: 'Senha', htmlFor: 'password' }}
          id="password"
          name="password"
          placeholder="Senha"
          type="password"
        />

        <div className="mt-5">
          <Button fullWidth color="black" onClick={() => console.log('teste')}>Entrar</Button>
        </div>

      </form>

    </section>
  )
}

export default LoginPage
