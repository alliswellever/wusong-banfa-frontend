import React from 'react';
import { Link } from 'react-router';


class ListItem extends React.Component{
    render(){
        let bull ="";
        let statusObj = {};
        let type = this.props.data.requirementType;
        let requirementType = "";
        switch (this.props.orderStatu / 1){
            case 1:
                statusObj = {
                    statusColor : "order-title-statu statu-bgcolor-green",
                    statusText : "无讼顾问确认中",
                    textColor : "order-content-status font-color-green"
                };
                break;
            case 2:
                statusObj = {
                    statusColor : "order-title-statu statu-bgcolor-yellow",
                    statusText : "服务进行中",
                    textColor : "order-content-status font-color-yellow"
                };
                break;
            case 3:
                statusObj = {
                    statusColor : "order-title-statu statu-bgcolor-purple",
                    statusText : "待确认完成",
                    textColor : "order-content-status font-color-purple"
                };
                break;  
            case 4:
                statusObj = {
                    statusColor : "order-title-statu statu-bgcolor-red",
                    statusText : "已取消",
                    textColor : "order-content-status font-color-red"
                };
                break;
            case 5:
                statusObj = {
                    statusColor : "order-title-statu statu-bgcolor-grey",
                    statusText : "已完成",
                    textColor : "order-content-status",
                    completeDate: this.props.data.completeDate
                };
                bull = (<span className="order-bull">&bull;</span>);
                break;
        }
        
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


        return(
            <div className="list-item" key={this.props.data.id}> 
                <Link to={'/orders/orderDetail/' + this.props.data.id + '/' + this.props.data.requirementType }>
                    <div className="list-item-right">
                        <span>查看订单</span>
                        <i className="fa fa-angle-right" aria-hidden="false"></i>
                    </div>
                    <div className="list-item-left">
                        <p className="order-title">
                            <span className={statusObj.statusColor}></span>
                            <span className="order-name">{requirementType}<span>{this.props.data.orderTitle}</span></span>
                        </p>
                        <p className="order-content">
                            <span className="
                            ">{this.props.data.createDate}</span>
                            <span className="order-bull">&bull;</span>
                            <span className={statusObj.textColor}>{statusObj.statusText}<span>{bull}</span><span>{statusObj.completeDate}</span></span>
                        </p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ListItem;


