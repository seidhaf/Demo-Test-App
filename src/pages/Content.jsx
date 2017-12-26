import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import FormContent from '../components/FormContent.jsx';
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
