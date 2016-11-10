/**
 * Created by yuyongyu on 2016/11/10.
 */
import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'
import Validator from './Validator'

/**
 *     props
 * 1.required boolean (required)
 * 2.labelName string （required）
 * 3.labelDesc string (optional)
 * 4.placeholder string (optional)
 * 5.onTextareaValueChange function (required)
 * */

class TextareaField extends React.Component{
    constructor(props){
        super(props)
        this.handleTextareaValueChange = this.handleTextareaValueChange.bind(this)

        this.state = {
            textareaValueValidationState: 'success',
            textareaValueValidationFailedInfo: ''
        }

    }

    handleTextareaValueChange(e){
        const textareaValue = e.target.value

        this.props.onTextareaValueChange(textareaValue)


        /**
         * 校验规则：如果此处是必填项，校验所填内容是否为空；其他情况（必填时内容不为空、非必填）直接校验长度即可
         * */
        if(this.props.required && (!textareaValue || textareaValue.length < 1)){
            this.setState({
                textareaValueValidationState: 'error',
                textareaValueValidationFailedInfo: '此处为必填项，请输入'
            })
        }else{
            const validationFailInfo = Validator.validateTextareaValue(textareaValue)
            if(validationFailInfo){
                this.setState({
                    textareaValueValidationState: 'error',
                    textareaValueValidationFailedInfo: validationFailInfo
                })
            } else{
                this.setState({
                    textareaValueValidationState: 'success',
                    textareaValueValidationFailedInfo: ''
                })
            }
        }
    }


    render(){
        return(
            <FormGroup controlId="formControlsTextarea" validationState={this.state.textareaValueValidationState}>
                <ControlLabel>
                    {this.props.required ? <span className="required">*</span> : ''}
                    {this.props.labelTitle}
                    {this.props.labelDesc ? <span className="tip">{this.props.labelDesc}</span> : ''}
                </ControlLabel>
                <FormControl
                    componentClass="textarea"
                    placeholder={this.props.placeholder}
                    onChange={this.handleTextareaValueChange}
                />
                <HelpBlock>{this.state.textareaValueValidationFailedInfo}</HelpBlock>
            </FormGroup>
        )
    }
}

export default TextareaField