/**
 * Created by yuyongyu on 2016/11/2.
 */
import '../../../public/requirementList.scss'


import React from 'react';
import Requirement from './Requirement';

class RequirementList extends React.Component{
    render(){
        return (
            <div className="requirement-list">
                <div className="title">
                    <span>线上服务</span>
                    <span className="balance">服务余额：38次</span>
                </div>
                <div className="list">
                    <Requirement/>
                    <Requirement/>
                    <Requirement/>
                    <Requirement/>
                    <Requirement/>
                </div>
            </div>
        )
    }
}

export default RequirementList;