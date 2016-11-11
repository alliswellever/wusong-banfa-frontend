/**
 * Created by yuyongyu on 2016/11/11.
 */
import React from 'react'
import {FormGroup, ControlLabel, InputGroup, FormControl, Glyphicon } from 'react-bootstrap'
import DayPicker, { DateUtils }  from 'react-day-picker';
import '../../../../public/css/reactDatePicker.scss';


/**
 *     props
 * 1.required boolean (required)
 * 2.labelName string （required）
 * 3.labelDesc string (optional)
 * 4.placeholder string (optional)
 * 5.onSelectedDateChange function (required)
 *
 * */

class DatePickerField extends React.Component{
    constructor(props) {
        super(props)
        this.handleDatePikerToggle = this.handleDatePikerToggle.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);

        this.state = {
            showDatePacker: false,
            selectedDay: null
        }
    }

    handleDatePikerToggle(){
        this.setState({
            showDatePacker: !this.state.showDatePacker
        })
    }

    handleDayClick(e, day, { selected }) {
        this.setState({
            showDatePacker: false,
            selectedDay: selected ? null : day
        });

        this.props.onSelectedDateChange(day.toLocaleDateString('zh-Hans-CN'))
    }

    render(){
        return (
            <FormGroup className="date-picker-field">
                <ControlLabel>
                    {this.props.required ? <span className="required">*</span> : ''}
                    {this.props.labelTitle}
                    {this.props.labelDesc ? <span className="tip">{this.props.labelDesc}</span> : ''}
                </ControlLabel>
                <InputGroup onClick={this.handleDatePikerToggle}>
                    <FormControl
                        readOnly
                        type="text"
                        placeholder={this.props.placeholder}
                        value={this.state.selectedDay ? this.state.selectedDay.toLocaleDateString('zh-Hans-CN') : ''}
                    />
                    <InputGroup.Addon >
                        <Glyphicon glyph="calendar" />
                    </InputGroup.Addon>
                </InputGroup>
                {
                    this.state.showDatePacker && <DayPicker
                        selectedDays={ day => DateUtils.isSameDay(this.state.selectedDay, day) }
                        months={['一月', '二月', '三月', '四月', '五月','六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                        weekdaysShort={[ '日', '一', '二', '三', '四', '五', '六']}
                        onDayClick={ this.handleDayClick }
                    />
                }
            </FormGroup>
        )
    }
}

export default DatePickerField