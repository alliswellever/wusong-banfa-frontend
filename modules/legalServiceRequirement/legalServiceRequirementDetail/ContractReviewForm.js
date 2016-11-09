/**
 * Created by yuyongyu on 2016/11/3.
 */
import React from 'react'
import Workflow from './components/Workflow'
import SponsorInfo from './components/SponsorInfo'
import RequirementForm from './components/RequirementForm'
import SubmitBox from './components/SubmitBox'
import { browserHistory } from 'react-router'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap'
import Validator from './components/Validator'


class ContractReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.handleSponsorInfoChange = this.handleSponsorInfoChange.bind(this)
        this.handleOtherRequirementChange = this.handleOtherRequirementChange.bind(this)


        this.validateFormData = this.validateFormData.bind(this)
        this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this)

        this.state = {
            agreeProtocol: true,//是否同意用户协议
            sponsorName: '于永雨',
            phoneName: '13020072525',
            otherRequirement: '',//其他要求
            otherRequirementValidationState: 'success',
            otherRequirementValidationFailedInfo: '',
            validattionFailedInfo: ''
        }
    }

    handleStateChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    validateOtherRequirement(otherRequirement){
        if(otherRequirement && otherRequirement.length >= 5){
            return '不得超过500个字！'
        }else{
            return null
        }
    }




    handleOtherRequirementChange(e){
        const otherRequirement = e.target.value

        this.handleStateChange('otherRequirement', otherRequirement)

        if(this.validateOtherRequirement(otherRequirement)){
            this.handleStateChange('otherRequirementValidationState', 'error')
        }else{
            this.handleStateChange('otherRequirementValidationState', 'success')
        }
    }


    handleSponsorInfoChange(infoName, value){
        this.handleStateChange(infoName, value)
    }




    validateFormData(){
        let validattionFailedInfo = ''
        const sponsorNameValidattionFailedInfo = Validator.validateSponsorName(this.state.sponsorName)
        const phoneNameValidattionFailedInfo = Validator.validatePhoneNumber(this.state.phoneName)
        const otherRequirementValidattionFailedInfo = this.validateOtherRequirement(this.state.otherRequirement)
        if(sponsorNameValidattionFailedInfo){
            validattionFailedInfo = sponsorNameValidattionFailedInfo
        }else if(phoneNameValidattionFailedInfo){
            validattionFailedInfo = phoneNameValidattionFailedInfo
        }else if(otherRequirementValidattionFailedInfo){
            validattionFailedInfo = otherRequirementValidattionFailedInfo
        }

        if(validattionFailedInfo && validattionFailedInfo.length > 0){
            this.handleStateChange('validattionFailedInfo', validattionFailedInfo)
            return false
        }else {
            this.handleStateChange('validattionFailedInfo', '')
            return true
        }
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
            <div className="requirement-detail">
                {/**工作流程**/}
                <Workflow/>

                {/**发起人信息**/}
                <SponsorInfo sponsorName={this.state.sponsorName} phoneNumber={this.state.phoneName} onSponsorInfoChange={(infoName, value) => this.handleSponsorInfoChange(infoName, value)}/>

                {/**需求表单**/}
                <RequirementForm>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>
                            <span className="required">*</span>上传附件<span className="tip">请上传需要审查的合同文档。</span>
                        </ControlLabel>
                        <FormControl
                            className="file-upload"
                            readOnly
                            type="text"
                            value={this.state.value}
                            placeholder="目前仅支持word格式"
                            onChange={this.handleChange}
                        />
                        <Button inline type="submit">点击上传</Button>

                        <HelpBlock>文件格式仅支持word</HelpBlock>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea" validationState={this.state.otherRequirementValidationState}>
                        <ControlLabel>其他要求</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            placeholder="请在此输入您对审查合同的要求，例如：关于本合同的签订背景、您所希望重点关注的合同条款，或者其他您对本次审查的特殊需求，加急完成等"
                            onChange={this.handleOtherRequirementChange}
                        />
                        <HelpBlock>{this.state.otherRequirementValidationFailedInfo}</HelpBlock>
                    </FormGroup>
                </RequirementForm>

                {/**提交区域**/}
                <SubmitBox agreeProtocol={this.state.agreeProtocol} validattionFailedInfo={this.state.validattionFailedInfo} onValidateFormData={this.validateFormData} onSubmitButtonClick={() => this.handleSubmitButtonClick()}/>
            </div>
        )
    }
}

export default ContractReviewForm