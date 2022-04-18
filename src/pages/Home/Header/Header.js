import { Button } from 'bootstrap';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
  // hooks 
  const [user] = useAuthState(auth)

  // even hendeler 
  const logout = () =>{
    signOut(auth)
  }
  console.log(user);
  return (
    <div className="header-section bg-light">
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand as={Link} to='/'>Gym Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-center">
              

            </Nav>
            <Nav className='text-center'>
            <Nav.Link  as={Link} to='/chackout'>Chackout</Nav.Link>
              <Nav.Link >About</Nav.Link>
              {user ? <button onClick={logout} className='logout'>Logout</button> : <Nav.Link className='' as={Link} to='/login'>Login</Nav.Link>}
              
              {/* <Nav.Link as={Link} to='/signup' className={user ? '' : 'signup'}  >
                Singup
              </Nav.Link> */}
              {user ? <Nav.Link as={Link} to='/signup'  >
                Registor
              </Nav.Link> : '' }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;