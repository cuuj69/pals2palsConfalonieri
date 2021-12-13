import '../../App.css';
import React, { Component, Container, useState } from "react";



function ItemCountComponent() {
    const producto = {
        nombre: "DAI",
        precio: 204,
        stock: 5,
        vendedor: "usuarioRandom"
    }

    const [comprado, setComprado] = useState(1);
    const [resta, setResta] = useState(false);
    const [suma, setSuma] = useState(false);



    const onAdd = () => {
        if (producto.stock == comprado) {
            setSuma(true)
        } else {
            setComprado(comprado + 1);
            setResta(false);
        }
    };

    const onSubtract = () => {
        if (comprado <= 0) {
            setResta(true)
        } else {
            setComprado(comprado - 1);
            setSuma(false);
        }
    };


    return ( <
        div className = "contador" >
        <
        button onClick = { onSubtract }
        disabled = { resta } > - < /button> <
        h3 id = "contador" > { comprado } < /h3> <
        button onClick = { onAdd }
        disabled = { suma } > + < /button> < /
        div >
    )
};

export default ItemCountComponent;