/**
 * Created by yuyongyu on 2016/11/4.
 */
import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'

class SponsorInfo extends React.Component{
    constructor(props){
        super(props)
        this.handleSponsorNameChange = this.handleSponsorNameChange.bind(this)
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this)

        this.state = {
            sponsorNameValidationState: 'success',
            phoneNumberValidationState: 'success'
        }

    }

    handleSponsorNameChange(e) {
        const newSponsorName = e.target.value
        const length = newSponsorName.length;
        if(1 < length && length <= 20 ){
            this.setState({
                sponsorNameValidationState: 'success'
            });
        }else{
            this.setState({
                sponsorNameValidationState: 'error'
            });
        }

        this.props.onSponsorInfoChange('sponsorName', newSponsorName);
    }

    handlePhoneNumberChange(e) {
        const newPhoneNumber = e.target.value
        const reg = /^1[3|4|5|8][0-9]\d{8}$/;
        if(reg.test(newPhoneNumber)){
            this.setState({
                phoneNumberValidationState: 'success'
            });
        }else {
            this.setState({
                phoneNumberValidationState: 'error'
            });
        }

        this.props.onSponsorInfoChange('phoneName', newPhoneNumber);
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
                    <HelpBlock >{this.state.sponsorNameValidationState === 'error' ? '联系人姓名为必填项，且长度不超过20位！' : ''}</HelpBlock>
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
                    <HelpBlock >{this.state.phoneNumberValidationState === 'error' ? '手机号必须为11位数字！' : ''}</HelpBlock>
                </FormGroup>
            </div>
        )
    }
}

export default SponsorInfo;