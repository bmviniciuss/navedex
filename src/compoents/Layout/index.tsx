import React from 'react'

import Navbar from '../Navbar'

const Layout:React.FC = ({ children }) => {
  return (
    <div className="bg-gray-100 h-full w-full">
      <Navbar />
      <main className="mx-auto mt-8" style={{ width: '90%', maxWidth: '1280px' }}>{children}</main>
    </div>
  )
}

export default Layout
