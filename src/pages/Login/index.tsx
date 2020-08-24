import React, { useReducer, useContext } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import Alert from '../../compoents/Alert'
import Button from '../../compoents/Button'
import Input from '../../compoents/Input'
import AuthContext from '../../contexts/AuthContext'
import { loginReducer, initialState, LoginReducerTypes } from './loginReducer'

const LoginPage: React.FC = () => {
  const auth = useContext(AuthContext)
  const [state, dispatch] = useReducer(loginReducer, initialState)
  const [mutate, { isLoading, isError }] = useMutation(auth.login)
  const history = useHistory()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { hasError, ...errors } = validateFields()
    if (hasError) {
      dispatch({ type: LoginReducerTypes.SET_FIELD_ERRORS, errors })
      return
    }

    const { data: { email, password } } = state

    dispatch({ type: LoginReducerTypes.LOGIN })
    await mutate({ email, password }, {
      onSuccess: () => {
        history.push('/dashboard')
      }
    })
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: LoginReducerTypes.SET_FIELD, name: e.target.name, value: e.target.value })
  }

  const validateFields = () => {
    const { data: { email, password } } = state
    const errors = { email: '', password: '', hasError: false }
    if (!email) {
      errors.hasError = true
      errors.email = 'Você precisa fornecer um email.'
    }
    if (!password) {
      errors.hasError = true
      errors.password = 'Você precisa fornecer uma senha.'
    }
    return errors
  }

  const { data, errors } = state
  return (
    <section className="bg-gray-200  h-full flex flex-col justify-center items-center">

      <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col max-w-2xl">
        <Logo />

        <Input
          label={{ text: 'E-mail', htmlFor: 'email' }}
          id="email"
          name="email"
          placeholder="E-mail"
          type="email"
          error={errors.email}
          value={data.email}
          onChange={handleChange}
          disabled={isLoading}
        />

        <Input
          label={{ text: 'Senha', htmlFor: 'password' }}
          id="password"
          name="password"
          placeholder="Senha"
          type="password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
          disabled={isLoading}
        />

        {isError && <Alert className="mt-5" text='Email ou senha incorreta. Tente novamente.' type="error"/>}

        <div className="mt-5">
          <Button fullWidth type="submit" loading={isLoading} disabled={isLoading} color="black">Entrar</Button>
        </div>

      </form>

    </section>
  )
}

export default LoginPage
