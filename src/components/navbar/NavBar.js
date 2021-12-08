import logo from '../../assets/images/logo.svg';
import React, {Component, Fragment} from 'react';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavBar from 'react-bootstrap/NavBar';
import CartComponent from './CartWidget';


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
            <CartComponent></CartComponent>
      </Container>
</NavBar>

  )
}

export default NavBarComponent;