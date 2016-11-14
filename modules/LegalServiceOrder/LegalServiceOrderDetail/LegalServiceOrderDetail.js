import '../../../public/css/orderDetail.scss'

import React from 'react';
import DetailHeader from './components/DetailHeader';
import DetailContent from './components/DetailContent';


let datas = {
    id: "订单id",
    orderNo: "订单序列号",
    contactsName: "需求提交人姓名",
    orderTitle: "订单名称",
    orderStatus: 3,
    createDate: "发起时间",
    promiseDuration: "预计完成时间",
    adviser: {
        id: "顾问id",
        name: "顾问姓名",
        imUrl: "顾问im连接",
        avatarUrl: "顾问头像连接"
    },
    lawyers: [
        {
            id: "律师id",
            mobileNumber: "15201413425",
            name: "李明月"
        }
    ],
    completeDate: "完成时间",
    payment: "计费描述",
    requirementOrderFiles: [
        {
            id: "附件id",
            originalFileName: "文件名称",
            filePath: "文件路径",
            fileCategory: "文件类别",
            fileSize: "文件大小",
            contactsName: "需求提交人姓名",
            createDate: "创建时间"
        },
        {
            id: "附件id",
            originalFileName: "文件名称",
            filePath: "文件路径",
            fileCategory: "文件类别",
            fileSize: "文件大小",
            contactsName: "需求提交人姓名",
            createDate: "创建时间"
        },
        {
            id: "附件id",
            originalFileName: "文件名称",
            filePath: "文件路径",
            fileCategory: "文件类别",
            fileSize: "文件大小",
            contactsName: "需求提交人姓名",
            createDate: "创建时间"
        }
    ],
    lawyerSuggestion: "律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见",
    cancelReason: " 取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因取消原因",
    requirementType: 101,
    adviserCompleteDate: "律师提交日期"
};




class DetailPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentIndex : 0
        }
    }

    render(){
        let id = this.props.params.orderId;
        let type = this.props.params.orderType;
        let orderType = "";

        switch(type/1){
            case 101:
                orderType = "contractReviews";
                break;
            case 102:
                orderType = "contractDrafts";
                break;
            case 103:
                orderType = "lawCounselings";
                break;
            case 104:
                orderType = "demandLetters";
                break;
            case 105:
                orderType = "lawyersLetters";
                break;
            case 201:
                orderType = "homeTrainings";
                break;
            case 202:
                orderType = "accompanyNegotiations";
                break;
            case 203:
                orderType = "lawyerWitnesses";
                break;
            case 204:
                orderType = "faceToFaceCounselings";
                break;
            case 301:
                orderType = "adviserServices";
                break;
        }

        let RequestUrl = "/requirementOrders/" + orderType + "/requirementOrder/{" + id +"}";

 
        return(
            <div className="detail-page">
                <DetailHeader data={datas}/>
                <DetailContent data={datas}/>
            </div>
        )
    }
}



export default DetailPage;  