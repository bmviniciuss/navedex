import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as NotFoundSVG } from '../../assets/undraw_page_not_found_su7k.svg'

const NotFoundPage:React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <NotFoundSVG className="w-4/5 h-full sm:w-1/2 md:w-1/3 my-10" />
      <p className="text-xl text-center text-gray-900">
        <span className="font-bold mr-2">Ops!</span>
        Essa página não foi encontrada.
        <br/>
        <Link to="/" className="hover:underline text-gray-800">
          Volte aqui.
        </Link>
      </p>
    </section>
  )
}

export default NotFoundPage
