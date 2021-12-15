import '../../App.css';
import React, { Component, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import cart from '../../assets/images/cart.svg'

function CartComponent() {
    return ( <
        Container className = "carrito" >
        <
        img src = { cart }
        alt = "carrito"
        id = "carrito" / >
        <
        /Container>
    )
}

export default CartComponent;