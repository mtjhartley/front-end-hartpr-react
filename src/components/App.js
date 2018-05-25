import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../stylesheets/App.css';
import PlayerList from './Players/PlayerList';
import PlayerTable from './Players/PlayerTable';
import PlayerReactTable from './Players/PlayerReactTable';
import Main from './Players/Main';
import Header from './Players/Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Main />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="container-fluid">
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper indigo lighten-4">
                <a href="/" className="bran-logo center">My Feed</a>
              </div>
            </nav>
          </div>
          <div className="row">
            <div className="col s8 m8 l8">
              <PlayerList />
            </div>
            <div className="col s4 m4 l4">
              <PlayerList />
            </div>
          </div>
          <div className="row">
            <PlayerTable />
          </div>
          <div className="row">
            <PlayerReactTable />
          </div>
        </div> */}


      </div>

    );
  }
}

export default App;
