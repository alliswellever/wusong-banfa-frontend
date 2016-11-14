import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory,IndexRedirect } from 'react-router'
import Layout from './modules/Layout'
import Profile from './modules/Profile/Profile'
import HelpDetail from './modules/Profile/components/HelpDetail'
import LegalServiceRequirementList from './modules/legalServiceRequirement/legalServiceRequirementList/LegalServiceRequirementList'
import LegalServiceRequirementDetail from './modules/legalServiceRequirement/legalServiceRequirementDetail/LegalServiceRequirementDetail'
import LegalServiceOrderList from './modules/LegalServiceOrder/LegalServiceOrderList/LegalServiceOrderList'
import LegalServiceOrderDetail from './modules/LegalServiceOrder/LegalServiceOrderDetail/LegalServiceOrderDetail'


render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRedirect to="/requirements"/>
      <Route path="/orders" component={LegalServiceOrderList}/>
      <Route path="/orders/orderDetail/:orderId/:orderType" component={LegalServiceOrderDetail}/>
      <Route path="/requirements" component={LegalServiceRequirementList}></Route>
      <Route path="/requirements/requirement/:requirementType" component={LegalServiceRequirementDetail}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/profile/helps/:helpType" component={HelpDetail}/>
    </Route>
  </Router>
), document.getElementById('app'))
