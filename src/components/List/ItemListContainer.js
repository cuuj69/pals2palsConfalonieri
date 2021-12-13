import "../../App.css"
import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCountComponent from "./ItemCount";



function ItemListComponent (props) {
  const {greeting: value} = props
  return (
    <ItemCountComponent></ItemCountComponent>
  )
}

export default ItemListComponent