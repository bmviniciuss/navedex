import React, { useState, useMemo, useContext } from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'

import Button from '../../compoents/Button'
import DeleteNaverPopup from '../../compoents/DeleteNaverPopup'
import HashLoader from '../../compoents/HashLoader'
import NaverModal from '../../compoents/NaverModal'
import NaversList from '../../compoents/NaversList'
import SearchInput from '../../compoents/SearchInput'
import NaverModalContext from '../../contexts/NaverModalContext'
import { getNavers } from '../../external/api'
import NaversNotFound from './NaversNotFound'
import NoData from './NoData'

const DashboardPage:React.FC = () => {
  const { naver, closeNaver, closeDeleteNaver, deleteNaver } = useContext(NaverModalContext)
  const history = useHistory()
  const [filter, setFilter] = useState('')

  // query
  const { data, isLoading, isError, refetch } = useQuery('navers', getNavers, {
    retry: false,
    refetchOnWindowFocus: false
  })

  // Filter users by name
  const filteredNavers = useMemo(() => {
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

      <div className="mb-8 flex justify-between flex-col sm:flex-row">
        <SearchInput
          className="text-gray-700"
          placeholder="Procure Navers..."
          handleSubmit={(value) => setFilter(value)}
        />

        <div className="create-navers-wrapper mt-4 sm:mt-0">
          <Button color="black" onClick={() => history.push('/navers/criar')}>Adicionar Naver</Button>
        </div>

      </div>

      <div>
        {filter && <p className="italic text-sm mb-3 text-gray-700">{`Mostrando resultados para "${filter}"...`}</p>}
      </div>
      {filteredNavers.length === 0 ? (
        <NoData />
      ) : (
        <NaversList navers={filteredNavers}/>
      )}
    </section>
  )
}

export default DashboardPage
