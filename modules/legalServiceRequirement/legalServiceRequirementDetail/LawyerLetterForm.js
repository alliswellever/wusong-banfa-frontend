/**
 * Created by yuyongyu on 2016/11/3.
 */
import React from 'react';
import Workflow from './components/Workflow'
import SponsorInfo from './components/SponsorInfo'
import RequirementForm from './components/RequirementForm'
import RadioField from './components/RadioField'
import InputField from './components/InputField'
import FileUploadField from './components/FileUploadField'
import TextareaField from './components/TextareaField'
import SubmitBox from './components/SubmitBox'
import {FormGroup, FormControl, HelpBlock, Collapse} from 'react-bootstrap'
import { browserHistory } from 'react-router'
import Validator from './components/Validator'

class LawyerLetter extends React.Component{
    constructor(props) {
        super(props)

        const purposeOptions = [
            {
                value: 1,
                name: '督促警告（要求他人做什么或不做什么）',
                defaultChecked: false
            },
            {
                value: 2,
                name: '询问涵（用于了解、询问有关法律事项）',
                defaultChecked: false
            },
            {
                value: 3,
                name: '答复涵',
                defaultChecked: false
            },
            {
                value: 4,
                name: '其他',
                defaultChecked: false
            }
        ]

        this.state = {
            agreeProtocol: true,//是否同意用户协议
            sponsorName: '于永雨',
            phoneNumber: '13020072525',
            purposeType: 0,
            purposeOptions: purposeOptions,
            otherPurposeDescription: '',
            otherPurposeDescriptionValidattionFailedInfo: '',
            receiverAddress: '',
            attachments: null,//上传的附件
            otherRequirement: '',//其他要求
            validattionFailedInfo: ''//提交前校验的错误信息
        }
    }

    validatePurposeType(purposeType){
        if(!(purposeType === 1 || purposeType === 2 ||  purposeType === 3 || purposeType === 4)){
            return '请选择发送律师函的主要目的！'
        }else{
            return null
        }
    }
    
    validatePurposeDescription(purposeDescription){
        if(purposeDescription && purposeDescription.length > 500){
            return '不得超过500个字！'
        }else{
            return null
        }
    }

    validateReceiverAddress(receiverAddress){
        if(receiverAddress && receiverAddress.length > 500){
            return '不得超过500个字！'
        }else{
            return null
        }
    }

