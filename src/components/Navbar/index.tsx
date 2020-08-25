import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import AuthContext from '../../contexts/AuthContext'

const Navbar:React.FC = () => {
  const { logout } = useContext(AuthContext)
  const history = useHistory()

  return (
    <header className="text-gray-700 py-1 body-font border">
      <div className="mx-auto flex flex-wrap flex-col md:flex-row items-center" style={{ width: '90%', maxWidth: '1280px' }}>
        <Link to="/dashboard" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Logo className="w-24"/>
        </Link>
        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">

          <button
            onClick={() => {
              logout()
              history.push('/')
            }}
            className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
          >
            Sair
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
