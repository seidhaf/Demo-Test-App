import React, { Component } from 'react';
import {Field, reduxForm, FieldArray} from 'redux-form';


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
class UploadForm extends Component{
 render (){
  return(
    <div class= "container">
    <form onSubmit={this.props.handleSubmit}>
      <div>
          <label> Title </label>
          <div>
            <Field name="Title"
            component="input"
            type="text"
            placeholder="Enter Title"/>
          </div>

      </div>
      <div>
          <label> Upload </label>
          <div>
            <Field name="Upload"
            component="Input"
            type="text"
            placeholder="Upload file" />
          </div>

      </div>
      <div>
          <label> Content </label>
          <div>
            <Field name="Preview"
            component="textarea"
            type="text"
            placeholder="Preview Text (autogenerated)" />
          </div>

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
UploadForm = reduxForm({
  form:'content'
})(UploadForm)
export default UploadForm;