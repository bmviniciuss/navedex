import React, { useContext, useMemo } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

import AuthContext from '../../contexts/AuthContext'

export interface Props {
  component: React.ReactNode
  path: string
  exact?: boolean
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...options }) => {
  const { token, user, loading } = useContext(AuthContext)
  const logged = useMemo(() => !!token && !!user, [token, user])

  return (
    <Route
      {...options}
      render={props => {
        if (loading) {
          return <div className="flex flex-col justify-center items-center h-full w-full">
            <HashLoader size="35px" css='display: block; margin: 0 auto;' color="#1A202C" loading={loading} />
          </div>
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (logged) return <Component {...props} />
        return <Redirect to="/" />
      }}
    />
  )
}

export default PrivateRoute
