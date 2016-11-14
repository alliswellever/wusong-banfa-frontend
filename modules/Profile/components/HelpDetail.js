import '../../../public/css/profile.scss'

import React from 'react';
import { browserHistory } from 'react-router'


let helpData = {
        title_1: {
            title: "无讼办法企业法务事物全能管家帮助中心常见问题1",
            content: [
                "为您审查合同的律师是无讼合同审查平台透过大数据及严密的后台算法为您从全国30万名律师中精准匹配的。我们承诺，所推荐律师都为在正规律师事务所执业，且在中华全国律师协会注册的拥有执业资格的律师。",
                "除了由专业律师审查您提交的合同外，还会由我们具有法律背景的无讼法务顾问为您解答与您提交合同相关的法律咨询。"
            ]
        },
        title_2: {
            title: "无讼办法企业法务事物全能管家帮助中心常见问题2",
            content: [
                "为您审查合同的律师是无讼合同审查平台透过大数据及严密的后台算法为您从全国30万名律师中精准匹配的。我们承诺，所推荐律师都为在正规律师事务所执业，且在中华全国律师协会注册的拥有执业资格的律师。",
                "除了由专业律师审查您提交的合同外，还会由我们具有法律背景的无讼法务顾问为您解答与您提交合同相关的法律咨询。"
            ]
        },
        title_3: {
            title: "无讼办法企业法务事物全能管家帮助中心常见问题3",
            content: [
                "为您审查合同的律师是无讼合同审查平台透过大数据及严密的后台算法为您从全国30万名律师中精准匹配的。我们承诺，所推荐律师都为在正规律师事务所执业，且在中华全国律师协会注册的拥有执业资格的律师。",
                "除了由专业律师审查您提交的合同外，还会由我们具有法律背景的无讼法务顾问为您解答与您提交合同相关的法律咨询。"
            ]
        },
        title_4: {
            title: "无讼办法企业法务事物全能管家帮助中心常见问题4",
            content: [
                "为您审查合同的律师是无讼合同审查平台透过大数据及严密的后台算法为您从全国30万名律师中精准匹配的。我们承诺，所推荐律师都为在正规律师事务所执业，且在中华全国律师协会注册的拥有执业资格的律师。",
                "除了由专业律师审查您提交的合同外，还会由我们具有法律背景的无讼法务顾问为您解答与您提交合同相关的法律咨询。"
            ]
        },
        title_5: {
            title: "无讼办法企业法务事物全能管家帮助中心常见问题5",
            content: [
                "为您审查合同的律师是无讼合同审查平台透过大数据及严密的后台算法为您从全国30万名律师中精准匹配的。我们承诺，所推荐律师都为在正规律师事务所执业，且在中华全国律师协会注册的拥有执业资格的律师。",
                "除了由专业律师审查您提交的合同外，还会由我们具有法律背景的无讼法务顾问为您解答与您提交合同相关的法律咨询。"
            ]
        },
        title_6: {
            title: "无讼办法企业法务事物全能管家帮助中心常见问题6",
            content: [
                "为您审查合同的律师是无讼合同审查平台透过大数据及严密的后台算法为您从全国30万名律师中精准匹配的。我们承诺，所推荐律师都为在正规律师事务所执业，且在中华全国律师协会注册的拥有执业资格的律师。",
                "除了由专业律师审查您提交的合同外，还会由我们具有法律背景的无讼法务顾问为您解答与您提交合同相关的法律咨询。"
            ]
        },
        title_7: {
            title: "无讼办法企业法务事物全能管家帮助中心常见问题7",
            content: [
                "为您审查合同的律师是无讼合同审查平台透过大数据及严密的后台算法为您从全国30万名律师中精准匹配的。我们承诺，所推荐律师都为在正规律师事务所执业，且在中华全国律师协会注册的拥有执业资格的律师。",
                "除了由专业律师审查您提交的合同外，还会由我们具有法律背景的无讼法务顾问为您解答与您提交合同相关的法律咨询。"
            ]
        },
        title_8: {
            title: "无讼办法企业法务事物全能管家帮助中心常见问题8",
            content: [
                "为您审查合同的律师是无讼合同审查平台透过大数据及严密的后台算法为您从全国30万名律师中精准匹配的。我们承诺，所推荐律师都为在正规律师事务所执业，且在中华全国律师协会注册的拥有执业资格的律师。",
                "除了由专业律师审查您提交的合同外，还会由我们具有法律背景的无讼法务顾问为您解答与您提交合同相关的法律咨询。"
            ]
        },
        title_9: {
            title: "无讼办法企业法务事物全能管家帮助中心常见问题9s",
            content: [
                "为您审查合同的律师是无讼合同审查平台透过大数据及严密的后台算法为您从全国30万名律师中精准匹配的。我们承诺，所推荐律师都为在正规律师事务所执业，且在中华全国律师协会注册的拥有执业资格的律师。",
                "除了由专业律师审查您提交的合同外，还会由我们具有法律背景的无讼法务顾问为您解答与您提交合同相关的法律咨询。"
            ]
        },
        title_10: {
            title: "无讼办法企业法务事物全能管家帮助中心常见问题10",
            content: [
                "为您审查合同的律师是无讼合同审查平台透过大数据及严密的后台算法为您从全国30万名律师中精准匹配的。我们承诺，所推荐律师都为在正规律师事务所执业，且在中华全国律师协会注册的拥有执业资格的律师。",
                "除了由专业律师审查您提交的合同外，还会由我们具有法律背景的无讼法务顾问为您解答与您提交合同相关的法律咨询。"
            ]
        }
    };


class  HelpDetail extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        browserHistory.push('/profile');
    }

    render() {

        let data;
        let helpId = this.props.params.helpType;
        
        switch (helpId/1){
            case 1:
                data = helpData.title_1;
                break;
            case 2:
                data = helpData.title_2;
                break;
            case 3:
                data = helpData.title_3;
                break;  
            case 4:
                data = helpData.title_4;
                break; 
            case 5:
                data = helpData.title_5;
                break;
            case 6:
                data = helpData.title_6;
                break;
            case 7:
                data = helpData.title_7;
                break;
            case 8:
                data = helpData.title_8;
                break;
            case 9:
                data = helpData.title_9;
                break;
            case 10:
                data = helpData.title_10;
                break;
        }   

        return (
            <div className="help-detail-page">
                <div className="help-detail-title">{data.title}
                <span className="form-close close-icon" onClick={this.handleClick}></span>
                </div>
                <div className="help-detail-content">
                    {
                        data.content.map(function (item, i) {
                            return (
                                <p key={i} className="paragraph">{item}</p>
                            );
                        }, this)
                    }
                </div>
            </div>
        );
    }
}

export default HelpDetail;  