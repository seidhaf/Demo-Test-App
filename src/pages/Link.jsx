import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import {Row, Col} from 'react-bootstrap';
import FormLink from '../components/FormLink.jsx';

class Link extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormLink />
      </div>
    );
  }
}

export default Link
