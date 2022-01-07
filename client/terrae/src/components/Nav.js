import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

   return (
      <Link to='/'> <div className='land_header'>
         <header className='header'>
            <nav className="navbar">
               <div className='navTitle'></div>
               <div className='navList'>
                  <ul className='list'>
                     <li className='home'><Link to="/Home">Home</Link></li>
                     <li className='about'><Link to="/About">About</Link></li>
                     <li className='explore'><Link to="/Explore">Explore</Link></li>
                     <li className='posts'><Link to="/Posts">Stories</Link></li>
                     <li className='reviews'><Link to="/Reviews">Reviews</Link></li>
                  </ul>
               </div>
            </nav>
         </header>
      </div></Link>
   )
}