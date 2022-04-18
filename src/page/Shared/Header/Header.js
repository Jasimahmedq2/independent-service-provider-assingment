import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth';


const Header = () => {
  const [user] = useAuthState(auth)

  const handleSingout = () => {
    signOut(auth)
  }
  return (
    <div>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Photographylia </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link as={Link} to="service">service</Nav.Link>
    </Nav>
    <Nav>
     {
       user ? 

       <button className='btn btn-link text-decoration-none text-white' onClick={handleSingout}>sing out</button>

       :

     <Nav.Link as={Link} to="login">login</Nav.Link>

     }      
      <Nav.Link as={Link} to="about">
        about
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      
    </div>
  );
};

export default Header;