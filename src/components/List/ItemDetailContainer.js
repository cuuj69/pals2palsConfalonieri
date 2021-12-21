import '../../App.css';
import React, { useState } from "react";
import DetailComponent from './ItemDetail';


function DetailContainerComponent ({product}) {
  return(
    <DetailComponent product={product}></DetailComponent>
  )
}

export default DetailContainerComponent;