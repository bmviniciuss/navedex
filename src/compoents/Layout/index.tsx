import React from 'react'

import Footer from '../Footer'
import Navbar from '../Navbar'

const Layout:React.FC = ({ children }) => {
  return (
    <div className="bg-gray-100 h-full w-full text-gray-900 antialiased">
      <Navbar />
      <main className="mx-auto mt-8" style={{ width: '90%', maxWidth: '1280px' }}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
