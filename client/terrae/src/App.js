import React from 'react';
import { Routes, Route, } from 'react-router-dom'
import './styles/App.css';
import Landing from './Landing'
import Home from './pages/Home'
import Nav from './components/Nav'
import About from './pages/About'
import Explore from './pages/Explore'
import Posts from './components/Posts'
import Reviews from './components/Reviews'

export default function App() {

   return (
      <div className='App'>
         <div className='routes'>
            <header>
               <Nav />
            </header>
            <main>
               <Routes>
                  <Route exact path='/' element={<Landing />} />
                  <Route path='/Home' element={<Home />} />
                  <Route path='/About' element={<About />} />
                  <Route path='/Explore' element={<Explore />} />
                  <Route path='/Posts' element={<Posts />} />
                  <Route path='/Reviews' element={<Reviews />} />
               </Routes>
            </main>
         </div>
      </div>
   );
}