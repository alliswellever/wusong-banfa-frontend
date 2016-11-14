import React from 'react';
import {Form, FormGroup, Col, ControlLabel, FormControl} from 'react-bootstrap'


class ModifyPassword extends React.Component{
    render(){
      return (
            <Form horizontal>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  旧&nbsp;&nbsp;密&nbsp;&nbsp;码
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  新&nbsp;&nbsp;密&nbsp;&nbsp;码
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  确认密码
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="" />
                </Col>
              </FormGroup>
            </Form>
        )
    }
}

export default ModifyPassword;


