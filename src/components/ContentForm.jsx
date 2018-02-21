import React, { Component } from 'react';
import {Field, reduxForm, FieldArray} from 'redux-form';
import {Form, FormGroup, formTitle, Col, FormControl, ControlLabel, Label, Button, Glyphicon} from 'react-bootstrap';
const renderTags =({ fields}) =>
<ul>
 <button type="button" onClick={() => fields.push()}> Add new Tag </button>
  {
    fields.map ((field, index) =>
      <li key = {index}>
      <Field name = {field} component ="input" placeholder="Tag"/>
      <button type="button" onClick ={() => fields.remove (index)} > Remove </button>
      </li>
  )}
</ul>
class ContentForm extends Component{
 render (){
  return(
    <div class= "container">
    <form onSubmit={this.props.handleSubmit}>
      <div>
      <Col componentClass={ControlLabel} sm={1}> Title </Col>
      <Col sm={11}>
          <div>
            <Field name="Title"
            component="input"
            type="text"
            placeholder="Enter Title"/>
          </div>
          </Col>
      </div>
      <div>
      <Col componentClass={ControlLabel} sm={1}> Content </Col>
      <Col sm={11}>
          <div>
            <Field name="Content"
            component="textarea"
            type="text"
            placeholder="Add Content" />
          </div>
          </Col>
      </div>
      <div>
        <FieldArray name="tags" component={renderTags}/>
        </div>
      <div>
        <button type="submit">Find</button>
      </div>
    </form>
    </div>
    );
  }
}
ContentForm = reduxForm({
  form:'content'
})(ContentForm)
export default ContentForm;
