import './public/css/layout.scss'


import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory,IndexRedirect } from 'react-router'
import Layout from './modules/Layout'
import Profile from './modules/Profile'
import LegalServiceRequirementList from './modules/legalServiceRequirement/LegalServiceRequirementList'
import LegalServiceRequirement from './modules/legalServiceRequirement/LegalServiceRequirement'
import LegalServiceOrders from './modules/LegalServiceOrders'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRedirect to="/requirements"/>
      <Route path="/orders" component={LegalServiceOrders}/>
      <Route path="/requirements" component={LegalServiceRequirementList}></Route>
      <Route path="/requirements/:requirementName" component={LegalServiceRequirement}/>
      <Route path="/profile" component={Profile}/>
    </Route>
  </Router>
), document.getElementById('app'))
