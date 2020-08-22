import React, { useState } from 'react'

import NaverCard from '../../compoents/NaverCard'
import { mockNaver } from '../../mockData/makeNaver'

const DashboardPage:React.FC = () => {
  const [navers] = useState(Array(5).fill(null).map(() => mockNaver()))
  console.log(navers)
  return (
    <div>
      <div className="grid grid-cols-4 gap-8">
        {navers.map((naver) => (
          <NaverCard key={naver.id} naver={naver}/>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
