import React, {Component, Fragment} from 'react';
import './App.css';
import NavBarComponent from './components/navbar/NavBar';
import ItemContainerComponent from './components/List/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment className= "App">
      <NavBarComponent></NavBarComponent>
      <ItemContainerComponent greeting="Hola Coder"></ItemContainerComponent>
    </React.Fragment>
  );
}

export default App;
