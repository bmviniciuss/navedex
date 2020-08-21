import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoginPage from './pages/Login'

const App:React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
      </Switch>
    </Router>
  )
}

export default App
