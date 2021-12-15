import '../../App.css';
import React, { Component, Container, useState } from "react";
import ItemCountComponent from "./ItemCount";

function ItemComponent(props) {
    const [{ title: nombre }, { price: precio }, { pictureUrl: foto }, { description: detalle }] = props;

    return ( <
        div > < img href = { props.foto } > <
        /img> <
        h3 > { props.nombre } < /h3> <
        p > { props.precio } < /p> <
        button > Detalle < /button><
        ItemCountComponent > </ItemCountComponent> 
        </div>

    )
}

export default ItemComponent;