import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none', color: 'lightgrey', fontFamily: 'Andale Mono' }}>Home </Link>
      
      <Link to="/PlusReview" style={{ textDecoration: 'none', color: 'lightgrey', fontFamily: 'Andale Mono' }}> Add Review|  </Link>  
      
      </nav>
  );
}

export default Nav;