import React, { memo } from 'react'

import { ReactComponent as NoDataSVG } from '../../assets/undraw_no_data_qbuo.svg'

const NoData:React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <NoDataSVG className="w-4/5 h-full sm:w-1/2 md:w-1/3 my-10" />
      <p className="text-xl">
        <span className="font-bold mr-2">Ops!</span>
    Nenhum Naver foi encontrado.
      </p>
    </div>
  )
}

export default memo(NoData)
