import moment from 'moment'
import React, { useReducer } from 'react'

import { CreateNaverType } from '../../external/types'
import Button from '../Button'
import Input from '../Input'
import { naverFormReducer, initialState, NaverFormReducerTypes, ErrorsType, NaverFormState } from './naverFormReducer'

export interface FormData {
  name: string
  birthdate: string
  job_role: string
  project: string
  admission_date: string
  url: string
}

interface Props {
  handleRequest(data:CreateNaverType): void
  naverInitialState?: FormData
}

function parseDate (date: string) {
  const [year, month, day] = date.split('-')
  return new Date(Number(year), Number(month) - 1, Number(day))
}

const NaverForm:React.FC<Props> = ({ handleRequest, naverInitialState }) => {
  const reducerInitialState:NaverFormState = { ...initialState, data: { ...initialState.data, ...naverInitialState } }
  const [{ data, errors, loading }, dispatch] = useReducer(naverFormReducer, reducerInitialState)

  async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const errors = validateInputs()
    if (Object.keys(errors).length > 0) {
      dispatch({ type: NaverFormReducerTypes.SET_FIELD_ERRORS, errors })
    } else {
      dispatch({ type: NaverFormReducerTypes.ACTION })
      try {
        const toPostData:FormData = {
          ...data,
          birthdate: moment(parseDate(data.birthdate)).format('DD/MM/yyyy'),
          admission_date: moment(parseDate(data.admission_date)).format('DD/MM/yyyy')
        }
        console.log(toPostData)
        await handleRequest(toPostData)
        dispatch({ type: NaverFormReducerTypes.ACTION_SUCCESS })
      } catch (error) {
        dispatch({ type: NaverFormReducerTypes.ACTION_ERROR })
      }
    }
  }

  function handleChange (e:React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: NaverFormReducerTypes.SET_FIELD, name: e.target.name, value: e.target.value })
  }

  function validateInputs () {
    const errors:ErrorsType = {}
    if (!data.name) errors.name = 'É necessário fornecer o nome.'
    if (!data.birthdate) errors.birthdate = 'É necessário fornecer a data de nascimento.'
    if (!data.job_role) errors.job_role = 'É necessário fornecer o cargo.'
    if (!data.project) errors.project = 'É necessário fornecer o projeto.'
    if (!data.admission_date) errors.admission_date = 'É necessário fornecer a data de admissão.'
    if (!data.url) errors.url = 'É necessário fornecer a url do avatar.'
    return errors
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <Input
        label={{ text: 'Nome', htmlFor: 'name' }}
        id="name"
        name="name"
        placeholder="Vinicius Barbosa"
        type="text"
        required
        wrapperClassName=''
        onChange={handleChange}
        value={data.name}
        error={errors.name}
        disabled={loading}
      />

      <Input
        label={{ text: 'Data de Nascimento', htmlFor: 'birthdate' }}
        id="birthdate"
        name="birthdate"
        type="date"
        required
        wrapperClassName=''
        onChange={handleChange}
        value={data.birthdate}
        error={errors.birthdate}
        disabled={loading}
      />

      <Input
        label={{ text: 'Cargo', htmlFor: 'job_role' }}
        id="job_role"
        name="job_role"
        placeholder="Desenvolvedor Front-End"
        type="text"
        required
        wrapperClassName=''
        onChange={handleChange}
        value={data.job_role}
        error={errors.job_role}
        disabled={loading}
      />

      <Input
        label={{ text: 'Projeto', htmlFor: 'project' }}
        id="project"
        name="project"
        placeholder="Nome do projeto"
        type="text"
        required
        wrapperClassName=''
        onChange={handleChange}
        value={data.project}
        error={errors.project}
        disabled={loading}
      />

      <Input
        label={{ text: 'Entrada na Empresa', htmlFor: 'admission_date' }}
        id="admission_date"
        name="admission_date"
        type="date"
        required
        wrapperClassName=''
        onChange={handleChange}
        value={data.admission_date}
        error={errors.admission_date}
        disabled={loading}
      />

      <Input
        label={{ text: 'Avatar', htmlFor: 'url' }}
        id="url"
        name="url"
        placeholder="URL do avatar do Naver"
        type="text"
        required
        wrapperClassName=''
        onChange={handleChange}
        value={data.url}
        error={errors.url}
        disabled={loading}
      />

      <Button
        color="black"
        type="submit"
        className="my-5 sm:col-start-2 sm:col-end-2"
        loading={loading}
        disabled={loading}
      >
        Salvar
      </Button>

    </form>
  )
}

export default NaverForm
