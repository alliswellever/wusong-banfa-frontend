import React from 'react';
import {Form, FormGroup, Col, ControlLabel, FormControl} from 'react-bootstrap'


class ModifyName extends React.Component{
    render(){
      return (
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                姓&nbsp;&nbsp;名
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="姓名" />
                </Col>
              </FormGroup>
            </Form>
        )
    }
}

export default ModifyName;


