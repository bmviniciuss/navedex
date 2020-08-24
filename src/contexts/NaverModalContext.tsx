import React, { createContext, useState } from 'react'

import { Naver } from '../types'

interface NaverModalType {
  naver?: Naver
  openNaver(data:Naver):void
  closeNaver():void
}

const NaverModalContext = createContext<NaverModalType>({} as NaverModalType)

export const NaverModalProvider:React.FC = ({ children }) => {
  const [naver, setNaver] = useState<Naver|undefined>(undefined)

  function openNaver (data:Naver) {
    setNaver(data)
  }

  function closeNaver () {
    setNaver(undefined)
  }

  return (
    <NaverModalContext.Provider value={{ naver, openNaver, closeNaver } }>
      {children}
    </NaverModalContext.Provider>
  )
}

export default NaverModalContext
