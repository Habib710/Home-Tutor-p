import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../Custom/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='navbar-css' variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto nav-css">

        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/shop">Shop</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;