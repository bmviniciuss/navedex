import React, { useContext, useMemo } from 'react'
import { Route, Redirect } from 'react-router-dom'

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
          return <div></div>
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
