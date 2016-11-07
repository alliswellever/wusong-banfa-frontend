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
        this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this)

        this.state = {
            agreeProtocol: true,
            sponsorName: '于永雨',
            phoneName: '13020072525'
        }
    }

    changeAgreeProtocol(agree){
        this.setState({
            agreeProtocol: agree
        })
    }


    handleSubmitButtonClick(){
        var self = this;
        self.changeAgreeProtocol(false)

        setTimeout(function () {
            self.changeAgreeProtocol(true)
            browserHistory.push('/orders')
        },3000)

    }


    render(){
        return (
            <div className="requirement-form">
                <Workflow/>
                <SponsorInfo sponsorName={this.state.sponsorName} phoneNumber={this.state.phoneName}/>
                <RequirementForm>
                    合同审查
                </RequirementForm>
                <SubmitBox clickSubmitButton={this.handleSubmitButtonClick} agreeProtocol={this.state.agreeProtocol}/>
            </div>
        )
    }
}

export default ContractReviewForm