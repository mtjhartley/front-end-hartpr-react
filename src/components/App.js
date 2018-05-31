import React, { Component } from 'react';
import '../stylesheets/App.css';
import Main from './ui/Main';
import Header from './ui/Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
