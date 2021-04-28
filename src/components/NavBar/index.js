import React from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
  NavDropdown,
} from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Ray Luna</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>About</Nav.Link>
            <Nav.Link href='#link'>Projects</Nav.Link>
            <NavDropdown title='Contact' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
