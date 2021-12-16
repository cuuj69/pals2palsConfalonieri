import '../../App.css';
import React from "react";
import ItemCountComponent from "./ItemCount";



function ItemComponent({product}) {

    return ( 
        <div>
            <div>
                <h3 className="productoTitulo">
                    {product.title}
                </h3>
                
                {/* boton para agregar detalle en proxima consigna */}
                {/* <button className='btnDetalle'>detalle</button> */}
                <h4 className="productoPrecio">ARS$ {product.price}</h4>
                <ItemCountComponent></ItemCountComponent>
            </div>
        </div>
    )
}

export default ItemComponent;