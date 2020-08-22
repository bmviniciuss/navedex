import React from 'react'

const Layout:React.FC = ({ children }) => {
  return (
    <div className="bg-gray-200 h-full w-full">
      <nav className="p-4 border">Navigation TODO</nav>
      <main className="mx-auto mt-8" style={{ width: '90%', maxWidth: '1280px' }}>{children}</main>
    </div>
  )
}

export default Layout
