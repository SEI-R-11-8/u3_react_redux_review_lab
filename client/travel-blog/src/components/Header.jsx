import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      <h1 id='name'> Favorite Travel locations</h1>
      <nav >
        <NavLink className = 'nav' to="/">Home</NavLink>
        <NavLink className = 'nav' to="/locations">locations</NavLink>
        {/* <NavLink className = 'nav' to="/items">All Stuff</NavLink> */}

      </nav>
    </header>
   
  )
}