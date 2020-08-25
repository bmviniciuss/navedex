import React, { memo } from 'react'

import { ReactComponent as NotFound } from '../../assets/undraw_not_found_60pq.svg'

interface Props {
  refetch?: () => void
}

const NaversNotFound:React.FC<Props> = ({ refetch }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-center text-gray-900">
      <NotFound className="w-4/5 h-full sm:w-1/2 md:w-1/3 my-10" />
      <p className="text-xl">
        <span className="font-bold mr-2">Ops!</span>
      Aconteu um erro ao buscar os Navers.
      </p>
      <p onClick={() => { if (refetch) refetch() }} className="text-lg hover:underline cursor-pointer text-teal-800">Tente Novamente.</p>
    </div>
  )
}

export default memo(NaversNotFound)
