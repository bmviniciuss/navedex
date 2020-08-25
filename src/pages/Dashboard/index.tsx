import React, { useState, useMemo, useContext } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'

import Button from '../../compoents/Button'
import DeleteNaverPopup from '../../compoents/DeleteNaverPopup'
import HashLoader from '../../compoents/HashLoader'
import NaverCard from '../../compoents/NaverCard'
import NaverModal from '../../compoents/NaverModal'
import NaverModalContext from '../../contexts/NaverModalContext'
import { getNavers } from '../../external/api'
import NaversNotFound from './NaversNotFound'
import NoData from './NoData'

import './styles.css'

const DashboardPage:React.FC = () => {
  const { naver, closeNaver, closeDeleteNaver, deleteNaver } = useContext(NaverModalContext)
  const history = useHistory()
  const [filterInput, setFilterInput] = useState('')
  const [filter, setFilter] = useState('')

  // query
  const { data, isLoading, isError, refetch } = useQuery('navers', getNavers, {
    retry: false,
    refetchOnWindowFocus: false
  })

  const filtertedNavers = useMemo(() => {
    if (!data) return []
    return filter ? data.filter((naver) => {
      return naver.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
    }) : data
  }, [data, filter])

  if (isError) {
    return (
      <NaversNotFound refetch={() => refetch()} />
    )
  }

  if (isLoading) {
    return (
      <HashLoader className="my-24" loading={isLoading} />
    )
  }

  return (
    <section>
      {deleteNaver && (
        <DeleteNaverPopup isOpen={true} naver={deleteNaver} onClose={closeDeleteNaver}/>
      )}
      {naver && (
        <NaverModal naver={naver} onClose={closeNaver} />
      )}
      <h1 className="font-bold text-gray-900 text-4xl mb-3">Navers</h1>

      <div className="mb-8 flex flex-row justify-between flex-wrap">
        <form
          className="search-naver-form w-64"
          onSubmit={(e) => {
            e.preventDefault()
            setFilter(filterInput)
          }}>
          <div className="relative navers-search-input-wrapper mr-2">
            <input
              className="shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Pesquisar navers..."
              value={filterInput}
              onChange={(e) => {
                setFilterInput(e.target.value)
                if (!e.target.value) {
                  setFilter('')
                }
              }}
            />
            {filter && (
              <AiFillCloseCircle
                className="absolute top-0 right-0 mr-2 mt-3 text-gray-700 w-6 hover:text-gray-800 cursor-pointer"
                onClick={() => {
                  setFilter('')
                  setFilterInput('')
                }}
              />
            )}

          </div>

        </form>

        <div className="create-navers-wrapper">
          <Button color="black" onClick={() => history.push('/navers/criar')}>Adicionar Naver</Button>
        </div>

      </div>

      <div>
        {filter && <p className="italic text-sm mb-3 text-gray-700">{`Mostrando resultados para "${filter}"...`}</p>}
      </div>
      {filtertedNavers.length === 0 ? (
        <NoData />
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filtertedNavers.map((naver) => (
            <NaverCard key={naver.id} naver={naver}/>
          ))}
        </div>
      )}
    </section>
  )
}

export default DashboardPage
