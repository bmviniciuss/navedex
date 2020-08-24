import { IconButton } from '@chakra-ui/core'
import moment from 'moment'
import React from 'react'
import { MdModeEdit } from 'react-icons/md'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

import { getNaver } from '../../external/api'
import { Naver } from '../../types'
import Modal from '../Modal'

import 'moment/locale/pt-br'

interface Props {
  naver:Naver
  onClose():void
}

const NaverModal:React.FC<Props> = ({ naver, onClose }) => {
  const history = useHistory()
  const { data, isLoading } = useQuery([naver.id], getNaver, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: () => {
      onClose()
    }
  })

  return (
    <Modal isOpen={true} title="Naver" onClose={onClose} size={700} footer={<div></div>}>
      {isLoading && (
        <div className="flex flex-col justify-center items-center h-full w-full my-10">
          <HashLoader size="35px" css='display: block; margin: 0 auto;' color="#1A202C" loading={isLoading} />
        </div>
      )
      }
      {!isLoading && data && (
        <div className="grid grid-cols-2 gap-4">
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
              <p className="text-gray-900">{moment.utc(data.birthdate).fromNow()}</p>

              <p className="text-sm mt-2 text-gray-600">Projeto</p>
              <p className="text-gray-900">{data.project}</p>
            </div>

            <div>
              <IconButton
                className="focus:outline-none text-gray-900"
                aria-label="Atualizar"
                icon={MdModeEdit}
                onClick={() => {
                  onClose()
                  history.push(`/navers/editar/${data.id}`)
                }}
              />
            </div>
          </div>

        </div>
      )}

    </Modal>
  )
}

export default NaverModal
