import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import FormUpload from '../components/FormUpload.jsx';


class Upload extends Component {
  render() {
    return (

      <div>
        <Navbar/>
        <FormUpload />

      </div>
    
    );
  }
}

export default Upload
