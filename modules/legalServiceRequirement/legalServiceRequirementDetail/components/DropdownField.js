/**
 * Created by yuyongyu on 2016/11/10.
 */
import React from 'react'
import {FormGroup, ControlLabel, DropdownButton, MenuItem} from 'react-bootstrap'


/**
 *     props
 * 1.id string (required)
 * 2.required boolean (required)
 * 3.labelName string （required）
 * 4.selectedItem{
 *      value(int),
 *      name(string)
 * } object (required)
 *
 * 5.dropdownMenu[
 *      {
 *         value(int),
 *          name(string)
 *      }
 * ] (required)
 * 5.onSelectedItemChange function (required)
 *
 * */

class DropdownField extends React.Component{
    constructor(props){
        super(props)
        this.handleMenuItemSelect = this.handleMenuItemSelect.bind(this)

    }

    handleMenuItemSelect(itemValue){
        let selectedItem = null
        for(let menuItem of this.props.dropdownMenu){
            if(menuItem.value === itemValue){
                selectedItem = menuItem
                break;
            }
        }

        if(selectedItem){
            this.props.onSelectedItemChange(selectedItem)
        }
    }

    render(){
        return (
            <FormGroup className="dropdown-field">
                <ControlLabel>
                    {this.props.required ? <span className="required">*</span> : ''}
                    {this.props.labelTitle}
                </ControlLabel>
                <DropdownButton title={this.props.selectedItem.name} id={this.props.id} onSelect={(itemValue) => this.handleMenuItemSelect(itemValue)}>
                    {
                        this.props.dropdownMenu.map(function (menuItem, index) {
                            return <MenuItem eventKey={menuItem.value} key={index}>{menuItem.name}</MenuItem>
                        })
                    }
                </DropdownButton>
            </FormGroup>
        )
    }
}

export default DropdownField