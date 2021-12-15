import "../../App.css"
import React, { Component, Fragment } from 'react';

import ItemListComponent from "./ItemList";




function ItemContainerComponent(props) {
    const { greeting: value } = props
    return ( <
        div >

        <
        ItemListComponent > < /ItemListComponent> <
        h1 > { props.greeting } < /h1> < /
        div >

    )
}

export default ItemContainerComponent