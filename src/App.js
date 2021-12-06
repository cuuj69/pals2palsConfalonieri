import logo from './logo.svg';
import React, {Component, Fragment} from 'react';
import './App.css';
import NavBarComponent from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment className= "App">
      <NavBarComponent></NavBarComponent>
    </React.Fragment>
  );
}

export default App;
