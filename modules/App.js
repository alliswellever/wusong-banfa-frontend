
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
          <div className="navigator">
              <ul role="nav">
                  <li><NavLink to="/orders" onlyActiveOnIndex>服务订单</NavLink></li>
                  <li><NavLink to="/requirements">发起需求</NavLink></li>
                  <li><NavLink to="/profile">我的</NavLink></li>
              </ul>
          </div>
      </div>
    )
  }
})
