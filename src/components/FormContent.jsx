import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Form, FormGroup, formTitle, Col, FormControl, ControlLabel, Label, Button, Glyphicon} from 'react-bootstrap';


class FormContent extends React.Component{
  render() {
  return(

 <div class="container">
      <Form horizontal>
        <FormGroup controlId="formTitle">
          <Col componentClass={ControlLabel} sm={1}>
          Title
          </Col>
          <Col sm={11}>
          <FormControl type="title" placeholder="Enter Title"/>
          </Col>
      </FormGroup>
      <FormGroup controlId="formContent">
        <Col componentClass={ControlLabel} sm={1}>
        Content
        </Col>
        <Col sm={11}>
        <FormControl componentClass="textarea" placeholder="Enter Content"/>
        </Col>
      </ FormGroup>
      <FormGroup controlId="formTags">
        <Col componentClass={ControlLabel} sm={1}>
        Tags
        </Col>
        <Col sm={4}>
        <FormControl type="tag" placeholder="Tag Name"/>
        </Col>
        <Col sm={4}>
        <FormControl type="tag" placeholder="Tag Value"/>
        </Col>
        <Button type="custom" bsStyle="large"><Glyphicon glyph="plus"/></Button>
      </FormGroup>
      <FormGroup>
      <Col smOffset={1} sm={10}>
        <Button bsStyle="Large"> Find</Button>
        </Col>
        </FormGroup>
    </Form>

</div>
      );
  }
}
export default FormContent;
