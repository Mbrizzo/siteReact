import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
