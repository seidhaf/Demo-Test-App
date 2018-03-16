import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import {Row, Col} from 'react-bootstrap';
import LinkForm from '../components/LinkForm.jsx';

class Link extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LinkForm />
      </div>
    );
  }
}

export default Link
