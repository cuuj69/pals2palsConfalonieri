import React, { Component, Fragment } from 'react';
import './App.css';
import NavBarComponent from './components/navbar/NavBar';
import ItemContainerComponent from './components/List/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return ( 
        <React.Fragment className="main">
            <NavBarComponent />  
            <ItemContainerComponent/> 
        </React.Fragment>
    );
}

export default App;