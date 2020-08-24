import { useToast } from '@chakra-ui/core'
import moment from 'moment'
import React, { useEffect, useState, useMemo } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useParams, useHistory } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

import Alert from '../../compoents/Alert'
import NaverForm from '../../compoents/NaverForm'
import { getNaver, updateNaver } from '../../external/api'
import { CreateNaverType } from '../../external/types'
import { Naver } from '../../types'

function toInputFormat (timestamp:string) {
  return moment.utc(timestamp).format('yyyy-MM-DD')
}

const UpdateNaver:React.FC = () => {
  const toast = useToast()
  const [loading, setLoading] = useState(true)
  const [naver, setNaver] = useState<Naver | undefined>(undefined)
  const [queryError, setQueryError] = useState('')

  const [success, setSuccess] = useState(false)
  const [updateError, setUpdateError] = useState('')

  const { id } = useParams<{ id:string }>()
  const history = useHistory()

  async function handleGetNaver (naverId:string) {
    try {
      const resNaver = await getNaver(naverId)
      setLoading(false)
      setNaver(resNaver)
    } catch (error) {
      setLoading(false)
      setQueryError('Ocorreu um erro ao buscar o Naver.')
    }
  }

  async function handleUpdateNaver (params:CreateNaverType) {
    setSuccess(false)
    setUpdateError('')
    try {
      await updateNaver(id, params)
      toast({
        title: 'Succeso',
        description: 'Naver atualizado com sucesso.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right'
      })
      await handleGetNaver(id)
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao atualizar o Naver.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right'
      })
      throw error
    }
  }

  useEffect(() => {
    handleGetNaver(id)
  }, [id])

  const naverData = useMemo(() => {
    if (naver) {
      console.log(naver)
      const { id, user_id, ...rest } = naver
      return {
        ...rest,
        birthdate: toInputFormat(naver.birthdate),
        admission_date: toInputFormat(naver.admission_date)
      }
    }
  }, [naver])

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full mt-16">
        <HashLoader size="35px" css='display: block; margin: 0 auto;' color="#1A202C" loading={loading} />
      </div>
    )
  }
  console.log(naverData)
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

      {success && <Alert className="my-4" text="Naver atualizado com sucesso." type="success"/>}
      {queryError && <Alert className="my-4" text={queryError} type="error"/>}
      {updateError && <Alert className="my-4" text={updateError} type="error"/>}

      <div className="mt-5">
        {naverData && (
          <NaverForm naverInitialState={naverData} handleRequest={handleUpdateNaver} />
        )}
      </div>

    </section>
  )
}

export default UpdateNaver
