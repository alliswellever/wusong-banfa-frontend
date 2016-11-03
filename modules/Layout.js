
import React from 'react'
import NavLink from './components/NavLink'
import Header from './components/Header'
import ButtonLink from './components/ButtonLink'

class Layout extends React.Component{
  render() {
    return (
      <div>
        <Header></Header>
        <div className="body">
            <div className="main">
                <div className="main-inner">
                    {this.props.children}
                </div>
            </div>
            <div className="navigator">
                <ul role="nav">
                    <li><NavLink to="/orders">服务订单</NavLink></li>
                    <li><NavLink to="/requirements">发起需求</NavLink></li>
                </ul>
                <div className="button">
                    <ButtonLink link="/profile">我的</ButtonLink>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Layout