import { differenceInYears } from 'date-fns'
import React from 'react'

import { Naver } from '../../types'

interface Props {
  naver: Naver
}

const NaverCard:React.FC<Props> = ({ naver }) => {
  const age = differenceInYears(new Date(), new Date(naver.birthdate))
  return (
    <div >
      <div className="relative" style={{ paddingBottom: '100%' }}>
        <img className="absolute h-full w-full object-cover rounded-lg shadow-md" src={naver.url} alt={naver.name} />
      </div>
      <div className="relative px-4 -mt-4">
        <div className="bg-white p-6 rounded-lg shadow-lg h-full">
          <div className="flex items-baseline flex-wrap">
            <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-sm uppercase font-semibold tracking-wide break-words truncate">
              {naver.job_role}
            </span>
            <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide break-words">
              {age} Anos
            </div>
          </div>
          <h4 className="mt-1 font-semibold text-lg leading-tight break-words">{naver.name}</h4>
          <div className="mt-2">
            <div className="text-gray-600 text-sm"> Projetos</div>
            { naver.project ? naver.project : 'Sem Projetos'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NaverCard
