/**
 * Created by yuyongyu on 2016/11/3.
 */
import React from 'react';
import Workflow from './components/Workflow'
import SponsorInfo from './components/SponsorInfo'
import RequirementForm from './components/RequirementForm'
import DropdownField from './components/DropdownField'
import FileUploadField from './components/FileUploadField'
import TextareaField from './components/TextareaField'
import SubmitBox from './components/SubmitBox'
import { browserHistory } from 'react-router'
import {HelpBlock} from 'react-bootstrap'
import Validator from './components/Validator'


class ContractCreationForm extends React.Component{
    constructor(props) {
        super(props)
        this.handleSponsorInfoChange = this.handleSponsorInfoChange.bind(this)
        this.handleContractTypeChange = this.handleContractTypeChange.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)
        this.handleOtherRequirementChange = this.handleOtherRequirementChange.bind(this)

        this.validateFormData = this.validateFormData.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

        const contractTypes = [
            {
                value: 1,
                name: '日常经营合同（如买卖合同、合同协议等）'
            },
            {
                value: 2,
                name: '劳动人事合同（如劳动合同、实习协议等）'
            },
            {
                value: 3,
                name: '租赁合同（如房屋、柜台、车辆租赁等）'
            },
            {
                value: 4,
                name: '规章制度（员工手册、公司章程等）'
            },
            {
                value: 5,
                name: '互联网有关合同（如用户协议、网站转让协议等）'
            },
            {
                value: 6,
                name: '知识产权合同（如商标、肖像权、专利转让等）'
            },
            {
                value: 7,
                name: '其他'
            }
        ]

        this.state = {
            agreeProtocol: true,//是否同意用户协议
            sponsorName: '于永雨',
            phoneNumber: '13020072525',
            selectedContractType: {
                value: null,
                name: '---请选择---'
            },
            contractTypes: contractTypes,
            otherRequirement: '',//其他要求
            attachments: null,//上传的附件
            validattionFailedInfo: ''//提交前校验的错误信息
        }
    }

    validateContractType(contractType){
        if(!contractType){
            return '请选择您要起草的合同类型！'
        }else{
            return null
        }
    }

    validateFormData(){
        let validattionFailedInfo = ''
        const sponsorNameValidattionFailedInfo = Validator.validateSponsorName(this.state.sponsorName)
        const phoneNameValidattionFailedInfo = Validator.validatePhoneNumber(this.state.phoneNumber)
        const contractTypeValidattionFailedInfo = this.validateContractType(this.state.selectedContractType.value)
        const fileValidattionFailedInfo = Validator.validateUploadedFile(this.state.selectedFile)
        const otherRequirementValidattionFailedInfo = Validator.validateTextareaValue(this.state.otherRequirement)


        if(sponsorNameValidattionFailedInfo){
            validattionFailedInfo = sponsorNameValidattionFailedInfo
        }else if(phoneNameValidattionFailedInfo){
            validattionFailedInfo = phoneNameValidattionFailedInfo
        }else if(contractTypeValidattionFailedInfo){
            validattionFailedInfo = contractTypeValidattionFailedInfo
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

    handleContractTypeChange(selectedContractType){
        this.handleStateChange('selectedContractType', selectedContractType)
    }

    handleOtherRequirementChange(otherRequirement){
        this.handleStateChange('otherRequirement', otherRequirement)
    }

    handleFileChange(selectedFile){
        this.handleStateChange('selectedFile', selectedFile)
    }

    handleFormSubmit(){
        this.handleStateChange('agreeProtocol', false)

        let submitData = {
            orderSource: 1,
            contactsName: this.state.sponsorName,
            contactsMobileNumber: this.state.phoneNumber,
            contractDraftType: this.state.selectedContractType.value,
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
                    <DropdownField
                        id="contract-type-dropdown"
                        required={true}
                        labelTitle="您要起草什么合同？"
                        selectedItem={this.state.selectedContractType}
                        dropdownMenu={this.state.contractTypes}
                        onSelectedItemChange={(selectedContractType) => this.handleContractTypeChange(selectedContractType)}
                    />

                    <FileUploadField
                        required={false}
                        labelTitle="上传附件"
                        labelDesc="请上传您认为有助于顾问和律师了解问题的材料。"
                        placeholder="目前仅支持文本格式（.doc、.docx、.page、.pdf）和压缩格式（.zip、.rar）"
                        onFileChange={(selectedFile) => this.handleFileChange(selectedFile)}
                    />
                    <HelpBlock bsClass="requirement-help">
                        <div className="title">预计合同起草完成时间：3个工作日</div>
                        <div>为保证合同起草质量，一份合同需要3个工作日完成，遇有节假日则会顺延。如您有特别加急需求，请在其他要求处填写。</div>
                    </HelpBlock>
                    <TextareaField
                        required={false}
                        labelTitle="其他要求"
                        placeholder="请在此输入您对起草合同的要求，例如：关于本合同的签订背景、您所希望重点关注的合同条款，或者其他您对本次起草的特殊需求，加急完成等"
                        onTextareaValueChange={(otherRequirement) => this.handleOtherRequirementChange(otherRequirement)}
                    />
                </RequirementForm>

                {/**提交区域**/}
                <SubmitBox agreeProtocol={this.state.agreeProtocol} validattionFailedInfo={this.state.validattionFailedInfo} onFormDataValidate={this.validateFormData} onSubmitButtonClick={() => this.handleFormSubmit()}/>
            </div>
        )
    }
}

export default ContractCreationForm;