import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'
import AddNaver from './pages/AddNaver'
import DashboardPage from './pages/Dashboard'
import LoginPage from './pages/Login'
import NotFoundPage from './pages/NotFound'
import UpdateNaver from './pages/UpdateNaver'

const App:React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <PrivateRoute exact path="/navers" component={DashboardPage} />
        <PrivateRoute exact path="/navers/criar" component={AddNaver} />
        <PrivateRoute exact path="/navers/editar/:id" component={UpdateNaver} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  )
}

export default App
