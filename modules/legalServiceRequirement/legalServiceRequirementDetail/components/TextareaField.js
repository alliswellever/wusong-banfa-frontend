/**
 * Created by yuyongyu on 2016/11/10.
 */
import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'
import Validator from './Validator'

/**
 *     props
 * required boolean (required)
 * labelName string （required）
 * labelDesc string (optional)
 * placeholder string (optional)
 * onTextareaValueChange function (required)
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
                    placeholder="请在此输入您对审查合同的要求，例如：关于本合同的签订背景、您所希望重点关注的合同条款，或者其他您对本次审查的特殊需求，加急完成等"
                    onChange={this.handleTextareaValueChange}
                />
                <HelpBlock>{this.state.textareaValueValidationFailedInfo}</HelpBlock>
            </FormGroup>
        )
    }
}

export default TextareaField