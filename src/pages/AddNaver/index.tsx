import { useToast } from '@chakra-ui/core'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'

import Alert from '../../components/Alert'
import NaverForm from '../../components/NaverForm'
import { createNaver } from '../../external/api'
import { CreateNaverType } from '../../external/types'

const AddNaver:React.FC = () => {
  const toast = useToast()
  const history = useHistory()

  // mutation
  const [mutate, { isError }] = useMutation(createNaver, {
    onSuccess: () => {
      toast({
        title: 'Sucesso',
        description: 'Naver Criado',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right'
      })
    },
    onError: () => {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao criar o Naver. Tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right'
      })
    }
  })

  async function makeCreateRequest (data: CreateNaverType) {
    return mutate(data)
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

      {isError && <Alert className="my-4" text="Ocorreu um erro ao criar o Naver" type="error"/>}

      <div className="mt-4">
        <NaverForm handleRequest={makeCreateRequest}/>
      </div>

    </section>
  )
}

export default AddNaver
