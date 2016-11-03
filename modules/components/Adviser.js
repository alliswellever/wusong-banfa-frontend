/**
 * Created by yuyongyu on 2016/11/3.
 */
import React from 'react';

class Adviser extends React.Component{
    render(){
        return (
            <div className="adviser">
                <img className="avatar" src={this.props.info.avatar}/><span className="name">联系顾问：{this.props.info.name}</span>
            </div>
        )
    }
}

export default Adviser;