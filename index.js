import './public/index.scss'


import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Profile from './modules/Profile'
import LegalServiceRequirements from './modules/LegalServiceRequirements'
import Repo from './modules/Repo'
import LegalServiceOrders from './modules/LegalServiceOrders'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LegalServiceOrders}/>
      <Route path="/orders" component={LegalServiceOrders}/>
      <Route path="/requirements" component={LegalServiceRequirements}></Route>
      <Route path="/requirements/:userName/:repoName" component={Repo}/>
      <Route path="/profile" component={Profile}/>
    </Route>
  </Router>
), document.getElementById('app'))
