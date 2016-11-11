/**
 * Created by yuyongyu on 2016/11/3.
 */
import React from 'react';
import Workflow from './components/Workflow'
import SponsorInfo from './components/SponsorInfo'
import RequirementForm from './components/RequirementForm'
import RadioField from './components/RadioField'
import DatePickerField from './components/DatePickerField'
import FileUploadField from './components/FileUploadField'
import TextareaField from './components/TextareaField'
import SubmitBox from './components/SubmitBox'
import { browserHistory } from 'react-router'

import Validator from './components/Validator'






class LegalConsultation extends React.Component{
    constructor(props) {
        super(props);
        this.handleSponsorInfoChange = this.handleSponsorInfoChange.bind(this)
        this.handleConsultingDetailChange = this.handleConsultingDetailChange.bind(this)
        this.handleContactDateChange = this.handleContactDateChange.bind(this)
        this.handleNeedLegalAdviceChange = this.handleNeedLegalAdviceChange.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)
        this.validateFormData = this.validateFormData.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

        const needLegalAdviceOptions = [
            {
                value: 1,
                name: '是',
                defaultChecked: false
            },
            {
                value: 2,
                name: '否',
                defaultChecked: false
            }
        ]

        this.state = {
            agreeProtocol: true,//是否同意用户协议
            sponsorName: '于永雨',
            phoneNumber: '13020072525',
            consultingDetail: '',//咨询的问题
            contactDate: '',//允许律师来电时间
            needLegalAdvice: 0,//提供书面法律意见
            needLegalAdviceOptions: needLegalAdviceOptions,
            selectedFile: null,//上传的附件
            otherRequirement: '',//其他要求
            validattionFailedInfo: ''//提交前校验的错误信息
        }
    }

    validateConsultingDetail(consultingDetail){
        if(!consultingDetail || consultingDetail.length < 30){
            return '请您输入不少于30字的问题描述！'
        }else if(Validator.validateTextareaValue(consultingDetail)){
            return Validator.validateTextareaValue(consultingDetail)
        }else{
            return null
        }
    }

    validateContactDate(contactDate){
        if(!contactDate){
            return '请选择接受律师来电的日期！'
        }else{
            return null
        }
    }

    validateNeedLegalAdvice(needLegalAdvice){
        if(needLegalAdvice != 1 && needLegalAdvice != 2){
            return '请选择是否需要律师出具书面法律意见！'
        }else{
            return null
        }
    }

    validateFormData(){
        let validattionFailedInfo = ''
        const sponsorNameValidattionFailedInfo = Validator.validateSponsorName(this.state.sponsorName)
        const phoneNameValidattionFailedInfo = Validator.validatePhoneNumber(this.state.phoneNumber)
        const consultingDetailValidattionFailedInfo = this.validateConsultingDetail(this.state.consultingDetail)
        const contactDateValidattionFailedInfo = this.validateContactDate(this.state.contactDate)
        const needLegalAdviceValidattionFailedInfo = this.validateNeedLegalAdvice(this.state.needLegalAdvice)
        const fileValidattionFailedInfo = Validator.validateUploadedFile(this.state.selectedFile)
        const otherRequirementValidattionFailedInfo = Validator.validateTextareaValue(this.state.otherRequirement)


        if(sponsorNameValidattionFailedInfo){
            validattionFailedInfo = sponsorNameValidattionFailedInfo
        }else if(phoneNameValidattionFailedInfo){
            validattionFailedInfo = phoneNameValidattionFailedInfo
        }else if(consultingDetailValidattionFailedInfo){
            validattionFailedInfo = consultingDetailValidattionFailedInfo
        }else if(contactDateValidattionFailedInfo){
            validattionFailedInfo = contactDateValidattionFailedInfo
        }else if(needLegalAdviceValidattionFailedInfo){
            validattionFailedInfo = needLegalAdviceValidattionFailedInfo
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

    handleConsultingDetailChange(consultingDetail){
        this.handleStateChange('consultingDetail', consultingDetail)
    }

    handleContactDateChange(contactDate){
        this.handleStateChange('contactDate', contactDate)
    }


    handleNeedLegalAdviceChange(needLegalAdvice){
        this.handleStateChange('needLegalAdvice', needLegalAdvice)
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
            problemDescription: this.state.consultingDetail,
            userAcceptedCallTime: this.state.contactDate,
            provideLegalOption: parseInt(this.state.needLegalAdvice),
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
                    <TextareaField
                        required={true}
                        labelTitle="简单描述您遇到的问题（不少于30个字）"
                        placeholder="问题描述"
                        onTextareaValueChange={(consultingDetail) => this.handleConsultingDetailChange(consultingDetail)}
                    />
                    <DatePickerField
                        required={true}
                        labelTitle="什么时候接受律师来电解答？"
                        labelDesc="具体来电时间请填写在“其他要求”中。"
                        placeholder="请选择日期"
                        onSelectedDateChange={(contactDate) => this.handleContactDateChange(contactDate)}
                    />
                    <RadioField
                        required={true}
                        labelTitle="是否需要律师出具书面法律意见？"
                        labelDesc="出具书面法律意见属于另外法律服务，需要消耗一次服务机会或额外支付价款。"
                        radioList={this.state.needLegalAdviceOptions}
                        inline={true}
                        onRadioChange={(needLegalAdvice) => this.handleNeedLegalAdviceChange(needLegalAdvice)}
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
                        placeholder="请在此输入您对法律咨询的其他要求，例如：时间紧迫，请帮我尽快找到律师等。"
                        onTextareaValueChange={(otherRequirement) => this.handleOtherRequirementChange(otherRequirement)}
                    />
                </RequirementForm>

                {/**提交区域**/}
                <SubmitBox agreeProtocol={this.state.agreeProtocol} validattionFailedInfo={this.state.validattionFailedInfo} onFormDataValidate={this.validateFormData} onSubmitButtonClick={() => this.handleFormSubmit()}/>
            </div>
        )
    }
}

export default LegalConsultation;