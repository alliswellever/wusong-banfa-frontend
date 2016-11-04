/**
 * Created by yuyongyu on 2016/11/4.
 */
import React from 'react';

class RequirementForm extends React.Component{
    render(){
        return (
            <div className="legal-service-row">
                <h1>需求表单</h1>
                <h3>
                    {this.props.children}
                </h3>
            </div>
        )
    }
}

export default RequirementForm;