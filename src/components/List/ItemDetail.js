import '../../App.css';
import React, { useState } from "react";

function DetailComponent ({product}) {
  return (
    <div>
      <img className="productoImagen" src={product.pictureUrl}>
      </img>
      <h4 className="productoDetalle">{product.description}</h4>
      <h4 className="productoPrecio">ARS$ {product.price}</h4>
    </div>
  )  
}

export default DetailComponent;