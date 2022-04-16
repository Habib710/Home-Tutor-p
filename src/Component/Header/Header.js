import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../Custom/CustomLink';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);
  
    return (
        <Navbar className='navbar-css' variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto nav-css">

        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/checkout">Check out</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/about">About me</CustomLink>

        {
          user?<CustomLink to="/login">Login</CustomLink>:
          <button>Log out</button>
        }
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;