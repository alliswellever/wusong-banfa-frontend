/**
 * Created by yuyongyu on 2016/11/3.
 */
import React from 'react';
import Workflow from './components/Workflow'
import SponsorInfo from './components/SponsorInfo'
import RequirementForm from './components/RequirementForm'
import InputField from './components/InputField'
import DatePickerField from './components/DatePickerField'
import FileUploadField from './components/FileUploadField'
import TextareaField from './components/TextareaField'
import SubmitBox from './components/SubmitBox'
import { browserHistory } from 'react-router'
import {HelpBlock} from 'react-bootstrap'
import Validator from './components/Validator'

class CollectionLetter extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            agreeProtocol: true,//是否同意用户协议
            sponsorName: '于永雨',
            phoneNumber: '13020072525',
            debtorName: '',//被催款公司
            originalRepaymentDate: '',//原定还款日期
            creditorName: '',//催款公司
            expectedRepaymentDate: '',//期待还款日期
            debtorAddress: '',//被催款公司地址
            otherRequirement: '',//其他要求
            attachments: null,//上传的附件
            validattionFailedInfo: ''//提交前校验的错误信息
        }
    }

    validateDebtorName(debtorName){
        if(!debtorName){
            return '被催款公司名称为必填项！'
        }else if(Validator.validateInputValue(debtorName)){
            return Validator.validateInputValue(debtorName)
        }else{
            return null
        }
    }

    validateOriginalRepaymentDate(originalRepaymentDate){
        if(!originalRepaymentDate){
            return '请选择原定还款日期！'
        }else{
            return null
        }
    }

    validateCreditorName(creditorName){
        if(!creditorName){
            return '催款公司名称为必填项！'
        }else if(Validator.validateInputValue(creditorName)){
            return Validator.validateInputValue(creditorName)
        }else{
            return null
        }
    }

    //TODO
    validateExpectedRepaymentDate(expectedRepaymentDate){
        if(!expectedRepaymentDate){
            return '请选择期望还款日期！'
        }else{
            return null
        }
    }

    validateDebtorAddress(debtorAddress){
        if(Validator.validateInputValue(debtorAddress)){
            return Validator.validateInputValue(debtorAddress)
        }else{
            return null
        }
    }


    validateFormData(){
        let validattionFailedInfo = ''
        const sponsorNameValidattionFailedInfo = Validator.validateSponsorName(this.state.sponsorName)
        const phoneNameValidattionFailedInfo = Validator.validatePhoneNumber(this.state.phoneNumber)
        
        const debtorNameValidattionFailedInfo = this.validateDebtorName(this.state.debtorName)
        const originalRepaymentDateValidattionFailedInfo = this.validateOriginalRepaymentDate(this.state.originalRepaymentDate)
        const creditorNameValidattionFailedInfo = this.validateCreditorName(this.state.creditorName)
        const expectedRepaymentDateValidattionFailedInfo = this.validateExpectedRepaymentDate(this.state.expectedRepaymentDate)
        const debtorAddressValidattionFailedInfo = this.validateDebtorAddress(this.state.debtorAddress)
        
        const fileValidattionFailedInfo = Validator.validateUploadedFile(this.state.selectedFile)
        const otherRequirementValidattionFailedInfo = Validator.validateTextareaValue(this.state.otherRequirement)


        if(sponsorNameValidattionFailedInfo){
            validattionFailedInfo = sponsorNameValidattionFailedInfo
        }else if(phoneNameValidattionFailedInfo){
            validattionFailedInfo = phoneNameValidattionFailedInfo
        }else if(debtorNameValidattionFailedInfo){
            validattionFailedInfo = debtorNameValidattionFailedInfo
        }else if(originalRepaymentDateValidattionFailedInfo){
            validattionFailedInfo = originalRepaymentDateValidattionFailedInfo
        }else if(creditorNameValidattionFailedInfo){
            validattionFailedInfo = creditorNameValidattionFailedInfo
        }else if(expectedRepaymentDateValidattionFailedInfo){
            validattionFailedInfo = expectedRepaymentDateValidattionFailedInfo
        }else if(debtorAddressValidattionFailedInfo){
            validattionFailedInfo = debtorAddressValidattionFailedInfo
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

    handleDebtorNameChange(debtorName){
        this.handleStateChange('debtorName', debtorName)
    }

    handleOriginalRepaymentDateChange(originalRepaymentDate){
        this.handleStateChange('originalRepaymentDate', originalRepaymentDate)
    }

    handleCreditorNameChange(creditorName){
        this.handleStateChange('creditorName', creditorName)
    }

    handleExpectedRepaymentDateChange(expectedRepaymentDate){
        this.handleStateChange('expectedRepaymentDate', expectedRepaymentDate)
    }

    handleDebtorAddressChange(debtorAddress){
        this.handleStateChange('debtorAddress', debtorAddress)
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
            debtorCompanyName: this.state.debtorName,
            originalRepaymentDate: this.state.originalRepaymentDate,
            creditorCompanyName: this.state.creditorName,
            repaymentDays: this.state.expectedRepaymentDate,
            sendToAddress: this.state.debtorAddress,
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
                    <HelpBlock bsClass="requirement-help">
                        <div>发送催收函的主要目的在于通过律师介入的方式，要求欠款方及时返还款项，以下内容为律师催收函的必备内容，请认真填写并核对信息无误后提交请求。</div>
                    </HelpBlock>
                    <InputField
                        required={true}
                        labelTitle="被催款公司名称"
                        placeholder="请填写"
                        value={this.state.debtorName}
                        validateInputValue={(debtorName) => this.validateDebtorName(debtorName)}
                        onInputChange={(debtorName) => this.handleDebtorNameChange(debtorName)}
                    />
                    <DatePickerField
                        required={true}
                        labelTitle="原定还款日期"
                        placeholder="请选择日期"
                        onSelectedDateChange={(originalRepaymentDate) => this.handleOriginalRepaymentDateChange(originalRepaymentDate)}
                    />
                    <InputField
                        required={true}
                        labelTitle="催款公司名称"
                        placeholder="请填写"
                        value={this.state.creditorName}
                        validateInputValue={(creditorName) => this.validateCreditorName(creditorName)}
                        onInputChange={(creditorName) => this.handleCreditorNameChange(creditorName)}
                    />
                    <DatePickerField
                        required={true}
                        labelTitle="期望还款日期"
                        placeholder="请选择日期"
                        onSelectedDateChange={(expectedRepaymentDate) => this.handleExpectedRepaymentDateChange(expectedRepaymentDate)}
                    />
                    <InputField
                        required={false}
                        labelTitle="如需律师寄送催收函，请留下被催款公司地址，联系人及电话（写在详细地址即可）"
                        placeholder="详细地址、联系人、电话"
                        value={this.state.debtorAddress}
                        validateInputValue={(debtorAddress) => this.validateDebtorAddress(debtorAddress)}
                        onInputChange={(debtorAddress) => this.handleDebtorAddressChange(debtorAddress)}
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
                        placeholder="请在此输入您对催收函的要求，例如：时间紧迫，请尽快帮我找到律师"
                        onTextareaValueChange={(otherRequirement) => this.handleOtherRequirementChange(otherRequirement)}
                    />
                </RequirementForm>

                {/**提交区域**/}
                <SubmitBox agreeProtocol={this.state.agreeProtocol} validattionFailedInfo={this.state.validattionFailedInfo} onFormDataValidate={() => this.validateFormData()} onSubmitButtonClick={() => this.handleFormSubmit()}/>
            </div>
        )
    }
}

export default CollectionLetter;