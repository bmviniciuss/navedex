import React from 'react'

const Layout:React.FC = ({ children }) => {
  return (
    <div className="bg-gray-200 h-full w-full">
      <nav className="p-4 border">Navigation TODO</nav>
      <main className="p-4">{children}</main>
    </div>
  )
}

export default Layout
