/**
 * Created by yuyongyu on 2016/11/11.
 */
import React from 'react'
import {FormGroup, FormControl, ControlLabel, Radio} from 'react-bootstrap'

/**
 *     props
 * 1.required boolean (required)
 * 2.labelName string （required）
 * 3.labelDesc string (optional)
 * 4.inline boolean (optional)
 * 5.radioList [
 *      {
 *          name (any),
 *          value (string),
 *          defaultChecked (boolean)
 *      }
 * ]
 * 5.onRadioChange function (required)
 *
 * */


class RadioField extends React.Component {
    constructor(props) {
        super(props)
        this.handleRadioClick = this.handleRadioClick.bind(this)

    }

    handleRadioClick(e){
        this.props.onRadioChange(e.target.value)
    }

    render() {
        return (
            <FormGroup className="radio-field">
                <ControlLabel>
                    {this.props.required ? <span className="required">*</span> : ''}
                    {this.props.labelTitle}
                    {this.props.labelDesc ? <span className="tip">{this.props.labelDesc}</span> : ''}
                </ControlLabel>
                <div className="radio-list">
                    {
                        this.props.radioList.map((radio, index) => {
                            return <Radio inline={this.props.inline} defaultChecked={radio.defaultChecked} value={radio.value} key={index} onClick={(e) => this.handleRadioClick(e)}>{radio.name}</Radio>
                        })
                    }
                </div>
            </FormGroup>
        )
    }
}

export default RadioField