import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './compoents/Layout'
import DashboardPage from './pages/Dashboard'
import LoginPage from './pages/Login'

const App:React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Layout>
          <Route exact path="/dashboard" component={DashboardPage}></Route>
        </Layout>
      </Switch>
    </Router>
  )
}

export default App
