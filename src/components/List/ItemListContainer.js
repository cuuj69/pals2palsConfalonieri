import "../../App.css"
import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemListComponent from "./ItemList";




function ItemContainerComponent (props) {
  const {greeting: value} = props
  return (
    <div>

    <ItemListComponent></ItemListComponent>
    <h1>{props.greeting}</h1>
    </div>

  )
}

export default ItemContainerComponent