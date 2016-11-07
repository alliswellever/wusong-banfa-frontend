/**
 * Created by yuyongyu on 2016/11/4.
 */
import React from 'react'

import {Button, ButtonToolbar, Checkbox} from 'react-bootstrap'

class SubmitBox extends React.Component{
    constructor(props){
        super(props)
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)

        this.state = {
            agreeProtocol: this.props.agreeProtocol
        }
    }

    handleChangeCheckbox(){
        this.setState({
            agreeProtocol: !this.state.agreeProtocol
        })
    }


    render(){
        return (
            <div className="submit-box">
                <Checkbox inline defaultChecked={this.state.agreeProtocol} onChange={this.handleChangeCheckbox}>我同意<a href="" target="_blank">《无讼办法法无服务用户协议》</a></Checkbox>

                <ButtonToolbar>
                    <Button onClick={this.props.clickCancleButton}>取消</Button>
                    <Button type="submit" disabled={!this.props.agreeProtocol || !this.state.agreeProtocol} onClick={this.props.clickSubmitButton}>{this.props.agreeProtocol ? '提交' : '提交中...'}</Button>
                </ButtonToolbar>
            </div>
        )
    }
}

export default SubmitBox;