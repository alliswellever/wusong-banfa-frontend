/**
 * Created by yuyongyu on 2016/11/3.
 */
import React from 'react'
import Workflow from './components/Workflow'
import SponsorInfo from './components/SponsorInfo'
import RequirementForm from './components/RequirementForm'
import SubmitBox from './components/SubmitBox'
import { browserHistory } from 'react-router'

class ContractReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.handleSponsorInfoChange = this.handleSponsorInfoChange.bind(this)
        this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this)

        this.state = {
            agreeProtocol: true,
            sponsorName: '于永雨',
            phoneName: '13020072525'
        }
    }

    handleStateChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    handleSponsorInfoChange(infoName, value){
        this.handleStateChange(infoName, value)
    }

    handleSubmitButtonClick(){
        this.handleStateChange('agreeProtocol', false)

        alert("提交数据："+ JSON.stringify(this.state) + this.state.agreeProtocol)
        setTimeout(function () {
            () => this.handleStateChange('agreeProtocol', true) //箭头函数将this指向引用函数的上下文
            browserHistory.push('/orders')
        },3000)

    }


    render(){
        return (
            <div className="requirement-form">
                <Workflow/>
                <SponsorInfo sponsorName={this.state.sponsorName} phoneNumber={this.state.phoneName} onSponsorInfoChange={(infoName, value) => this.handleSponsorInfoChange(infoName, value)}/>
                <RequirementForm>
                    合同审查
                </RequirementForm>
                <SubmitBox agreeProtocol={this.state.agreeProtocol} onSubmitButtonClick={() => this.handleSubmitButtonClick()}/>
            </div>
        )
    }
}

export default ContractReviewForm