import React from 'react';
import FileList from './FileList'


class DetailContent extends React.Component{

    render(){
        let status = this.props.data.orderStatus;
        let statusText;
        let confirmInform = "";
        let advice = (
            <div className="detail-content-advice">
                <p className="advice-title second-color">律师意见</p>
                <p className="advice-text first-color">{this.props.data.lawyerSuggestion}</p>
            </div>
            );
        switch(status/1){
            case 1:
                statusText = "无讼顾问确认中";
                break;
            case 2:
                statusText = "服务进行中";
                break;
            case 3:
                statusText = "待确认完成";
                confirmInform = (
                <div>
                    <div className="order-date">
                        <p className="first-color">律师提交日期：{this.props.data.adviserCompleteDate}</p>
                        <p className="red-tips-color">订单将在7个自然日后自动确认完成</p>
                    </div>
                    <div className="confirm-button">
                        <button className="common-button">确认完成本次服务</button>
                    </div>
                </div>);
                break;
            case 4:
                statusText = "已取消";
                advice = (
                <div className="detail-content-advice">
                    <p className="advice-title second-color">取消原因</p>
                    <p className="advice-text first-color">{this.props.data.cancelReason}</p>
                </div>
                )
                break;
            case 5:
                statusText = "已完成";
                break;
        }

        return (
        <div className="detail-content">
            <div className="detail-content-header">
                <div className="order-number">订单号：{this.props.data.orderNo}</div>
                {confirmInform}
            </div>
            <ul className="detail-content-list">
                <li>
                    <span className="list-title">服务状态</span>
                    <span>{statusText}</span>
                </li>
                <li>
                    <span className="list-title">需求发起人</span>
                    <span>{this.props.data.contactsName}</span>
                </li>
                <li>
                    <span className="list-title">发起时间</span>
                    <span>{this.props.data.createDate}</span>
                </li>
                <li>
                    <span className="list-title">无讼顾问</span>
                    <span className="consultant-name">{this.props.data.adviser.name}</span>
                </li>
                <li>
                    <span className="list-title">预计完成时间</span>
                    <span>{this.props.data.promiseDuration}</span>
                </li>
                <li>
                    <span className="list-title">服务律师</span>
                    <span className="lawyer-name">{this.props.data.lawyers[0].name}</span>
                    <span>{this.props.data.lawyers[0].mobileNumber}</span>
                </li>
                <li>
                    <span className="list-title">确认完成时间</span>
                    <span>{this.props.data.completeDate}</span>
                </li>
                <li>
                    <span className="list-title">计费</span>
                    <span>{this.props.data.payment}</span>
                </li>
            </ul>    
            <div className="detail-content-files">
                <p className="file-title second-color">上传附件</p>
                {this.props.data.requirementOrderFiles.map((item, index) => {
                    return (
                        <FileList key={index} data={item}></FileList>
                    )
                })}
            </div>
            {advice}
        </div>
        )
    }
}


export default DetailContent;

