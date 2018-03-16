import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


class NavBar extends React.Component{
  render() {
  return(

    <div class='container'>
      <Navbar >
      <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Test Demo Application</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav >
          <NavItem Active eventKey={1} href='/' >Content</NavItem>
          <NavItem eventKey={2} href="/upload">Upload</NavItem>
          <NavItem eventKey={2} href="/link">Link</NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>

);
  }
}
export default NavBar;
