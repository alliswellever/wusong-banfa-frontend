/**
 * Created by yuyongyu on 2016/11/3.
 */
import React from 'react'
import { Link } from 'react-router'

class ButtonLink extends React.Component{
    render(){
        return <Link to={this.props.link} className={(this.props.className? this.props.className:'') + ' button-link'}>{this.props.children}</Link>
    }
}

export default ButtonLink