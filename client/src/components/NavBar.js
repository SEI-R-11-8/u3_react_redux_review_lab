import { Link } from 'react-router-dom'
import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className='nav-bar'>
                <Link to='/'> Home </Link>
                <Link to='/destinations'> Destinations </Link>
            </nav>
        </div>
    )
}
