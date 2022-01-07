import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar">
      <h4>Vacation Spots</h4>
      <div>
        <Link exact to="/">Home | </Link>
        <Link exact to="/locations">List of locations | </Link>
        <Link exact to="/locations/new">Add a Location | </Link>
      </div>
    </nav>
  )
}

export default Nav