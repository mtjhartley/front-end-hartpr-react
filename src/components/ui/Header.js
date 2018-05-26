import React from 'react'
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// The Header creates links that can be used to navigate
// between routes.
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
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#39BB71"}}>
        <div className="container">
          <a className="navbar-brand" href="/">HartPR</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav mr-auto">
            <li><Link to='/players/react' className="nav-link">Players React Table</Link></li>
            <li><Link to='/players' className="nav-link">Players Table</Link></li>
            <li><Link to='/tournaments/react' className="nav-link">Tournaments React Table</Link></li>
            <li><Link to='/tournaments' className="nav-link">Tournaments Table</Link></li>
            <li><Link to='/head2head' className="nav-link">Head2Head</Link></li>
            <li><Link to='/about' className="nav-link">About</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdown07">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
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
