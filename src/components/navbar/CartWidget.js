import '../../App.css';
import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import billetera from '../../assets/images/wallet.svg'

function CartComponent () {
  return (
    <Container className="billetera">
      <img src={billetera} alt="billetera" id="billetera" />
    </Container>
  )
}

export default CartComponent;