import '../../public/legalServiceRequirementList.scss'

import React from 'react'
import NavLink from '../NavLink'
import RequirementList from './components/RequirementList'

export default React.createClass({
  render() {
    return (
      <div className="requirements">
          <RequirementList/>
          <RequirementList/>
        <h2>线上服务</h2>
        <ul>
          <li><NavLink to="/requirements/requirement/contractReview">合同审查</NavLink></li>
          <li><NavLink to="/requirements/requirement/contractCreation">合同起草</NavLink></li>
        </ul>

          <h2>线下服务</h2>
          <ul>
              <li><NavLink to="/requirements/requirement/legalConsultation">法律咨询</NavLink></li>
              <li><NavLink to="/requirements/requirement/lawyerLetter">催收函</NavLink></li>
          </ul>
      </div>
    )
  }
})
