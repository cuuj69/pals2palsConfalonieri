import React, {Component, Fragment} from 'react';
import './App.css';
import NavBarComponent from './components/navbar/NavBar';
import ItemListComponent from './components/List/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment className= "App">
      <NavBarComponent></NavBarComponent>
      <ItemListComponent greeting="Hola Coder"></ItemListComponent>
    </React.Fragment>
  );
}

export default App;
