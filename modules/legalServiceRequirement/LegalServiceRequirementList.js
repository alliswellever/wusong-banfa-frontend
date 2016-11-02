import '../../public/legalServiceRequirementList.scss'

import React from 'react'
import NavLink from '../NavLink'

import LegalServiceCategory from './components/LegalServiceCategory'
import LegalServiceBox from './components/LegalServiceBox'
import LegalServiceList from './components/LegalServiceList'


export default React.createClass({
  render() {
    return (
      <div className="requirements">
          <LegalServiceCategory/>
          <LegalServiceBox/>
          <LegalServiceBox/>
          <LegalServiceCategory/>
          <LegalServiceList/>

          {/*<h2>线上服务</h2>*/}
        {/*<ul>*/}
          {/*<li><NavLink to="/requirements/requirement/contractReview">合同审查</NavLink></li>*/}
          {/*<li><NavLink to="/requirements/requirement/contractCreation">合同起草</NavLink></li>*/}
        {/*</ul>*/}

          {/*<h2>线下服务</h2>*/}
          {/*<ul>*/}
              {/*<li><NavLink to="/requirements/requirement/legalConsultation">法律咨询</NavLink></li>*/}
              {/*<li><NavLink to="/requirements/requirement/lawyerLetter">催收函</NavLink></li>*/}
          {/*</ul>*/}
      </div>
    )
  }
})
