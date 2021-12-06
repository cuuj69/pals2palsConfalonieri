import logo from '../logo.svg';
import React, {Component, Fragment} from 'react';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavBar from 'react-bootstrap/NavBar';


function NavBarComponent () {
  return (
    <NavBar bg="dark" variant="dark">
      <Container fluid="md">
            <NavBar.Brand href="#home" id="logo"><img src={logo} alt="logo" /></NavBar.Brand>
            <Nav justify className="justify-content-start">
              <Nav.Item>
                <Nav.Link href="#aboutUs">Como funciona/quienes somos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#faq" className="text-center">FAQ</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact">Contacto</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#jobs">Trabaja con nosotros</Nav.Link>
              </Nav.Item>
            </Nav>
      </Container>
</NavBar>
  )
}

export default NavBarComponent;