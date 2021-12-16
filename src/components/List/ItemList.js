import '../../App.css';
import React, { useState } from "react";
import ItemComponent from "./Item";

function ItemListComponent(props) {
    const [products, setProducts] = useState([{ id: 1, title: "Cafe Dark Roast", description: "Cafe dark roast marca Starbucks", price: 606, pictureUrl: "https://images.lider.cl/wmtcl?source=url[file:/productos/1030096a.jpg]&sink" },
        { id: 2, title: "Cafe Light Roast", description: "Cafe light roast marca don pablo", price: 800, pictureUrl: "https://groceryeshop.us/image/cache/data/new_image_2019/ABSB010R0WUVE-420x420.jpg" }
    ]);
    const [timer, setTimer] = useState(false);

    const setTimeoutAsync = () =>
        new Promise((resolve) => {
            setTimeout(() => {
                setTimer(true)
            }, 2000);
        });

    setTimeoutAsync();
    
    return (
        <div className="card">
            {   
            timer ?
                products.map((item) => {
                    return (<ItemComponent product={item} key={item.id} />)
                }) : null
            }
        </div>
    )
}

export default ItemListComponent;
