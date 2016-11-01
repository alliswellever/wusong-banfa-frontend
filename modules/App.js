
import React from 'react'
import NavLink from './NavLink'
import Header from './components/Header'


export default React.createClass({
  render() {
    return (
      <div>
        <Header></Header>
        <div className="main">
            <div className="main-inner">
                {this.props.children}
            </div>
        </div>
          <div className="left">
              <ul role="nav">
                  <li><NavLink to="/about">订单列表</NavLink></li>
                  <li><NavLink to="/repos">服务列表</NavLink></li>
                  <li><NavLink to="/" onlyActiveOnIndex>我的</NavLink></li>
              </ul>
          </div>
      </div>
    )
  }
})
