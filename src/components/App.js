import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../stylesheets/App.css';
import Main from './ui/Main';
import Header from './ui/Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
