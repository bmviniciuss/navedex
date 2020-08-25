import { Button } from '@chakra-ui/core'
import moment from 'moment'
import React, { useContext } from 'react'
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'

import NaverModalContext from '../../contexts/NaverModalContext'
import { getNaver } from '../../external/api'
import { Naver } from '../../types'
import HashLoader from '../HashLoader'
import Modal from '../Modal'

import 'moment/locale/pt-br'

interface Props {
  naver:Naver
  onClose():void
}

const NaverModal:React.FC<Props> = ({ naver, onClose }) => {
  const history = useHistory()
  const { openDeleteNaver } = useContext(NaverModalContext)

  const { data, isLoading } = useQuery([naver.id], getNaver, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: () => {
      onClose()
    }
  })

  return (
    <Modal isOpen={true} title="" onClose={onClose} size={700} footer={<div></div>}>
      {isLoading && (<HashLoader className="my-10" loading={isLoading} />)}
      {!isLoading && data && (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="h-full w-full">
              <img className="h-full w-full rounded-md shadow-lg" src={data.url} alt={data.url}/>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>

              <h2 className="text-xl font-bold">{data.name}</h2>
              <p className="text-sm mt-2 text-gray-600">Cargo</p>
              <p className="text-gray-900">{data.job_role}</p>

              <p className="text-sm mt-2 text-gray-600">Idade</p>
              <p className="text-gray-900">{moment().diff(moment.utc(data.birthdate), 'years')} Anos</p>

              <p className="text-sm mt-2 text-gray-600">Tempo de Empresa</p>
              <p className="text-gray-900">{moment.utc(data.admission_date).fromNow(true)}</p>

              <p className="text-sm mt-2 text-gray-600">Projeto</p>
              <p className="text-gray-900">{data.project}</p>
            </div>

            <div className="mt-4">
              <Button
                className="focus:outline-none text-gray-900 mr-2"
                aria-label="editar naver"
                leftIcon={MdModeEdit}
                onClick={() => {
                  onClose()
                  history.push(`/navers/editar/${data.id}`)
                }}
              >
                Editar
              </Button>

              <Button
                className="focus:outline-none text-gray-900 "
                aria-label="Remover"
                leftIcon={MdDelete}
                onClick={() => {
                  openDeleteNaver(data)
                  onClose()
                }}
              >
                Remover
              </Button>
            </div>
          </div>

        </div>
      )}

    </Modal>
  )
}

export default NaverModal
