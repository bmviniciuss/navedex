import faker from 'faker'
import React, { useEffect, useReducer } from 'react'
import { HashLoader } from 'react-spinners'

import NaverCard from '../../compoents/NaverCard'
import { getNavers } from '../../external/api'
import { dashboardReducer, initialState, DashboardActionsTypes } from './dashboardReducer'

const DashboardPage:React.FC = () => {
  const [{ navers, loading }, dispatch] = useReducer(dashboardReducer, initialState)

  console.log(navers)

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
      console.log()
    }
  }

  useEffect(() => {
    makeGetNaversRequest()
  }, [])

  return (
    <div>
      {loading && (
        <div className="flex flex-col justify-center items-center h-full w-full mt-16">
          <HashLoader size="35px" css='display: block; margin: 0 auto;' color="#1A202C" loading={loading} />
        </div>
      )}
      <div className="grid grid-cols-4 gap-8">
        {navers.map((naver) => (
          <NaverCard key={naver.id} naver={naver}/>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
