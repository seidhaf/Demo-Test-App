import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';


class ContentForm extends Component{
 render (){
  return(
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
          <label> Content </label>
          <div>
            <Field name="Content"
            component="textarea"
            type="text"
            placeholder="Add Content" />
          </div>
      </div>
      <div>
        <button type="submit">Find</button>
      </div>
    </form>
    );
  }
}
ContentForm = reduxForm({
  form:'content'
})(ContentForm)
export default ContentForm;
