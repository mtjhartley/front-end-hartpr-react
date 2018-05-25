import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/players/react'>Players React Table</Link></li>
        <li><Link to='/players'>Players Table</Link></li>
        <li><Link to='/tournaments/react'>Tournaments React Table</Link></li>
        <li><Link to='/tournaments'>Tournaments Table</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header