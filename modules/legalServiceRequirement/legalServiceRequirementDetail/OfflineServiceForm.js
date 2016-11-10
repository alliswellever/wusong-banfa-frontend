/**
 * Created by yuyongyu on 2016/11/3.
 */
import React from 'react';
import Workflow from './components/Workflow'
import SponsorInfo from './components/SponsorInfo'
import RequirementForm from './components/RequirementForm'
import FileUploadField from './components/FileUploadField'
import TextareaField from './components/TextareaField'
import SubmitBox from './components/SubmitBox'
import Validator from './components/Validator'
import { browserHistory } from 'react-router'


class OfflineService extends React.Component{
    constructor(props){
        super(props)
        this.handleSponsorInfoChange = this.handleSponsorInfoChange.bind(this)
        this.handleRequirementDescriptionChange = this.handleRequirementDescriptionChange.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)

        this.validateFormData = this.validateFormData.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

        this.state = {
            agreeProtocol: true,//是否同意用户协议
            sponsorName: '于永雨',
            phoneNumber: '13020072525',
            requirementDescription: '',//需求描述
            selectedFile: null,//上传的附件
            validattionFailedInfo: ''//提交前校验的错误信息
        }
    }

    validateRequirementDescription(requirementDescription){
        if(!requirementDescription || requirementDescription.length < 1){
            return '必须填写您遇到的问题！'
        }else if(Validator.validateTextareaValue(requirementDescription)){
            return Validator.validateTextareaValue(requirementDescription)
        }else{
            return null
        }
    }

    validateFormData(){
        let validattionFailedInfo = ''
        const sponsorNameValidattionFailedInfo = Validator.validateSponsorName(this.state.sponsorName)
        const phoneNameValidattionFailedInfo = Validator.validatePhoneNumber(this.state.phoneNumber)
        const requirementDescriptionValidattionFailedInfo = this.validateRequirementDescription(this.state.requirementDescription)
        const fileValidattionFailedInfo = Validator.validateUploadedFile(this.state.selectedFile)

        if(sponsorNameValidattionFailedInfo){
            validattionFailedInfo = sponsorNameValidattionFailedInfo
        }else if(phoneNameValidattionFailedInfo){
            validattionFailedInfo = phoneNameValidattionFailedInfo
        }else if(requirementDescriptionValidattionFailedInfo){
            validattionFailedInfo = requirementDescriptionValidattionFailedInfo
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

    handleStateChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    handleSponsorInfoChange(infoName, value){
        this.handleStateChange(infoName, value)
    }

    handleRequirementDescriptionChange(requirementDescription){
        this.handleStateChange('requirementDescription', requirementDescription)
    }

    handleFileChange(selectedFile){
        this.handleStateChange('selectedFile', selectedFile)
    }


    handleFormSubmit(){
        this.handleStateChange('agreeProtocol', false)

        let submitData = {
            requirementType: this.props.requirementType,
            contactsName: this.state.sponsorName,
            contactsMobileNumber: this.state.phoneNumber,
            orderSource: 1,
            contractFiles: this.state.selectedFile,//上传的附件
            problemDescription: this.state.requirementDescription,//其他要求
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
                        labelTitle="简单描述您遇到的问题"
                        labelDesc="顾问会根据您描述的问题帮你理清需求，为您找到合适的律师解决问题。"
                        placeholder="问题描述"
                        onTextareaValueChange={(requirementDescription) => this.handleRequirementDescriptionChange(requirementDescription)}
                    />

                    <FileUploadField
                        required={false}
                        labelTitle="上传附件"
                        labelDesc="请上传您认为有助于顾问和律师了解问题的材料。"
                        placeholder="目前仅支持文本格式（.doc、.docx、.page、.pdf）和压缩格式（.zip、.rar）"
                        onFileChange={(selectedFile) => this.handleFileChange(selectedFile)}
                    />
                </RequirementForm>

                {/**提交区域**/}
                <SubmitBox agreeProtocol={this.state.agreeProtocol} validattionFailedInfo={this.state.validattionFailedInfo} onFormDataValidate={this.validateFormData} onSubmitButtonClick={() => this.handleFormSubmit()}/>
            </div>
        )
    }
}

export default OfflineService;