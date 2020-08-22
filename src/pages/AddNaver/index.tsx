import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

const AddNaver:React.FC = () => {
  const history = useHistory()

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

    </section>
  )
}

export default AddNaver
