import faker from 'faker'
import React, { useEffect, useReducer, useState, useMemo } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

import Button from '../../compoents/Button'
import NaverCard from '../../compoents/NaverCard'
import { getNavers } from '../../external/api'
import { dashboardReducer, initialState, DashboardActionsTypes } from './dashboardReducer'

import './styles.css'

const DashboardPage:React.FC = () => {
  const history = useHistory()
  const [{ navers, loading }, dispatch] = useReducer(dashboardReducer, initialState)
  const [filterInput, setFilterInput] = useState('')
  const [filter, setFilter] = useState('')

  async function makeGetNaversRequest () {
    dispatch({ type: DashboardActionsTypes.GET_NAVERS })
    try {
      const data = await getNavers()
      const dataWithFakeAvatar = data.map((n) => {
        return {
          ...n,
          url: faker.internet.avatar()
        }
      })
      dispatch({ type: DashboardActionsTypes.GET_NAVERS_SUCCESS, navers: dataWithFakeAvatar })
    } catch (error) {
      dispatch({ type: DashboardActionsTypes.GET_NAVERS_ERROR, message: 'Ocorreu um erro ao buscar os navers' })
    }
  }

  useEffect(() => {
    makeGetNaversRequest()
  }, [])

  const filtertedNavers = useMemo(() => {
    return filter ? navers.filter((naver) => {
      return naver.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
    }) : navers
  }, [navers, filter])

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full mt-16">
        <HashLoader size="35px" css='display: block; margin: 0 auto;' color="#1A202C" loading={loading} />
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
