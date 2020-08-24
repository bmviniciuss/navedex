import React, { createContext, useState } from 'react'

import { Naver } from '../types'

interface NaverModalType {
  naver?: Naver
  openNaver(data:Naver):void
  closeNaver():void
  deleteNaver?:Naver
  openDeleteNaver(data:Naver):void
  closeDeleteNaver():void
}

const NaverModalContext = createContext<NaverModalType>({} as NaverModalType)

export const NaverModalProvider:React.FC = ({ children }) => {
  const [naver, setNaver] = useState<Naver|undefined>(undefined)
  const [deleteNaver, setDeleteNAver] = useState<Naver|undefined>(undefined)

  function openNaver (data:Naver) {
    setNaver(data)
  }

  function closeNaver () {
    setNaver(undefined)
  }

  function openDeleteNaver (data:Naver) {
    setDeleteNAver(data)
  }

  function closeDeleteNaver () {
    setDeleteNAver(undefined)
  }

  return (
    <NaverModalContext.Provider value={{ naver, openNaver, closeNaver, deleteNaver, openDeleteNaver, closeDeleteNaver } }>
      {children}
    </NaverModalContext.Provider>
  )
}

export default NaverModalContext
