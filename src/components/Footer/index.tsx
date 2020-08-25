import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer:React.FC = () => {
  return (
    <footer className="text-gray-700 body-font mt-4">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Link to="/navers" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Nave.rs</span>
          </Link>
        </div>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 flex flex-row items-center">
          Made with  <AiFillHeart className="mx-1 text-red-400 text-lg" /> by <a href="https://github.com/bmviniciuss" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@bmviniciuss</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
