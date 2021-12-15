import '../../App.css';
import React, { Component, Container, useState } from "react";
import ItemCountComponent from "./ItemCount";

function ItemComponent() {

const productos = [];
const promProd = new Promise((resolve, reject) => {
  resolve(true)
});
promProd.then(res => {
  setTimeout(() => {
    console.log("holi")
  })
});

  return (
  <div>

  <ItemCountComponent></ItemCountComponent>
  </div>

  )
}

export default ItemComponent;