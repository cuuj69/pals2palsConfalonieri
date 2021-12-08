import '../../src/App.css'
import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getRoles } from '@testing-library/react';



function ItemListComponent (props) {
  const {greeting: value} = props
  return (
    <p>{props.greeting}</p>
  )
}

export default ItemListComponent