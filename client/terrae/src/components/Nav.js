import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Terrae from '../images/Terrae.png'

export default function Nav() {
   const navigate = useNavigate()
   return (
      <div className='land_header'>
         <header className='header'>
            <Link to='/'><img className='logo' src={Terrae} /></Link>
            <nav className="navbar">
               <div className='navTitle'></div>
               <div className='navList'>
                  <div className='list' alt="unordered list">
                     <li className='home'><Link to="/Home">Home</Link></li>
                     <li className='about'><Link to="/About">About</Link></li>
                     <li className='explore'><Link to="/Explore">Explore</Link></li>
                     <li className='posts'><Link to="/Posts">Stories</Link></li>
                     <li className='reviews'><Link to="/Reviews">Reviews</Link></li>
                  </div>
               </div>
            </nav>
         </header>
      </div>
   )
}