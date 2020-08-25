import React, { memo } from 'react'

import { Naver } from '../../types'
import NaverCard from '../NaverCard'

interface Props {
  navers: Naver[]
}

const NaversList:React.FC<Props> = ({ navers }) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {navers.map((naver) => (
        <NaverCard key={naver.id} naver={naver}/>
      ))}
    </div>
  )
}

export default memo(NaversList)
