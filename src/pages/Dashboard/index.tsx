import React, { useState, useMemo } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

import Button from '../../compoents/Button'
import NaverCard from '../../compoents/NaverCard'
import { getNavers } from '../../external/api'

import './styles.css'

const DashboardPage:React.FC = () => {
  const history = useHistory()
  const { data, isLoading, isError, refetch } = useQuery('navers', getNavers, {
    retry: false,
    onError: () => {
      console.log('DEU RUIM')
    }
  })

  const [filterInput, setFilterInput] = useState('')
  const [filter, setFilter] = useState('')

  const filtertedNavers = useMemo(() => {
    if (!data) return []
    return filter ? data.filter((naver) => {
      return naver.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
    }) : data
  }, [data, filter])

  if (isError) {
    return (
      <div>
        Erroo
        <button onClick={() => refetch()}>Refetch</button>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full mt-16">
        <HashLoader size="35px" css='display: block; margin: 0 auto;' color="#1A202C" loading={isLoading} />
      </div>
    )
  }

  return (
    <section>

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

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl">
        {filtertedNavers.map((naver) => (
          <NaverCard key={naver.id} naver={naver}/>
        ))}
      </div>
    </section>
  )
}

export default DashboardPage
