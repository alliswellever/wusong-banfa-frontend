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
import { browserHistory } from 'react-router'
import {HelpBlock} from 'react-bootstrap'
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
            purposeOptions: purposeOptions,
            otherRequirement: '',//其他要求
            attachments: null,//上传的附件
            validattionFailedInfo: ''//提交前校验的错误信息
        }
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
                        onRadioChange={(purpose) => this.handlePurposeChange(purpose)}
                    />

                    <InputField
                        required={false}
                        labelTitle="如需律师寄送催收函，请留下您的地址，联系人及电话（写在详细地址即可）"
                        placeholder="详细地址、联系人、电话"
                        value={this.state.receiverAddress}
                        validateInputValue={this.validateReceiverAddress}
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
                <SubmitBox agreeProtocol={this.state.agreeProtocol} validattionFailedInfo={this.state.validattionFailedInfo} onFormDataValidate={this.validateFormData} onSubmitButtonClick={() => this.handleFormSubmit()}/>
            </div>
        )
    }
}

export default LawyerLetter;