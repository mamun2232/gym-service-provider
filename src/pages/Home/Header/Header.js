import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className="header-section">
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand as={Link} to='/'>Gym Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-center">
              

            </Nav>
            <Nav className='text-center'>
            <Nav.Link  as={Link} to='/chackout'>Chackout</Nav.Link>
              <Nav.Link >about</Nav.Link>
              <Nav.Link className='' as={Link} to='/login'>Singin</Nav.Link>
              <Nav.Link className='signup' as={Link} to='signup'>
                Singup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;