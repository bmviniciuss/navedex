import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './compoents/Layout'
import PrivateRoute from './compoents/PrivateRoute'
import AddNaver from './pages/AddNaver'
import DashboardPage from './pages/Dashboard'
import LoginPage from './pages/Login'
import UpdateNaver from './pages/UpdateNaver'

const App:React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage}></Route>
      <Layout>
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        <PrivateRoute exact path="/navers/criar" component={AddNaver} />
        <PrivateRoute exact path="/navers/editar/:id" component={UpdateNaver} />
      </Layout>
    </Switch>
  )
}

export default App
