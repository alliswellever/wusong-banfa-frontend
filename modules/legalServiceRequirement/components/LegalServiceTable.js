/**
 * Created by yuyongyu on 2016/11/2.
 */
import '../../../public/css/requirementList.scss'


import React from 'react';
import LegalServiceRows from './LegalServiceRows';

class LegalServiceBox extends React.Component{
    render(){
        return (
            <div className="legal-service-table">
                <div className="box-title">
                    <span>{this.props.services.name}</span>
                    {this.props.services.balance ? <span className="balance">服务剩余：{this.props.services.balance}次</span> : ''}
                </div>
                <LegalServiceRows services={this.props.services.services}/>
            </div>
        )
    }
}

export default LegalServiceBox;