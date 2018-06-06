import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import "../node_modules/jquery/dist/jquery.min.js";
//import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// The Header creates links that can be used to navigate
// between routes.

const activeStyle = () => {
  return {backgroundColor: "#175e17"}
}

const navbarLinkStyle = () => {
  return {color: "snow",
          padding: "0px, 48px",
          marginLeft: "32px",
        }
}

const Header = () => (
  <header>
    {/* <nav>
      <ul>
        <li><Link to='/players/react'>Players React Table</Link></li>
        <li><Link to='/players'>Players Table</Link></li>
        <li><Link to='/tournaments/react'>Tournaments React Table</Link></li>
        <li><Link to='/tournaments'>Tournaments Table</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav> */}
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#228b22", paddingTop: "0px", paddingBottom: "0px"}}>
        <div className="container">
          <a className="navbar-brand" href="/" style={navbarLinkStyle()}>HartPR</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">Hi</span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav mr-auto">
              <li><NavLink to='/players/melee' className="nav-link" style={navbarLinkStyle()} activeStyle={activeStyle()}>Players</NavLink></li>
              <li><NavLink to='/tournaments/melee'className="nav-link" style={navbarLinkStyle()} activeStyle={activeStyle()}>Tournaments</NavLink></li>
              <li><NavLink to='/head2head/melee' className="nav-link" style={navbarLinkStyle()} activeStyle={activeStyle()}>Head2Head</NavLink></li>
              <li><NavLink to='/search' className="nav-link" style={navbarLinkStyle()} activeStyle={activeStyle()}>Search</NavLink></li>
              <li><NavLink to='/about' className="nav-link" style={navbarLinkStyle()} activeStyle={activeStyle()}>About</NavLink></li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdown07">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}
            </ul>
            {/* <form class="form-inline my-2 my-md-0">
              <input class="form-control" type="text" placeholder="Search" aria-label="Search">
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  </header>
)

export default Header;
