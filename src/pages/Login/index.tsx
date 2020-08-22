import React, { useReducer } from 'react'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from '../../compoents/Button'
import ErrorAlert from '../../compoents/ErrorAlert'
import Input from '../../compoents/Input'
import { apiLogin } from '../../external/api'
import { loginReducer, initialState, LoginReducerTypes } from './loginReducer'

interface FormData {
  email: string
  password:string
}

const LoginPage: React.FC = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { hasError, ...errors } = validateFields()
    if (hasError) {
      dispatch({ type: LoginReducerTypes.SET_FIELD_ERRORS, errors })
      return
    }
    dispatch({ type: LoginReducerTypes.LOGIN })

    const { data: { email, password } } = state
    console.log('PRE REQUEST', { email, password })

    try {
      const data = await apiLogin({ email, password })
      dispatch({ type: LoginReducerTypes.LOGIN_SUCCESS })
      console.log(data)
    } catch (error) {
      dispatch({ type: LoginReducerTypes.LOGIN_ERROR, message: 'Email ou senha incorreta. Tente novamente.' })
    }
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

  const { data, errors, globalError, loading } = state
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
        />

        {globalError && <ErrorAlert className="mt-5" text={globalError}/>}

        <div className="mt-5">
          <Button fullWidth type="submit" loading={loading} disabled={loading}>Entrar</Button>
        </div>

      </form>

    </section>
  )
}

export default LoginPage
