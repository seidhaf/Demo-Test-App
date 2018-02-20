import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import ContentForm from '../components/ContentForm.jsx';
import {PageHeader} from "react-bootstrap";


class Content extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormContent />    
      </div>
    );
  }
}

export default Content
