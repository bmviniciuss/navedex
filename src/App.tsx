import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './compoents/Layout'
import PrivateRoute from './compoents/PrivateRoute'
import DashboardPage from './pages/Dashboard'
import LoginPage from './pages/Login'

const App:React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Layout>
          <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        </Layout>
      </Switch>
    </Router>
  )
}

export default App
