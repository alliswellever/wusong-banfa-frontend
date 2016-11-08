/**
 * Created by yuyongyu on 2016/11/4.
 */
import React from 'react';

class RequirementForm extends React.Component{
    render(){
        return (
            <div className="requirement-form">
                <div className="form-header">
                    <div className="title">填写您的需求</div>
                </div>
                <div className="form-detail">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default RequirementForm;