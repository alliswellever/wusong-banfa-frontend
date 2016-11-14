
import React from 'react';
import {Button, ButtonToolbar, Modal} from 'react-bootstrap';
import { browserHistory } from 'react-router';
import ModifyPassword from './ModifyPassword';

class ModifyPasswordModal extends React.Component{
    constructor(props){
        super(props)
        this.toggleShowCancleModel = this.toggleShowCancleModel.bind(this)
        this.cancle = this.cancle.bind(this)

        this.state = {
            showCancleModal: false
        }
    }


    toggleShowCancleModel(show){
        this.setState({
            showCancleModal: show
        })
    }

    cancle(){
        browserHistory.push('/profile');
    }

    render(){
        return (
            <div className="submit-box">
                <div className="modify-text">
                    <span>密码：</span>
                    <span className="modify-button" onClick={() => this.toggleShowCancleModel(true)}>修改密码</span>
                </div>
                <Modal show={this.state.showCancleModal} backdrop='static'>
                    <Modal.Header closeButton onHide={() => this.toggleShowCancleModel(false)}>
                    </Modal.Header>
                    <Modal.Body>
                        <ModifyPassword/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.toggleShowCancleModel(false)}>取消</Button>
                        <Button type="submit" onClick={this.cancle}>保存</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModifyPasswordModal;