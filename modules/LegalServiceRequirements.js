import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

  render() {
    return (
      <div>
        <h2>线上服务</h2>
        <ul>
          <li><NavLink to="/requirements/reactjs/react-router">合同审查</NavLink></li>
          <li><NavLink to="/requirements/facebook/react">合同起草</NavLink></li>
        </ul>

          <h2>线下服务</h2>
          <ul>
              <li><NavLink to="/requirements/reactjs/react-router">法律咨询</NavLink></li>
              <li><NavLink to="/requirements/facebook/react">催收函</NavLink></li>
          </ul>
      </div>
    )
  }
})
