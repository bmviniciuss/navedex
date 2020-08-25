import { useToast } from '@chakra-ui/core'
import React, { useMemo } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useQuery, useMutation, queryCache } from 'react-query'
import { useParams, useHistory } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

import Alert from '../../components/Alert'
import NaverForm from '../../components/NaverForm'
import { getNaver, updateNaver } from '../../external/api'
import { CreateNaverType } from '../../external/types'
import { toInputFormat } from '../../helpers/dates'

const UpdateNaver:React.FC = () => {
  const toast = useToast()
  const { id } = useParams<{ id:string }>()
  const history = useHistory()

  // query
  const { data, isLoading, isError } = useQuery(id, getNaver, {
    retry: false,
    refetchOnWindowFocus: false,
    onError: () => {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao buscar o Naver.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right'
      })
    }
  })

  // mutation
  const [mutate, { isError: mutationError }] = useMutation(updateNaver, {
    onSuccess: () => {
      toast({
        title: 'Succeso',
        description: 'Naver atualizado com sucesso.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right'
      })
      queryCache.invalidateQueries(id)
    },
    onError: () => {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao atualizar o Naver.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right'
      })
    }
  })

  async function handleUpdateNaver (params:CreateNaverType) {
    return mutate({ id, ...params })
  }

  const naverData = useMemo(() => {
    if (data) {
      const { id, user_id, ...rest } = data
      return {
        ...rest,
        birthdate: toInputFormat(data.birthdate),
        admission_date: toInputFormat(data.admission_date)
      }
    }
  }, [data])

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full mt-16">
        <HashLoader size="35px" css='display: block; margin: 0 auto;' color="#1A202C" loading={isLoading} />
      </div>
    )
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

        <h1 className="font-bold text-gray-900 text-4xl">Editar Naver</h1>

      </div>

      {isError && <Alert className="my-4" text="Ocorreu um erro ao buscar o Naver." type="error"/>}
      {mutationError && <Alert className="my-4" text='Ocorreu um erro ao atualizar o Naver.' type="error"/>}

      <div className="mt-5">
        {naverData && (
          <NaverForm naverInitialState={naverData} handleRequest={handleUpdateNaver} />
        )}
      </div>

    </section>
  )
}

export default UpdateNaver