    validateFormData(){
        let validattionFailedInfo = ''
        const sponsorNameValidattionFailedInfo = Validator.validateSponsorName(this.state.sponsorName)
        const phoneNameValidattionFailedInfo = Validator.validatePhoneNumber(this.state.phoneNumber)
        const purposeTypeValidattionFailedInfo = this.validatePurposeType(this.state.purposeType)
        const purposeDescriptionValidattionFailedInfo = this.validatePurposeDescription(this.state.purposeDescription)
        const receiverAddressValidattionFailedInfo = this.validateReceiverAddress(this.state.receiverAddress)
        const fileValidattionFailedInfo = Validator.validateUploadedFile(this.state.selectedFile)
        const otherRequirementValidattionFailedInfo = Validator.validateTextareaValue(this.state.otherRequirement)


        if(sponsorNameValidattionFailedInfo){
            validattionFailedInfo = sponsorNameValidattionFailedInfo
        }else if(phoneNameValidattionFailedInfo){
            validattionFailedInfo = phoneNameValidattionFailedInfo
        }else if(purposeTypeValidattionFailedInfo){
            validattionFailedInfo = purposeTypeValidattionFailedInfo
        }else if(purposeDescriptionValidattionFailedInfo){
            validattionFailedInfo = purposeDescriptionValidattionFailedInfo
        }else if(receiverAddressValidattionFailedInfo){
            validattionFailedInfo = receiverAddressValidattionFailedInfo
        }else if(fileValidattionFailedInfo){
            validattionFailedInfo = fileValidattionFailedInfo
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

    handleStateChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    handleSponsorInfoChange(infoName, value){
        this.handleStateChange(infoName, value)
    }

    handlePurposeTypeChange(purposeType){
        this.handleStateChange('purposeType', parseInt(purposeType))
    }

    handleOtherPurposeDescriptionChange(e){
        const otherPurposeDescription = e.target.value
        if(this.validatePurposeDescription(otherPurposeDescription)){
            this.handleStateChange('otherPurposeDescriptionValidattionFailedInfo', this.validatePurposeDescription(otherPurposeDescription))
        }else {
            this.handleStateChange('otherPurposeDescriptionValidattionFailedInfo', '')
        }
        
        this.handleStateChange('otherPurposeDescription', otherPurposeDescription)
    }

    handleReceiverAddressChange(receiverAddress){
        this.handleStateChange('receiverAddress', receiverAddress)
    }

    handleFileChange(selectedFile){
        this.handleStateChange('selectedFile', selectedFile)
    }

    handleOtherRequirementChange(otherRequirement){
        this.handleStateChange('otherRequirement', otherRequirement)
    }

    handleFormSubmit(){
        this.handleStateChange('agreeProtocol', false)

        let submitData = {
            orderSource: 1,
            contactsName: this.state.sponsorName,
            contactsMobileNumber: this.state.phoneNumber,
            purposeType: parseInt(this.state.purposeType),
            purposeDescription: this.state.otherPurposeDescription,
            sendToAddress: this.state.receiverAddress,
            attachments: this.state.selectedFile,//上传的附件
            userComment: this.state.otherRequirement,//其他要求
        }

        console.log(submitData)
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
                <SponsorInfo sponsorName={this.state.sponsorName} phoneNumber={this.state.phoneNumber} onSponsorInfoChange={(infoName, value) => this.handleSponsorInfoChange(infoName, value)}/>

                {/**需求表单**/}
                <RequirementForm>
                    <RadioField
                        required={true}
                        labelTitle="发送律师函的主要目的"
                        radioList={this.state.purposeOptions}
                        onRadioChange={(purposeType) => this.handlePurposeTypeChange(purposeType)}
                    />
                    <Collapse in={this.state.purposeType === 4}>
                        <FormGroup>
                            <FormControl
                                type="text"
                                value={this.state.otherPurposeDescription}
                                placeholder="请简要描述发送律师函目的"
                                onChange={(e) => this.handleOtherPurposeDescriptionChange(e)}
                            />
                            <Collapse in={this.state.otherPurposeDescriptionValidattionFailedInfo !== null && this.state.otherPurposeDescriptionValidattionFailedInfo.length > 0}>
                                <HelpBlock>{this.state.otherPurposeDescriptionValidattionFailedInfo}</HelpBlock>
                            </Collapse>
                        </FormGroup>
                    </Collapse>

                    <InputField
                        required={false}
                        labelTitle="如需律师寄送催收函，请留下您的地址，联系人及电话（写在详细地址即可）"
                        placeholder="详细地址、联系人、电话"
                        value={this.state.receiverAddress}
                        validateInputValue={(receiverAddress) => this.validateReceiverAddress(receiverAddress)}
                        onInputChange={(receiverAddress) => this.handleReceiverAddressChange(receiverAddress)}
                    />
                    <FileUploadField
                        required={false}
                        labelTitle="上传附件"
                        labelDesc="请上传您认为有助于顾问和律师了解问题的材料。"
                        placeholder="目前仅支持文本格式（.doc、.docx、.page、.pdf）和压缩格式（.zip、.rar）"
                        onFileChange={(selectedFile) => this.handleFileChange(selectedFile)}
                    />
                    <TextareaField
                        required={false}
                        labelTitle="其他要求"
                        placeholder="请在此输入您对律师的要求，例如：时间紧迫，请尽快帮我找到律师"
                        onTextareaValueChange={(otherRequirement) => this.handleOtherRequirementChange(otherRequirement)}
                    />
                </RequirementForm>

                {/**提交区域**/}
                <SubmitBox agreeProtocol={this.state.agreeProtocol} validattionFailedInfo={this.state.validattionFailedInfo} onFormDataValidate={() => this.validateFormData()} onSubmitButtonClick={() => this.handleFormSubmit()}/>
            </div>
        )
    }
}

export default LawyerLetter;