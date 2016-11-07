/**
 * Created by yuyongyu on 2016/11/3.
 */
import React from 'react'
import Workflow from './components/Workflow'
import SponsorInfo from './components/SponsorInfo'
import RequirementForm from './components/RequirementForm'
import SubmitBox from './components/SubmitBox'

class ContractReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.handleCancleButtonClick = this.handleCancleButtonClick.bind(this)
        this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this)

        this.state = {
            agreeProtocol: true
        }
    }

    changeAgreeProtocol(agree){
        this.setState({
            agreeProtocol: agree
        })
    }


    handleCancleButtonClick(){
        alert('取消');
    }

    handleSubmitButtonClick(){
        var self = this;
        self.changeAgreeProtocol(false)

        setTimeout(function () {
            alert('提交');
            self.changeAgreeProtocol(true)
        },3000)
    }


    render(){
        return (
            <div className="requirement-form">
                <Workflow/>
                <SponsorInfo/>
                <RequirementForm>
                    合同审查
                </RequirementForm>
                <SubmitBox clickCancleButton={this.handleCancleButtonClick} clickSubmitButton={this.handleSubmitButtonClick} agreeProtocol={this.state.agreeProtocol}/>
            </div>
        )
    }
}

export default ContractReviewForm