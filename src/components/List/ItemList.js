import '../../App.css';
import React, { useState } from "react";
import ItemComponent from "./Item";

function ItemListComponent() {

    const [products, setProducts] = useState([{ id: 1, title: "Cafe Dark Roast", description: "Cafe dark roast marca Starbucks", price: 606, pictureUrl: "https://images.lider.cl/wmtcl?source=url[file:/productos/1030096a.jpg]&sink" },
        { id: 2, title: "Cafe Light Roast", description: "Cafe light roast marca don pablo", price: 800, pictureUrl: "https://groceryeshop.us/image/cache/data/new_image_2019/ABSB010R0WUVE-420x420.jpg" }
    ]);


    const promProd = new Promise((resolve, reject) => {
            setTimeout(() => {
                    products.map(u => < ItemComponent pictureUrl = "u.pictureUrl"
                        title = "u.title"
                        description = "u.description"
                        price = "u.price" > < /ItemComponent> )
                    }, 3000)
            });

        promProd.then(res => {
            res
        });


        return (
            promProd()
        )
    }

    export default ItemListComponent;