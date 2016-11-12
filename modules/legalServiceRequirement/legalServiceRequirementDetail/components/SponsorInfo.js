/**
 * Created by yuyongyu on 2016/11/4.
 */
import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Collapse} from 'react-bootstrap'
import Validator from './Validator'

/**
 *     props
 * 1.sponsorName string （required）
 * 2.phoneNumber string （required）
 * 3.onSponsorInfoChange function (required)
 *
 * */
class SponsorInfo extends React.Component{
    constructor(props){
        super(props)
        this.handleSponsorNameChange = this.handleSponsorNameChange.bind(this)
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this)

        this.state = {
            sponsorNameValidationState: 'success',
            sponsorNameValidationFailedInfo: '',
            phoneNumberValidationState: 'success',
            phoneNumberValidationFailedInfo: ''
        }

    }

    handleSponsorNameChange(e) {
        const newSponsorName = e.target.value
        const validationFailedInfo = Validator.validateSponsorName(newSponsorName)
        if(validationFailedInfo && validationFailedInfo.length > 0){
            this.setState({
                sponsorNameValidationState: 'error',
                sponsorNameValidationFailedInfo: validationFailedInfo
            });
        }else{
            this.setState({
                sponsorNameValidationState: 'success',
                sponsorNameValidationFailedInfo: ''
            });
        }

        this.props.onSponsorInfoChange('sponsorName', newSponsorName);
    }

    handlePhoneNumberChange(e) {
        const newPhoneNumber = e.target.value

        const validationFailedInfo = Validator.validatePhoneNumber(newPhoneNumber)
        if(validationFailedInfo && validationFailedInfo.length > 0){
            this.setState({
                phoneNumberValidationState: 'error',
                phoneNumberValidationFailedInfo: validationFailedInfo
            });
        }else {
            this.setState({
                phoneNumberValidationState: 'success',
                phoneNumberValidationFailedInfo: ''
            });
        }

        this.props.onSponsorInfoChange('phoneNumber', newPhoneNumber);
    }


    render(){
        return (
            <div className="sponsor-info">
                <FormGroup controlId="sponsorName" validationState={this.state.sponsorNameValidationState}>
                    <ControlLabel>
                        <span className="required">*</span>发起人称呼<span className="tip">需要了解更多背景资料时，顾问需要和您联系。</span>
                    </ControlLabel>
                    <FormControl
                        type="text"
                        value={this.props.sponsorName}
                        placeholder="请输入联系人姓名"
                        onChange={this.handleSponsorNameChange}
                    />
                    <Collapse in={this.state.sponsorNameValidationFailedInfo !== null && this.state.sponsorNameValidationFailedInfo.length > 0}>
                        <HelpBlock >{this.state.sponsorNameValidationFailedInfo}</HelpBlock>
                    </Collapse>
                </FormGroup>
                <FormGroup controlId="phoneNumber" validationState={this.state.phoneNumberValidationState}>
                    <ControlLabel>
                        <span className="required">*</span>发起人手机号<span className="tip">一次让您满意的法律服务可能需要多次沟通，请留下电话并保持电话畅通。</span>
                    </ControlLabel>
                    <FormControl
                        type="text"
                        value={this.props.phoneNumber}
                        placeholder="请输入联系人手机号"
                        onChange={this.handlePhoneNumberChange}
                    />
                    <Collapse in={this.state.phoneNumberValidationFailedInfo !== null && this.state.phoneNumberValidationFailedInfo.length > 0}>
                        <HelpBlock >{this.state.phoneNumberValidationFailedInfo}</HelpBlock>
                    </Collapse>
                </FormGroup>
            </div>
        )
    }
}

export default SponsorInfo;