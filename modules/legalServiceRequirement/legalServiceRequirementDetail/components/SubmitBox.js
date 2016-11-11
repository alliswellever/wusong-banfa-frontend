/**
 * Created by yuyongyu on 2016/11/4.
 */
import React from 'react'
import {Button, ButtonToolbar, Checkbox, Modal, HelpBlock, Collapse} from 'react-bootstrap'
import { browserHistory } from 'react-router'

/**
 *     props
 * 1.agreeProtocol boolean (required)
 * 2.validattionFailedInfo string （required）
 * 3.onFormDataValidate function (required)
 * 4.onSubmitButtonClick function (required)
 *
 * */
class SubmitBox extends React.Component{
    constructor(props){
        super(props)
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
        this.toggleShowCancleModel = this.toggleShowCancleModel.bind(this)
        this.toggleShowSubmitModel = this.toggleShowSubmitModel.bind(this)
        this.cancle = this.cancle.bind(this)
        this.submit = this.submit.bind(this)

        this.state = {
            agreeProtocol: this.props.agreeProtocol,
            showCancleModal: false,
            showSubmitModal: false
        }
    }

    handleChangeCheckbox(){
        this.setState({
            agreeProtocol: !this.state.agreeProtocol
        })
    }

    toggleShowCancleModel(show){
        this.setState({
            showCancleModal: show
        })
    }

    toggleShowSubmitModel(show){
        if(show){
            if(this.props.onFormDataValidate()){
                this.setState({
                    showSubmitModal: true
                })
            }
        }else{
            this.setState({
                showSubmitModal: false
            })
        }
    }

    cancle(){
        browserHistory.push('/requirements')
    }

    submit(){
        this.toggleShowSubmitModel(false);

        this.props.onSubmitButtonClick();
    }




    render(){
        return (
            <div className="submit-box">
                <Checkbox inline defaultChecked={this.state.agreeProtocol} onChange={this.handleChangeCheckbox}>我同意<a href="" target="_blank">《无讼办法法无服务用户协议》</a></Checkbox>

                <ButtonToolbar>
                    <Collapse in={this.props.validattionFailedInfo.length > 0}>
                        <HelpBlock>{this.props.validattionFailedInfo}</HelpBlock>
                    </Collapse>
                    <Button className="cancle" onClick={() => this.toggleShowCancleModel(true)}>取消</Button>
                    <Button className="submit" disabled={!this.props.agreeProtocol || !this.state.agreeProtocol} onClick={() => this.toggleShowSubmitModel(true)}>{this.props.agreeProtocol ? '提交' : '提交中...'}</Button>
                </ButtonToolbar>

                {/*取消弹框*/}
                <Modal show={this.state.showCancleModal} backdrop='static'>
                    <Modal.Header closeButton onHide={() => this.toggleShowCancleModel(false)}>
                        <Modal.Title>取消需求</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        确认要放弃此次需求吗？
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.cancle}>确认取消</Button>
                        <Button type="submit" onClick={() => this.toggleShowCancleModel(false)}>再想想</Button>
                    </Modal.Footer>
                </Modal>

                {/*确认弹框*/}
                <Modal show={this.state.showSubmitModal} backdrop='static'>
                    <Modal.Header closeButton  onHide={() => this.toggleShowSubmitModel(false)}>
                        <Modal.Title>提交</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        无讼顾问稍后会与您确认，该需求在确认后消耗1次线上机会！
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.toggleShowSubmitModel(false)}>再想想</Button>
                        <Button type="submit" onClick={this.submit}>确认提交</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SubmitBox;