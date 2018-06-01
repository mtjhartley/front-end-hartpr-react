import React, { Component } from 'react';
import '../stylesheets/App.css';
import Main from './ui/Main';
import Header from './ui/Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Background from '../assets/snow.png'


class App extends Component {
  render() {
    return (
      <div style={{backgroundImage: "url(" + Background + ")", backgroundRepeat: "repeat", height: "100%"}}>
      <div className="App">
        <Header />
        <div className="container">
          <Main />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
