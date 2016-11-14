import React from 'react';
import { browserHistory } from 'react-router'


class DetailHeader extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        browserHistory.push('/orders')
    }
    render(){
        let requirementType;
        let type = this.props.data.requirementType;

        switch(type/1){
            case 101:
                requirementType = "［合同审查］";
                break;
            case 102:
                requirementType = "［合同起草］";
                break;
            case 103:
                requirementType = "［法律咨询］";
                break;
            case 104:
                requirementType = "［催收函］";
                break;
            case 105:
                requirementType = "［律师函］";
                break;
            case 201:
                requirementType = "［上门培训］";
                break;
            case 202:
                requirementType = "［陪同谈判］";
                break;
            case 203:
                requirementType = "［律师见证］";
                break;
            case 204:
                requirementType = "［面对面咨询］";
                break;
            case 301:
                requirementType = "［管家服务］";
                break;
        }

        return (
            <div className="detail-header">
                <span>{requirementType}</span>
                <span>{this.props.data.orderTitle}</span>
                <span className="form-close close-icon" onClick={this.handleClick}></span>
            </div>
        )

        
    }
}

export default DetailHeader;