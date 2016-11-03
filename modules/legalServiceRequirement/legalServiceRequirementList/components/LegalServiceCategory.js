/**
 * Created by yuyongyu on 2016/11/2.
 */
import React from 'react';

class LegalServiceCategory extends React.Component{
    render(){
        return (
            <div className="legal-service-category">
                <div className="category-name">{this.props.name}</div>
                <div className="desc">{this.props.desc}</div>
            </div>
        )
    }
}

export default LegalServiceCategory;