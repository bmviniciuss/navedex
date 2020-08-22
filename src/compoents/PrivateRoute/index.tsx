import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getAuthToken } from '../../services/localStorage'

export interface Props {
  component: React.ReactNode
  path: string
  exact?: boolean
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const token = getAuthToken()
  console.log(token)
  return (
    <Route
      {...rest}
      render={props => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (token) return <Component {...props} />
        return <Redirect to="/" />
      }}
    />
  )
}

export default PrivateRoute
