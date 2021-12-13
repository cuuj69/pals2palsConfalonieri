import '../../App.css';
import React,{ Component,  Container, useState} from "react";



function ItemCountComponent () {
  const producto  = {
    nombre: "DAI",
    precio: 204,
    stock: 5,
    vendedor: "usuarioRandom"
  }

  const botonDispo = producto.stock > 0 ? true : false;

  const [comprado, setComprado] = useState(0);
  const [disable, setDisable] = useState(false);
  
  

  const onAdd = () => {
    if (producto.stock == comprado) {
      setDisable(true)
    } else {
      setComprado(comprado+1)
    }
  };

  const onSubtract = () => {
    if(comprado <= 0) {
      setDisable(true)
    } else (
    setComprado(comprado-1)
  )
};

  
  return(
    <div>
  <button onClick={onSubtract} disabled={disable}>-</button>
  <h3>{comprado}</h3>
  <button onClick={onAdd} disabled={disable}>+</button>
    </div>
  )
};

export default ItemCountComponent;