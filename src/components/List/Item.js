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
                <ItemCountComponent></ItemCountComponent>
            </div>
        </div>
    )
}

export default ItemComponent;