import React, { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

import Alert from '../../compoents/Alert'
import NaverForm from '../../compoents/NaverForm'
import { createNaver } from '../../external/api'
import { CreateNaverType } from '../../external/types'

const AddNaver:React.FC = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const history = useHistory()

  async function makeCreateRequest (data: CreateNaverType) {
    setError('')
    setSuccess(false)
    try {
      await createNaver(data)
      setSuccess(true)
    } catch (error) {
      setError('Ocorreu um erro ao criar o Naver. Tente novamente.')
      throw new Error(error)
    }
  }

  return (
    <section>
      <div className="flex flex-row flex-wrap items-center">
        <div
          onClick={() => history.goBack()}
          className="hover:bg-gray-300 transition-colors duration-100 ease-out text-gray-900 cursor-pointer mr-5 border border-gray-900 p-2 rounded-sm"
        >
          <FaChevronLeft className=""/>
        </div>

        <h1 className="font-bold text-gray-900 text-4xl">Adicionar Naver</h1>

      </div>

      {success && <Alert className="my-4" text="Naver criado com sucesso." type="success"/>}
      {error && <Alert className="my-4" text={error} type="error"/>}

      <div className="mt-4">
        <NaverForm handleRequest={makeCreateRequest}/>
      </div>

    </section>
  )
}

export default AddNaver
