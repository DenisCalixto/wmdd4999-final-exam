import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from '../App'
import Show from '../components/pages/Show'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/characters/:id' component={Show} />
    </Switch>
  </BrowserRouter>
)

export default Router
