import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import UploadForm from '../components/UploadForm.jsx';


class Upload extends Component {
  render() {
    return (

      <div>
        <Navbar/>
        <UploadForm />

      </div>

    );
  }
}

export default Upload
