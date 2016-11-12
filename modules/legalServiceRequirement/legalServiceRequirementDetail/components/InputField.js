/**
 * Created by yuyongyu on 2016/11/12.
 */
import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Collapse} from 'react-bootstrap'


/**
 *     props
 * 1.required boolean (required)
 * 2.labelName string （required）
 * 3.labelDesc string (optional)
 * 4.placeholder string (optional)
 * 5.value string (optional)
 * 6.validateInputValue function (required)
 * 7.onInputChange function (required)
 *
 * */
class InputField extends React.Component{
    constructor(props){
        super(props)
        this.handleInputValueChange = this.handleInputValueChange.bind(this)

        this.state = {
            inputValueValidationState: 'success',
            inputValueValidationFailedInfo: '',
        }

    }

    handleInputValueChange(e) {
        const newInputValue = e.target.value
        const validationFailedInfo = this.props.validateInputValue(newInputValue)
        if(validationFailedInfo && validationFailedInfo.length > 0){
            this.setState({
                inputValueValidationState: 'error',
                inputValueValidationFailedInfo: validationFailedInfo
            });
        }else{
            this.setState({
                inputValueValidationState: 'success',
                inputValueValidationFailedInfo: ''
            });
        }

        this.props.onInputChange('inputValue', newInputValue);
    }
    
    render(){
        return (
            <FormGroup controlId="inputField" validationState={this.state.inputValueValidationState}>
                <ControlLabel>
                    {this.props.required ? <span className="required">*</span> : ''}
                    {this.props.labelTitle}
                    {this.props.labelDesc ? <span className="tip">{this.props.labelDesc}</span> : ''}
                </ControlLabel>
                <FormControl
                    type="text"
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.handleInputValueChange}
                />
                <Collapse in={this.state.inputValueValidationFailedInfo !== null && this.state.inputValueValidationFailedInfo.length > 0}>
                    <HelpBlock >{this.state.inputValueValidationFailedInfo}</HelpBlock>
                </Collapse>
            </FormGroup>
        )
    }
}

export default InputField;