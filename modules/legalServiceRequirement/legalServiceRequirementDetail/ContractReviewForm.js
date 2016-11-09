/**
 * Created by yuyongyu on 2016/11/3.
 */
import React from 'react'
import Workflow from './components/Workflow'
import SponsorInfo from './components/SponsorInfo'
import RequirementForm from './components/RequirementForm'
import FileUpload from './components/FileUpload'
import SubmitBox from './components/SubmitBox'
import { browserHistory } from 'react-router'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap'
import Validator from './components/Validator'

class ContractReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.handleSponsorInfoChange = this.handleSponsorInfoChange.bind(this)
        this.handleOtherRequirementChange = this.handleOtherRequirementChange.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)


        this.validateFormData = this.validateFormData.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

        this.state = {
            agreeProtocol: true,//是否同意用户协议
            sponsorName: '于永雨',
            phoneName: '13020072525',

            otherRequirement: '',//其他要求
            otherRequirementValidationState: 'success',
            otherRequirementValidationFailedInfo: '',

            selectedFile: null,//上传的附件


            validattionFailedInfo: ''//提交前校验的错误信息
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

    validateFile(file){
        if(!file){
            return '必须上传附件！'
        }else if(Validator.validateUploadedFile(file)){
            return Validator.validateUploadedFile(file)
        }else{
            return null
        }
    }


    validateFormData(){
        let validattionFailedInfo = ''
        const sponsorNameValidattionFailedInfo = Validator.validateSponsorName(this.state.sponsorName)
        const phoneNameValidattionFailedInfo = Validator.validatePhoneNumber(this.state.phoneName)
        const otherRequirementValidattionFailedInfo = this.validateOtherRequirement(this.state.otherRequirement)
        const fileValidattionFailedInfo = this.validateFile(this.state.selectedFile)

        if(sponsorNameValidattionFailedInfo){
            validattionFailedInfo = sponsorNameValidattionFailedInfo
        }else if(phoneNameValidattionFailedInfo){
            validattionFailedInfo = phoneNameValidattionFailedInfo
        }else if(otherRequirementValidattionFailedInfo){
            validattionFailedInfo = otherRequirementValidattionFailedInfo
        }else if(fileValidattionFailedInfo){
            validattionFailedInfo = fileValidattionFailedInfo
        }

        if(validattionFailedInfo && validattionFailedInfo.length > 0){
            this.handleStateChange('validattionFailedInfo', validattionFailedInfo)
            return false
        }else {
            this.handleStateChange('validattionFailedInfo', '')
            return true
        }
    }


    handleSponsorInfoChange(infoName, value){
        this.handleStateChange(infoName, value)
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

    handleFileChange(selectedFile){
        this.handleStateChange('selectedFile', selectedFile)
    }
    

    handleFormSubmit(){
        this.handleStateChange('agreeProtocol', false)

        let submitData = {
            agreeProtocol: true,
            sponsorName: this.state.sponsorName,
            phoneName: this.state.phoneName,
            selectedFile: this.state.selectedFile,//上传的附件
            otherRequirement: this.state.otherRequirement,//其他要求
        }

        console.log(this.state)
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
                    <FileUpload
                        required={true}
                        labelTitle="上传附件"
                        labelDesc="请上传需要审查的合同文档。"
                        onFileChange={(selectedFile) => this.handleFileChange(selectedFile)}
                    />

                    <HelpBlock bsClass="requirement-help">
                        <div className="title">预计合同审查完成时间：2个工作日</div>
                        <div>为保证合同审查质量，一份合同需要2个工作日完成，遇有节假日则会顺延。如您有特别加急需求，请在其他要求处填写。</div>
                    </HelpBlock>

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
                <SubmitBox agreeProtocol={this.state.agreeProtocol} validattionFailedInfo={this.state.validattionFailedInfo} onValidateFormData={this.validateFormData} onSubmitButtonClick={() => this.handleFormSubmit()}/>
            </div>
        )
    }
}

export default ContractReviewForm